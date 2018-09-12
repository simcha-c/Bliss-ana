class ApplicationController < ActionController::Base

  helper_method :current_user, :logged_in?, :column_ord

  def logged_in?
    !!current_user
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def log_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def column_ord(column) #technically input can be a task or a column.
    all_tasks = column.tasks
    task_hash = {}
    head, tail = nil
    all_tasks.length.times do |idx|
      current_task = all_tasks[idx]
      task_hash[current_task.id] = current_task
      head = current_task if current_task.prev_id == nil
      tail = current_task if current_task.next_id == nil
    end
    return [] if head == nil

    ord = [head.id]

    until ord[-1] == tail.id
      last = task_hash[ord[-1]]
      next_task = task_hash[last.next_id]
      if next_task != nil
        task_hash[next_task.id] = next_task
        ord << next_task.id
      end
    end

    ord
  end

end






#

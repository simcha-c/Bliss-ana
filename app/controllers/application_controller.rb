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
    if column.head == nil
      ord = []
    else
      task = column.head
      ord = [task.head.id]
      task_hash = {}
      task_hash[task.head.id] = task.head
      tail_id = task.tail.id

      until ord[-1] == tail_id
        last = task_hash[ord[-1]]
        next_task = last.next
        if next_task != nil
          task_hash[next_task.id] = next_task
          ord << last.next_id
        end
      end
    end
    ord
  end

end






#

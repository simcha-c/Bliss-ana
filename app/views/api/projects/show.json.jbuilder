projects_column_ids = []
json.columns do
  @columns.each do |column|
    projects_column_ids.unshift(column.id)

    ord = column_ord(column)
    json.set! column.id do
      json.extract! column, :id, :title, :project_id
      json.task_ids ord
    end

  end
end

projects_column_ids.sort! # { |x,y| y <=> x }

json.project do
  json.extract! @project, :id, :name, :team_id
  json.column_ids projects_column_ids
end

json.tasks do
  @project.tasks.each do |task|

    json.set! task.id do
      json.extract! task, :id, :name, :description, :due_date, :completed_date,
      :column_id, :creator_id, :assignee_id, :completer_id, :created_at, :updated_at
    end

  end
end

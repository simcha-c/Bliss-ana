
json.columns do
  @columns.each do |column|
    json.set! column.id do
      json.extract! column, :id, :title, :project_id, :task_ids
    end
  end
end

json.project do
  json.extract! @project, :id, :name, :team_id, :column_ids
end

json.tasks do
  @project.tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :name, :description, :due_date, :completed_date,
      :column_id, :creator_id, :assignee_id, :completer_id, :created_at, :updated_at
    end
  end
end

json.column do
  ord = column_ord(@column)
  json.set! @column.id do
    json.extract! @column, :id, :title, :project_id
    json.task_ids ord
  end
end

json.task do
  json.set! @task.id do
    json.extract! @task, :id, :name, :description, :due_date, :completed_date,
    :column_id, :creator_id, :assignee_id, :completer_id, :created_at, :updated_at
  end
end

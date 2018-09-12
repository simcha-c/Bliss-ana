json.columns do
  ord1 = column_ord(@prev_col)
  ord2 = column_ord(@next_col)

  json.set! @prev_col.id do
    json.extract! @prev_col, :id, :title, :project_id
    json.task_ids ord1
  end
  json.set! @next_col.id do
    json.extract! @next_col, :id, :title, :project_id
    json.task_ids ord2
  end
end

# json.task do
#   json.set! @task.id do
#     json.extract! @task, :id, :name, :description, :due_date, :completed_date,
#     :column_id, :creator_id, :assignee_id, :completer_id, :created_at, :updated_at
#   end
# end


json.project do
  json.extract! @project, :id, :name, :team_id, :column_ids.sort
end

json.column do
  json.extract! @column, :id, :title, :project_id
end


project_column_ids = @project.column_ids.sort!

json.project do
  json.extract! @project, :id, :name, :team_id
  json.column_ids project_column_ids
end

json.column do
  json.extract! @column, :id, :title, :project_id
end

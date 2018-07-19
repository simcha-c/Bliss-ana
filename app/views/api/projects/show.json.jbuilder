
json.columns do
  @project.columns.each do |column|
    json.set! column.id do
      json.extract! column, :id, :title, :project_id
    end
  end
end

json.project do
  json.extract! @project, :id, :name, :team_id, :column_ids
end

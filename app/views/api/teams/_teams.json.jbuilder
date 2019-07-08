teams.includes(:members).each do |team|
  json.set! team.id do
    json.extract! team, :id, :name, :member_ids, :membership_ids, :project_ids
  end
end
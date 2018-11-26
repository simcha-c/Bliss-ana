json.currentUser do
  json.extract! @user, :id, :first, :last, :email
  if (@user.photo.attached?)
    json.photoUrl url_for(@user.photo)
  end
end

json.teams do
  @user.teams.includes(:projects).includes(:members).each do |team|
    json.set! team.id do
      json.extract! team, :id, :name, :project_ids, :member_ids
    end
  end
end

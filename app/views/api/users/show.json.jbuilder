  json.current_user do
    json.extract! @user, :id, :first, :last, :email
  end

  json.teams do
    @user.teams.each do |team|
      json.set! team.id do
        json.extract! team, :id, :name
      end
    end
  end

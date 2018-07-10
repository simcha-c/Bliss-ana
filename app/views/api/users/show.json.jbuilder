json.set! @user.id do
    json.extract! @user, :id, :full_name, :email
  end

class DeleteUserAvatar < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :avatar_img
  end
end

class ChangeUserName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :full_name
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
  end
end

class ChangeColumnsName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first
    remove_column :users, :last
    add_column :users, :first, :string, null: false
    add_column :users, :last, :string, null: false
  end
end

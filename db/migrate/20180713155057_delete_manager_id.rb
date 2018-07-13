class DeleteManagerId < ActiveRecord::Migration[5.2]
  def change
    remove_column :teams, :manager_id
  end
end

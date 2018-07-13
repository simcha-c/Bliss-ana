class ChangeColumnname < ActiveRecord::Migration[5.2]
  def change
    remove_column :teams, :lead_id
    add_column :teams, :manager_id, :integer
  end
end

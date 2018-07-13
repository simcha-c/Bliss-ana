class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.integer :lead_id

      t.timestamps
    end
    add_index :teams, [:name, :lead_id], unique: true
  end
end

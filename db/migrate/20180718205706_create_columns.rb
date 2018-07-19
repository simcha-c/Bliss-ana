class CreateColumns < ActiveRecord::Migration[5.2]
  def change
    create_table :columns do |t|
      t.string :title, null: false
      t.integer :project_id, null: false
    end
    add_index :columns, :project_id
  end
end

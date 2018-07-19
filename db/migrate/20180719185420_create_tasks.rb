class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.text :description
      t.date :due_date
      t.datetime :completed_date
      t.integer :column_id, null: false
      t.integer :creator_id, null: false
      t.integer :assignee_id
      t.integer :completer_id

      t.timestamps
    end
    add_index :tasks, :column_id
    add_index :tasks, :assignee_id
    add_index :tasks, :completer_id
  end
end

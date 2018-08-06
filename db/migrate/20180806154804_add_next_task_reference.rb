class AddNextTaskReference < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :next_id, :integer
    add_column :tasks, :prev_id, :integer
  end
end

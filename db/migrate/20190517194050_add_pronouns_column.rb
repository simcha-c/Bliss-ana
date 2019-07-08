class AddPronounsColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :team_memberships, :pronouns, :string
  end
end

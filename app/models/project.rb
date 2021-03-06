# == Schema Information
#
# Table name: projects
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

class Project < ApplicationRecord
  validates :name, :team_id, presence: true

  belongs_to :team,
    foreign_key: :team_id,
    class_name: :Team

  has_many :columns,
    foreign_key: :project_id,
    class_name: :Column,
    dependent: :destroy

  has_many :tasks,
    through: :columns,
    source: :tasks

end

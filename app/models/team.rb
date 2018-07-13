# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true

# A team has many memberships
  has_many :memberships,
    foreign_key: :team_id,
    class_name: :TeamMembership

# Many users/members are part of a team
  has_many :members,
    through: :memberships,
    source: :user


end

# == Schema Information
#
# Table name: team_memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  team_id    :integer          not null
#  role       :string
#  department :string
#  about_me   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMembership < ApplicationRecord
  validates :user_id, :team_id, presence: true
  validates :user_id, uniqueness: { scope: :team_id }

# A membership belongs to a user
  belongs_to :user,
    class_name: :User

# A membership belongs to a team
  belongs_to :team,
    class_name: :Team

end

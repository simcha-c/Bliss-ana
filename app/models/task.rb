# == Schema Information
#
# Table name: tasks
#
#  id             :bigint(8)        not null, primary key
#  name           :string           not null
#  description    :text
#  due_date       :date
#  completed_date :datetime
#  column_id      :integer          not null
#  creator_id     :integer          not null
#  assignee_id    :integer
#  completer_id   :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Task < ApplicationRecord
  validates :name, :column_id, :creator_id, presence: true

  belongs_to :column,
    foreign_key: :column_id,
    class_name: :Column

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :assignee,
    foreign_key: :assignee_id,
    class_name: :User,
    optional: :true

  belongs_to :completer,
    foreign_key: :completer_id,
    class_name: :User,
    optional: :true

end

# == Schema Information
#
# Table name: columns
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  project_id :integer          not null
#

class Column < ApplicationRecord

  validates :title, :project_id, presence: true

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

  has_many :tasks,
    foreign_key: :column_id,
    class_name: :Task,
    dependent: :destroy

  has_one :head, -> { where prev_id: nil },
    foreign_key: :column_id,
    class_name: :Task

  has_one :tail, -> { where next_id: nil },
    foreign_key: :column_id,
    class_name: :Task


end

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

end

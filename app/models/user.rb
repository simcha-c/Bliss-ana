# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first           :string           not null
#  last            :string           not null
#

class User < ApplicationRecord

  validates :email, :first, :last, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :photo

# A user has many team memberships
  has_many :team_memberships,
    foreign_key: :user_id,
    class_name: :TeamMembership

# A user is a part of many teams
  has_many :teams,
    through: :team_memberships,
    source: :team

# A user has many projects (through the teams)
  has_many :projects,
    through: :teams,
    source: :projects

  has_many :assigned_tasks,
    foreign_key: :assignee_id,
    class_name: :Task

  has_many :completed_tasks,
    foreign_key: :completer_id,
    class_name: :Task

  has_many :created_tasks,
    foreign_key: :creator_id,
    class_name: :Task




  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    return @user if @user && @user.is_password?(password)
    return nil
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest= BCrypt::Password.create(password)
  end
end

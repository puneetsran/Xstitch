class Pattern < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  # validates :colours, presence: true
end

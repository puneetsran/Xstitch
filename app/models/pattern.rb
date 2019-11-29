class Pattern < ApplicationRecord
  belongs_to :user
  has_many :favourites

  validates :title, presence: true
  validates :description, presence: true
  # validates :colours, presence: true
end

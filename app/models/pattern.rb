class Pattern < ApplicationRecord
  belongs_to :user
  has_many :favourites
  has_many :checkpoints

  validates :title, presence: true
  validates :description, presence: true
  # validates :colours, presence: true

  has_one_attached :image
end

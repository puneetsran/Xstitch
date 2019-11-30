class Checkpoint < ApplicationRecord
  belongs_to :user
  belongs_to :pattern

  has_one_attached :image
end

class Checkpoint < ApplicationRecord
  belongs_to :user
  belongs_to :pattern

<<<<<<< HEAD
  has_one_attached :image
=======
>>>>>>> merge
end

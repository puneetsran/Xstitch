class User < ApplicationRecord
  has_many :patterns
  has_many :favourites
end

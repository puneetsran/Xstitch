class User < ApplicationRecord
  has_many :patterns
  has_many :favourites

    # def new
    #  @user = User.find_by(id: params[:id])
  
    # end
  # validates :email, uniqueness: {case_sensitive: false}, presence: true
  # validates :name, presence: true
  # validates :password, length: { in: 6..15}, presence: true

  # def self.authenticate_with_credentials(email, password)
  #   user = User.find_by_email(email.downcase.strip)
  #   if user && user.authenticate(password)
  #     user
  #   else
  #     nil
  #   end
  # end

end
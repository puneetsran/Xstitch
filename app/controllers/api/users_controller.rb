class Api::UsersController < ApplicationController

  def index
    puts 'hi'
    puts User.all
    puts 'bye'
    render json: User.all
  end

  # def show
  #   p params
  #   id = params[:id]
  #   pattern = User.find(id)
  #   render json: { user: user }, status: 200 and return
  # end

end

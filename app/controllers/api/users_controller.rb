class Api::UsersController < ApplicationController

  def index
    puts 'hi'
    puts User.all
    puts 'bye'
    render json: User.all
  end

  def show
    p params
    id = params[:id]
    user = User.find(id)
    # favs = Favourite.find_by(user_id: user.id)
    favs = user.favourites

    render json: { user: user, favorites: favs }, status: 200 and return
  end

end

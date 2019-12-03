class Api::FavouritesController < ApplicationController
  def index
    render json: Favourite.all
  end

  def create
    @favourite = Favourite.find_or_create_by(
      user_id: params[:user_id],
      pattern_id: params[:pattern_id]
    )
    @favourite.save

    render json: {
      id: @favourite.id
    }
  end

  def show
    @favourite = Favourite.find params[:id]
    render json: {
      favourite: @favourite
    }
  end

  def destroy
    # puts "Inside favourite controller - destroy"
    # puts params.to_s
    @favourite = Favourite.find params[:id]
    @favourite.destroy
  end
end
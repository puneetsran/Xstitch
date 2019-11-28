class Api::FavouritesController < ApplicationController
  def create
    @favourite = Favourite.find_or_create_by(
      user_id: params[:user_id],
      pattern_id: params[:pattern_id]
    )
    @favourite.save
  end

  def show
    @favourite = Favourite.find params[:id]
    render json: {
      favourite: @favourite
    }
  end

  def destroy
    @favourite = Favourite.find params[:id]
    @favourite.destroy
  end
end
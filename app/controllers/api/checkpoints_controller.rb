class Api::CheckpointsController < ApplicationController
  def index
    render json: Checkpoint.all
  end
  
  def show
    @checkpoint = Checkpoint.find params[:id]
    render json: {
      checkpoint: @checkpoint
    }
  end

  # def show
  #   puts "INSIDE SHOW!!!!!"
  #   p params
  #   id = params[:id]
  #   checkpoint = Checkpoint.find(id)
  #   render json: { checkpoint: checkpoint}, status: 200 and return
  # end

  def create
    puts "inside create checkpoint"
    @checkpoint = Checkpoint.find_or_create_by(
      user_id: params[:user_id],
      pattern_id: params[:pattern_id],
      colours: params[:colours],
      image_url: params[:image_url]
    )
    @checkpoint.save

    render json: {
      id: @checkpoint.id
    }
  end

  def destroy
    @checkpoint = Checkpoint.find params[:id]
    @checkpoint.destroy
  end

end
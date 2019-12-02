class Api::PatternsController < ApplicationController

  def index
    render json: Pattern.all
  end

  def show
    # puts "INSIDE SHOW!!!!!"
    # p params
    id = params[:id]
    pattern = Pattern.find(id)
    # render json: { test: 'cool' }
    favourite = Favourite.find_by(pattern_id: pattern.id)
    render json: { pattern: pattern, favourite: favourite }, status: 200 and return
  end

  def create
    # puts "inside create pattern"
    @pattern = Pattern.create(
      user_id: params[:user_id],
      title: params[:title],
      description: params[:description]
    )    
    if @pattern.save
      @checkpoint = Checkpoint.create(
        patterns_id: @pattern.id,
        colours: params[:colours],
        users_id: params[:user_id]
      )
      if @checkpoint.save 
        render json: { pattern: @pattern, checkpoint: @checkpoint}, status: 200 and return
      else
        puts "Failed save"
        puts @checkpoint.errors
        render json: { error: @checkpoint.errors}, status: 500
      end
    else
      puts "Failed save"
      puts @pattern.errors
      render json: { error: @pattern.errors}, status: 500
    end
  end

  def destroy
    @pattern = Pattern.find params[:id]
    @pattern.destroy
  end

end
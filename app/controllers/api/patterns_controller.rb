class Api::PatternsController < ApplicationController

  def index
    render json: Pattern.all
  end

  def show
    # puts "INSIDE SHOW!!!!!"
    # p params
    id = params[:id]
    
    pattern = Pattern.find(id)

    # @favourites_all = Favourite.joins('join patterns on favourites.pattern_id=patterns.id').where(patterns: {user_id:1})
    # @patterns_all = Pattern.joins('join favourites on patterns.user_id = favourites.user_id').where(patterns: {user_id:1})
    
    # where(articles: { author: author }
    puts "puneet"
    # puts @patterns_all.inspect

    # render json: { test: 'cool' }
    favourite = Favourite.find_by(pattern_id: pattern.id)   # TODO: just finds any one example.  probaby a bug.
    # Favourite.find_by(user_id: 1)
    render json: { pattern: pattern, favourite: favourite}, status: 200 and return
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
        pattern_id: @pattern.id,
        colours: params[:colours],
        user_id: params[:user_id],
        image_url: params[:image_url]
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
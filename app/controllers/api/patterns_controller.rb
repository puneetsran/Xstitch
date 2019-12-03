class Api::PatternsController < ApplicationController

  def index
    render json: Pattern.all
  end

  def show

  #   //From favourites we need to get the user_id and pattern_id
  # //from the Pattern table we need to get the title and description
  
    puts "INSIDE SHOW!!!!!"
    p params
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
    puts "inside create pattern"
    @pattern = Pattern.find_or_create_by(
      user_id: params[:user_id],
      title: params[:title],
      description: params[:description],
      # colours: params[:colours]
    )
    @pattern.save
  end

  def destroy
    @pattern = Pattern.find params[:id]
    @pattern.destroy
  end

end
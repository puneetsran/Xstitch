class Api::PatternsController < ApplicationController

  def index
    render json: Pattern.all
  end

  def show
    puts "INSIDE SHOW!!!!!"
    p params
    id = params[:id]
    pattern = Pattern.find(id)
    # render json: { test: 'cool' }
    render json: { pattern: pattern }, status: 200 and return
  end

  def create
    puts "inside create pattern"
    @pattern = Pattern.find_or_create_by(
      user_id: params[:user_id],
      title: params[:title],
      description: params[:description],
      colours: params[:colours]
    )
    @pattern.save
  end

  def destroy
    @pattern = Pattern.find params[:id]
    @pattern.destroy
  end

end
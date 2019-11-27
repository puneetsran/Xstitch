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

end

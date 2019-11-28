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

  def create_pattern
    @pattern = Pattern.new(pattern_params)
    if @pattern.save
      session[:pattern_id] = @pattern.id
      redirect_to '/', notice: 'Pattern created successfully'
    else
      redirect_to '/home'
    end
  end

  private

  def pattern_params
    params.require(:pattern).permit(:title, :description)
  end

end

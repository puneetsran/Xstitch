class Api::PatternsController < ApplicationController

  def index
    render json: Pattern.all
  end

end

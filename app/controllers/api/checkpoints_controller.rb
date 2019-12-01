class Api::CheckpointsController < ApplicationController
  def create
    @pattern = Pattern.find(params[:pattern_id])
    if @pattern.nil?
      render json: {error: {message: "No Pattern Found"}}, status: 500 and return
    else
      @checkpoint = Checkpoint.create(
        patterns_id: @pattern.id,
        colours: params[:colours],
        users_id: @pattern.user.id
      )
      if @checkpoint.save
        render json: @checkpoint, status: 200 and return
      else
        render json: { error: @checkpoint.errors}, status: 500
      end
    end
  end
end

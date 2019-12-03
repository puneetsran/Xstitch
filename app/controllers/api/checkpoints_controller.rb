class Api::CheckpointsController < ApplicationController
  def index
 



    #     if @checkpoint.nil?
    #   p "failing"
    #   render json: {error: {message: "No Pattern Found"}}, status: 500 and return
    # else
    #   p "inside success"
    #   @checkpoint = Checkpoint.where(patterns_id:params[:patterns_id])
    #   render json: @checkpoint, status: 200 and return
    # end
    render json: Checkpoint.all
  end

  def show
    puts "this is params"
    puts params
    @checkpoint = Checkpoint.find(params[:pattern_id])

    # @pattern = Pattern.find(params[:patterns_id])
    # if @checkpoint.nil?
    #   p "failing"
    #   render json: {error: {message: "No Pattern Found"}}, status: 500 and return
    # else
    #   p "inside success"
    #   @checkpoint = Checkpoint.joins(:pattern).where(
    #   patterns_id:params[:patterns_id]
    #   )
      render json: @checkpoint, status: 200 and return
    # end
  end

  def create
    @pattern = Pattern.find(params[:pattern_id])
    if @pattern.nil?
      render json: {error: {message: "No Pattern Found"}}, status: 500 and return
    else
      @checkpoint = Checkpoint.create(
        pattern_id: @pattern.id,
        colours: params[:colours],
        user_id: @pattern.user.id
      )
      if @checkpoint.save
        render json: @checkpoint, status: 200 and return
      else
        render json: { error: @checkpoint.errors}, status: 500
      end
    end
  end
end

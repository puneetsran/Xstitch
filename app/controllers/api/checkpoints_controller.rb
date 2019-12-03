class Api::CheckpointsController < ApplicationController
<<<<<<< HEAD
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
=======
  # def index
 



    #     if @checkpoint.nil?
    #   p "failing"
    #   render json: {error: {message: "No Pattern Found"}}, status: 500 and return
    # else
    #   p "inside success"
    #   @checkpoint = Checkpoint.where(patterns_id:params[:patterns_id])
    #   render json: @checkpoint, status: 200 and return
    # end
    # render json: Checkpoint.all
  # end

  def show
    puts "this is params"
    puts params
    @checkpoint = Checkpoint.where(params[:patterns_id])

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
>>>>>>> merge

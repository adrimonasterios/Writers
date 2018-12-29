class WritersController < ApplicationController

  def index
    @writers = Writer.all
  end

  def show
    @writer_id = params[:id]
    @current_writer = Writer.where(id: @writer_id).first
    @books = Book.where(writer_id: @writer_id)
  end

end

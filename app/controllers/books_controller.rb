class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book_id = params[:id]
    @current_book = Book.where(id: @book_id).first
    @book_author = Writer.where(id: @current_book.writer_id).first
  end
end

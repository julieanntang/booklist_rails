class BooksController < ApplicationController
  def app
    render component: "App"
  end
  
  def index
    books = Book.all.order(title: :desc)
    render json: books
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book
    else
      render json: { errors: book.errors }, status: :unprocessable_entity
    end
  end
 
  private
 
  def book_params
    params.require(:book).permit(:title, :author)
  end
end

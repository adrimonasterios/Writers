class WritersController < ApplicationController

  def index
    @writers = Writer.all
  end

end

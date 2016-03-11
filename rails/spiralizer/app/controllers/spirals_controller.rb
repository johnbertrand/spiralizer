class SpiralsController < ApplicationController
  before_action :authenticate_user!
  
  def new 
  
  end
  
  def create
    render nothing: true
    @spiral = Spiral.new(:name=>params[:name])
    @spiral.save
  end
  
  def show
  
  end
  
  def list
    render nothing: true
  
  end

end

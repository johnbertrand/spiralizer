class UserController < ApplicationController
  skip_before_action :require_login, only: [:profile]
  before_action :authenticate_user!, :except => [:profile]
  
  
  def edit
  
  end
  
  
  def profile
    
  end
  
  def posts
      @user = User.find(params[:id])
      @posts = @user.posts
  end
 
  
end

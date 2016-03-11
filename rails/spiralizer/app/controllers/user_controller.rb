class UserController < ApplicationController
  skip_before_action :require_login, only: [:profile]
  before_action :authenticate_user!, :except => [:profile]
  
  
  def edit
  
  end
  
  
  def profile
    
  end
  
  def spirals
      @user = User.find(params[:id])
      @spirals = @user.spirals
      render @spirals
  end
 
  
end

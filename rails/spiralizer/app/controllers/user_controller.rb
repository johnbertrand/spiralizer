class UserController < ApplicationController
  skip_before_action :require_login, only: [:profile]
  before_action :authenticate_user!, :except => [:profile]
  
  
  def edit
  
  end
  
  
  def profile
    
  end
  
 
  
end

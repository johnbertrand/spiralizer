class WelcomeController < ApplicationController
  layout false
  layout 'application', :except => :responsive
    
  def index
  end

  def responsive
  end
  
  def foo
  end
  
end

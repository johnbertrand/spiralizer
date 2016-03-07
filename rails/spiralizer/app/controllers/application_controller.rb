class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  after_filter :cors_set_access_control_headers
 
  
  def cors_set_access_control_headers
    # headers['Access-Control-Allow-Origin'] = '*'
    # headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    # headers['Access-Control-Allow-Headers'] = '*'
    # headers['Access-Control-Max-Age'] = "1728000"
    headers["X-CSRF-Token"] = "#{form_authenticity_token}"
    headers["X-CSRF-Param"] = "#{request_forgery_protection_token}"
  end
  
end

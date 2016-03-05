class SessionsController < Devise::SessionsController  
  after_filter :set_csrf_headers, only: [:create, :destroy]
    respond_to :json
    
    protected
    def set_csrf_headers
         Rails.logger.debug("in \n\n\n\n\n\n MADE IT TO set_csrf_headers")
      if request.xhr?
         # Add the newly created csrf token to the page headers
         # These values are sent on 1 request only
        
         response.headers['X-CSRF-Token'] = "#{form_authenticity_token}"
         response.headers['X-CSRF-Param'] = "#{request_forgery_protection_token}"
         Rails.logger.debug(response.headers)
      end
    end  
end 
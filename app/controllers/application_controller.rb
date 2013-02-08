class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from ActionView::MissingTemplate, :with => :render_application_loader
  def render_application_loader
    respond_to do |format|
      format.html do
        render :text => nil, :layout => true
      end
    end
  end

end

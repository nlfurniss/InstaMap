class APIApplicationController < ApplicationController
  respond_to :json
  rescue_from ActionView::MissingTemplate, :with => :render_406

  def render_406
    logger.debug( "ERROR: unexpected missing JSON template", :error )
    head :not_acceptable
  end

end

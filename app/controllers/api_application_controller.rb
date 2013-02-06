class APIApplicationController < ApplicationController
  respond_to :json
  rescue_from ActionView::MissingTemplate, :with => :render_406

  def render_406
    Utils.colored_log( "ERROR: unexpected missing JSON template", :error )
    head :not_acceptable
  end

  def render_401
    Utils.colored_log( "ERROR: resource requires a user", :error )
    head :unauthorized
  end

end

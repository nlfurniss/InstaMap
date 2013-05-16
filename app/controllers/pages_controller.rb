class PagesController <  ApplicationController

  def index
  end

  def locations
    #redirect_to :root
  end

  def location
    @location_data = FoursquareApi.location_lookup({ venue_id: params[:id] })
  end

end
class Api::V1::SearchController < APIApplicationController

  def index
    @location_options = FoursquareApi.location_search({ query: params[:search_query] })
    respond_with( @location_options )
  end

  def show
    @location_data = FoursquareApi.location_lookup({ venue_id: params[:id] })
    respond_with(@location_data)
  end

end
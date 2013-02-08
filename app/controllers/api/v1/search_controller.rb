class Api::V1::SearchController < APIApplicationController

  def index
    @location_options = Location.all
    #@location_options = FoursquareApi.location_search( {query: params[:search_query]} )
    respond_with( @location_options )
  end

end
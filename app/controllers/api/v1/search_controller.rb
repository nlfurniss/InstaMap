class Api::V1::SearchController < APIApplicationController

  def index
    @location_options = FoursquareAPI.location_search( {query: params[:search_query]} )
  end
  
  def show
    foursquare_v2_id = params[:foursquare_v2_id]
    if location = Location.find_by_foursquare_v2_id( foursquare_v2_id )
      location
    else
      location_data = InstagramApi.id_lookup( {foursquare_v2_id: foursquare_v2_id} )
      location = Location.create({
        name: location_data['name'],
        foursquare_v2_id: foursquare_v2_id,
        instagram_id: location_data['id'],
        latitude: location_data['latitude'],
        longitude: location_data['longitude'],
      })
    end
    
    @recent_media = InstagramApi.recent_media( {instagram_id: location.instagram_id} )
    
  end

end
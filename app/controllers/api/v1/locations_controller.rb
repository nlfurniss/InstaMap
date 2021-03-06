class Api::V1::LocationsController < APIApplicationController
  
  def show
    foursquare_v2_id = params[:id]
    next_page = params[:next_page] || ''

    if location = Location.find_by_foursquare_v2_id( foursquare_v2_id )

    else
      location_data = InstagramApi.id_lookup( {foursquare_v2_id: foursquare_v2_id} )
      location = Location.create({
        name: location_data['name'],
        foursquare_v2_id: foursquare_v2_id,
        instagram_id: location_data['id'],
        latitude: location_data['latitude'],
        longitude: location_data['longitude']
      })
    end

    @recent_media = InstagramApi.recent_media({ instagram_id: location.instagram_id, max_id: next_page })
    respond_with( @recent_media )
  end

end
class FoursquareApi < BaseApi
  include HTTParty
  
  base_uri 'https://api.foursquare.com/v2/'
  
  def self.location_search(options={})
    today = Date.today.strftime('%Y%m%d')
    defaults = {
      v: today,
      client_id: SETTINGS['foursquare']['client_id'],
      client_secret: SETTINGS['foursquare']['client_secret'],
      near: 'San Francisco, CA'
    }
    
    defaults.merge!(options)

    endpoint = 'venues/search'
    response = get(endpoint, query: options)
    
    if self.successful_call?(response)
      response['response']['venues']
    else
      response = {error: 'Something went wrong :-('}
    end
  end
end
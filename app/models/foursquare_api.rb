class FoursquareApi < BaseApi
  include HTTParty

  base_uri 'https://api.foursquare.com/v2'

  def self.today
    Date.today.strftime('%Y%m%d')
  end

  # Returns an array of locations given a search query
  #
  def self.location_search(options={})
    defaults = {
      v: today,
      client_id: SETTINGS['foursquare']['client_id'],
      client_secret: SETTINGS['foursquare']['client_secret'],
      near: 'San Francisco, CA',
      limit: 10
    }
    defaults.merge!(options)

    endpoint = '/venues/search'
    response = get(endpoint, query: defaults)

    if self.successful_call?(response)
      response['response']['venues']
    else
      puts response
      response = {error: 'Something went wrong with Foursquare location search'}
    end
  end

  def self.location_lookup(options={})
    defaults = {
      v: today,
      client_id: SETTINGS['foursquare']['client_id'],
      client_secret: SETTINGS['foursquare']['client_secret'],
    }
    defaults.merge!(options)

    endpoint = '/venues/' + defaults[:venue_id]
    response = get(endpoint, query: defaults)

    if self.successful_call?(response)
      response['response']['venue']
    else
      puts response
      response = {error: 'Something went wrong with Foursquare location lookup'}
    end
  end

end
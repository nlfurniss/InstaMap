class InstagramApi < BaseApi
  include HTTParty

  base_uri 'https://api.instagram.com/v1'

  # Takes a FourSquare location ID and returns the Instagram location ID
  #
  def self.id_lookup(options={})
    defaults = {
      client_id: SETTINGS['instagram']['client_id'],
      client_secret: SETTINGS['instagram']['client_secret']
    }
    defaults.merge!(options)

    endpoint = '/locations/search'
    response = get(endpoint, query: defaults)

    if self.successful_call?(response)
      response['data'][0]
    else
      response = {error: 'Something went wrong :-('}
    end
  end

  # Returns recent pictures given an Instagram location id
  #
  def self.recent_media(options={})
    defaults = {
      client_id: SETTINGS['instagram']['client_id'],
      client_secret: SETTINGS['instagram']['client_secret']
    }
    defaults.merge!(options)

    endpoint = '/locations/' + defaults['instagram_id'] +'/media/recent'
    response = get(endpoint, query: defaults)

    if self.successful_call?(response)
      response['data']
    else
      response = {error: 'Something went wrong :-('}
    end
  end

end
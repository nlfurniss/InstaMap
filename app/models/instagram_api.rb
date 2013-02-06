class InstagramApi < BaseApi
  include HTTParty
  
  base_uri 'https://api.instagram.com/v1/'

  def self.id_lookup(options={})
    default_params = {
      client_id: SETTINGS['instagram']['client_id'],
      client_secret: SETTINGS['instagram']['client_secret']
    }

    default_params.merge!(options)
  
    endpoint = 'locations/search'
    response = get(endpoint, query: default_params)
  
    if self.successful_call?(response)
      response['data'][0]
    else
      response = {error: 'Something went wrong :-('}
    end
  end
  
  def self.recent_media(options={})
    default_params = {
      client_id: SETTINGS['instagram']['client_id'],
      client_secret: SETTINGS['instagram']['client_secret']
    }

    default_params.merge!(options)
  
    endpoint = 'locations/' + default_params['instagram_id'] +'/media/recent'
    response = get(endpoint, query: default_params)
  
    if self.successful_call?(response)
      response['data']
    else
      response = {error: 'Something went wrong :-('}
    end
  end
  
end
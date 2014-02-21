SETTINGS = YAML.load_file("#{Rails.root}/config/settings.yml")[Rails.env]

# Load in keys from EVN vars
SETTINGS['instagram']['client_id'] = ENV['INSTAGRAM_CLIENT_ID'] || ''
SETTINGS['instagram']['client_secret'] = ENV['INSTAGRAM_CLIENT_SECRET'] || ''
SETTINGS['foursquare']['client_id'] = ENV['FOURSQUARE_CLIENT_ID'] || ''
SETTINGS['foursquare']['client_secret'] = ENV['FOURSQUARE_CLIENT_SECRET'] || ''
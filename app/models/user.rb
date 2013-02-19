class User < ActiveRecord::Base

  attr_accessible :uid, :username, :full_name, :profile_picture, :access_token
  validates_uniqueness_of :uid

  def like(picture_id)
    endpoint = 'https://api.instagram.com/v1/media/' + picture_id +'/likes'
    HTTParty.post(endpoint, query: {access_token: self.access_token})
  end

end
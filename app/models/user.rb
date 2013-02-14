class User < ActiveRecord::Base

  attr_accessible :uid, :username, :full_name, :profile_picture, :access_token
  validates_uniqueness_of :uid

end
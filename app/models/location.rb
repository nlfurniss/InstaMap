# == Schema Information
#
# Table name: locations
#
#  id               :integer          not null, primary key
#  name             :string(255)
#  foursquare_v2_id :string(255)
#  instagram_id     :string(255)
#  latitude         :float
#  longitude        :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Location < ActiveRecord::Base

  validates_uniqueness_of :foursquare_v2_id, :instagram_id

end

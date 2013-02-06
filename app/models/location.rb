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

  attr_accessible :name, :foursquare_v2_id, :instagram_id, :latitude, :longitude
  validates_uniqueness_of :foursquare_v2_id, :instagram_id

  def as_json(options = {})
    params = {
        :except => [
          :id,
          :created_at,
          :updated_at
        ]
    }
    super( params.merge(options) )
  end

end

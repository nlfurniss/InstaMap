class CreateLocation < ActiveRecord::Migration
  create_table :locations do |t|
    t.string :name
    t.string :foursquare_v2_id
    t.string :instagram_id
    t.float  :latitude
    t.float  :longitude
    t.timestamps
  end
end
class AddIndexesToLocation < ActiveRecord::Migration
  def change
    add_index :locations, :foursquare_v2_id
    add_index :locations, :instagram_id
  end
end

class CreateUserModel < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :uid
      t.string  :user_name
      t.string  :full_name
      t.string  :profile_picture
      t.string  :acess_token
      t.timestamps
    end
  end
end

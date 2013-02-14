class CorrectUserModel < ActiveRecord::Migration
  rename_column :users, :user_name, :username
  rename_column :users, :acess_token, :access_token
end

class AuthController < ApplicationController
  layout false

  def authorize
    redirect_to "https://instagram.com/oauth/authorize/?client_id=#{SETTINGS['instagram']['client_id']}&redirect_uri=#{SETTINGS['instagram']['redirect_uri']}&response_type=code&scope=basic+likes"
  end

  def redirect
    query_params = {
      code: params[:code],
      client_id: SETTINGS['instagram']['client_id'],
      client_secret: SETTINGS['instagram']['client_secret'],
      grant_type: 'authorization_code',
      redirect_uri: SETTINGS['instagram']['redirect_uri']
    }

    response = HTTParty.post('https://api.instagram.com/oauth/access_token', body: query_params)
    user_data = response.parsed_response['user']
    if @user = User.find_by_uid(user_data['id'])
      @user
    else
      @user = User.create({
        uid: user_data['id'],
        username: user_data['username'],
        full_name: user_data['full_name'],
        profile_picture: user_data['profile_picture'],
        access_token: response.parsed_response['access_token']
      })
      @user
    end
    render template: 'auth/login_redirect'
  end

end
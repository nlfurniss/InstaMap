class Api::V1::UsersController < APIApplicationController

  def show
    @user = User.find( params[:id] )
    respond_with( @user )
  end

end
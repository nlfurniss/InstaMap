class Api::V1::UsersController < APIApplicationController

  def show
    @user = User.find(params[:id])
    respond_with( @user )
  end

  def like
    @user = User.find(params[:id])
    @user.like(params[:picture_id])
    respond_with({message: 'picture liked'})
  end
end
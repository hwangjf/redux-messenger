class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: [:index, :show]

  def index
    users = Users.all

    render json: users
  end
  
  def create
    user = User.create(user_params)

    if user.valid?
      render json: {user: UserSerializer.new(user)}
    else
      render json: user.errors.full_messages
    end
  end
  
  def show
    render json: curr_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
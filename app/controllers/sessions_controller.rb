class SessionsController < ApplicationController

  def login
    user = User.find_by_username!(params[:username])
    if user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {"error": "Invalid Credentials"}, status: :unauthorized
    end
  end

  def logout
    session.delete :user_id
  end
  
end

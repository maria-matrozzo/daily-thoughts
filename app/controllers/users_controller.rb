class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if User.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {"error": user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id:params[:id])
        if user
            user.destroy
            head :no_content
        else
            render json: {"error": "User not found"}, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end

end

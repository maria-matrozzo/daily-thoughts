class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def record_not_found(error)
        render json: {"error": error.msg}, status: :unprocessable_entity
    end

    def current_user
        User.find_by_id(session[:user_id])
    end

end

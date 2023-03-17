class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    # signup

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def create 
    #     user = User.create!(user_params)
    #     if user.valid? 
    #         session[:user_id] = user.id
    #         render json: user
    #     else 
    #         render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    # keeps user logged-in

    def show
        render json: @current_user
    end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #         render json: user
    #     else 
    #         render json: {error: "Not authorized, kiddo."}, status: :unauthorized
    # end

    # get current user and render in json

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
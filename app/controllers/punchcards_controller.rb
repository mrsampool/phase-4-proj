class PunchcardsController < ApplicationController
    before_action :authorize

    def index 
        punchcard = Punchcard.all
        render json: punchcard
    end

    def create 
        punchcard = Punchcard.create(:punchcard_params)
        render json: punchcard, status: :created
    end

    def show
        punchcard = Punchcard.find_by(id: params[:id])
        render json: punchcard
    end

    def destroy
        punchcard = Punchcard.find_by(id: params[:id])
        punchcard.destroy
    end

    def update
        punchcard = Punchcard.find_by(id: params[:id])
        punchcard.update(punchcard_params)
        render json: punchcard, status: :created
    end

    private 

    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def punchcard_params
        params.permit(:name, :type, :count, :qr_code)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized, unless session.include? :user_id
    end

end

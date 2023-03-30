class PunchcardsController < ApplicationController
    before_action :authorize
    before_action :set_punchcard, only: [:index, :show, :update]

    def index 
        punchcards = @current_user.punchcards
        render json: punchcards
    end

    def show
      render json: @punchcard
    end

    def create 
      punchcard = @current_user.punchcards.create!(punchcard_params)
      render json: punchcard, status: :created 
    end

    def update
        punchcard = @current_user.punchcards.find_by(id: params[:id])
        if punchcard
            punchcard.update(punchcard_params)
            render json: punchcard
        else 
            render json: { error: "Punchcard not found"}, status: :not_found
        end
    end

    private 

    # STRONG PARAMS

    def punchcard_params
      params.permit(:id, :count, :reward, :user_id, :customer_id)
    end

    def set_punchcard
      @punchcard = @current_user.punchcards.find_by(id: params[:id])
      render json: { error: "Punchcard not found" }, status: :not_found unless @punchcard
    end

end

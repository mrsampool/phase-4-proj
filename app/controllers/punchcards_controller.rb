class PunchcardsController < ApplicationController
    before_action :authorize

    # Below are the actions ONLY for the User that is LOGGED IN.
    # VALIDATIONS ARE RUN WHEN ITS SAVED-- like create, save, and update

    def index 
        # user is in SESSION not params
        punchcards = @current_user.punchcards
        render json: punchcards
    end

    def show
      punchcard = @current_user.punchcards.find_by(id: params[:id])
      render json: punchcard
    end


    def create 
      punchcard = @current_user.punchcards.create!(punchcard_params)
      render json: punchcard, status: :created 
    end

      def destroy
        punchcard = @current_user.punchcards.find_by(id: params[:id])
        if punchcard
          punchcard.destroy
          head :no_content
        else 
          render json: { error: "Punchcard not found!"}, status: :not_found
        end
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
      params.permit(:name, :kind, :count, :reward, :user_id, :customer_id)
    end

end

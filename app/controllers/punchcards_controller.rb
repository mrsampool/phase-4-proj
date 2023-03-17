class PunchcardsController < ApplicationController
    # before_action :authorize

    # Below are the actions ONLY for the User that is LOGGED IN.
    # VALIDATIONS ARE RUN WHEN ITS SAVED-- like create, save, and update

    def index 
        # user is in SESSION not params
        punchcards = @current_user.punchcards
        render json: punchcards
    end

    def show
        punchcard = @current_user.punchcards.find_by(id: params[:id])
        if punchcard 
            render json: punchcard
        else 
            render json: { error: "Not found."}, status: :unauthorized 
        end
    end

    def create 
        punchcard = @current_user.punchcards.create(punchcard_params)
        if punchcard.valid? 
          render json: punchcard 
        else 
          render json: {errors: punchcard.errors.full_messages}, status: :unprocessable_entity
        end
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
            punchcard.update(puchcard_params)
            render json: punchcard
        else 
            render json: { error: "Punchcard not found"}, status: :not_found
        end
    end

    private 

    # def current_user
    #     user = User.find_by(id: session[:user_id])
    # end

    # STRONG PARAMS

    def punchcard_params
        params.permit(:name, :kind, :count, :reward)
    end

    # def authorize
    #     return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    #   end

end

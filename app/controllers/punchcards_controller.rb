class PunchcardsController < ApplicationController
    before_action :authorize

    # Below are the actions ONLY for the User that is LOGGED IN.
    # VALIDATIONS ARE RUN WHEN ITS SAVED-- like create, save, and update

    def index 
        # user is in SESSION not params
        punchcards = current_user.punchcards
        render json: punchcards
    end

    def create 
        puts "session[:user_id]: #{session[:user_id]}"
        puts "current_user: #{current_user.inspect}"

        punchcard = current_user.punchcards.create(punchcard_params)
        if punchcard.valid? 
          render json: punchcard 
        else 
          render json: {errors: punchcard.errors.full_messages}, status: :unprocessable_entity
        end
      end
      

    def show
        punchcard = current_user.punchcards.find_by(id: params[:id])
        if punchcard 
            render json: punchcard
        else 
            render json: { error: "Not found."}, status: :unauthorized 
        end
    end

    # def destroy
    #    
    # end

    # def update
    #  
    # end

    private 

    def current_user
        user = User.find_by(id: session[:user_id])
    end

    def punchcard_params
        params.permit(:name, :kind, :count, :reward)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
      end

end

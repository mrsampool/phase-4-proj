class CustomersController < ApplicationController

    before_action :authorize

    def index
      customer = @current_user.customers.all 
      render json: customer
    end
  
    def show
      customer = @current_user.customers.find_by(id: params[:id])
      render json: customer
    end

    def create 
      customer = @current_user.customers.create(customer_params)
    end

    private 

    def customer_params
      params.permit(:id, :username)
    end
    
end

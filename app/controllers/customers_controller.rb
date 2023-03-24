class CustomersController < ApplicationController

    before_action :authorize

    def index
      customers = Customer.all 
      render json: customers
    end
  
    def show
      customer = Customer.find_by(id: params[:id])
      render json: customer
    end

    def create 
      customer = Customer.create(customer_params)
      render json: customer
    end

    private 

    def customer_params
      params.permit(:id, :username)
    end
    
end

class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize

  private 

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def set_punchcard
    @punchcard = @current_user.punchcards.find_by(id: params[:id])
    render json: { error: "Punchcard not found" }, status: :not_found unless @punchcard
  end

  def set_customer
    @customer = @current_user.customers.find_by(id: params[:id])
    render json: { error: "Customer not found" }, status: :not_found unless @customer
  end

  def unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Not found" }, status: :not_found
  end

end

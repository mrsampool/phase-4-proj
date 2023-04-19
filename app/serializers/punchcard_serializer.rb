class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :count, :reward, :user_id, :customer_id

  # include method to include username
  
  has_one :user
  has_one :customer
end

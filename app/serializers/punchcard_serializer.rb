class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :count, :reward, :user_id, :customer_id
  
  has_one :user
  # belongs_to :customer
end

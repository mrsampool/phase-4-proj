class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :count, :reward, :user_id, :customer_id
  
  has_one :user
  belongs_to :customer
end

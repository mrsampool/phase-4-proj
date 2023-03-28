class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :count, :reward, :user_id, :customer_id
  
  belongs_to :user
  belongs_to :customer
end

class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :count, :reward, :user_id, :customer_id
end

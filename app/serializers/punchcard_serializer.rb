class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :count, :qr_code, :business_id, :user_id
end

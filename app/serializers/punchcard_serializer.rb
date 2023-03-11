class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :count, :qr_code
end

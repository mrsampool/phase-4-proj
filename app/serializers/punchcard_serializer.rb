class PunchcardSerializer < ActiveModel::Serializer
  attributes :id, :name, :kind, :count, :user_id
end

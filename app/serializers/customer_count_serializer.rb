class CustomerCountSerializer < ActiveModel::Serializer
    # attributes :id, :count
    belongs_to :customer
  end
  
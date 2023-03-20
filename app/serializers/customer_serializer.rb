class CustomerSerializer < ActiveModel::Serializer
  attributes :id

  has_many :punchcards
  has_many :users, through: :punchcard
end

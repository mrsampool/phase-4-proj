class CustomerSerializer < ActiveModel::Serializer
  attributes :id

  has_many :punchcards
  has_many :users, through: :punchcards
end

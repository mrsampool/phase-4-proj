class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :punchcards
  has_many :users, through: :punchcard
end

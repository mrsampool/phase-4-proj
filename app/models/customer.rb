class Customer < ApplicationRecord
    has_many :punchcards
    has_many :users, through: :punchcards

    validates :username, presence: true, uniqueness: true
end

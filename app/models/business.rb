class Business < ApplicationRecord
    has_many :punchcards
    has_many :users, through: :punchcards
end

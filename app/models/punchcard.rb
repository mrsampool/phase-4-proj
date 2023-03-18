class Punchcard < ApplicationRecord
    belongs_to :user
    belongs_to :customer

    validates :name, presence: true
    validates :count, length: {maximum: 20}
end

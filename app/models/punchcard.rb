class Punchcard < ApplicationRecord
    belongs_to :user
    belongs_to :customer, optional: true

    validates :name, presence: true
    validates :count, length: {maximum: 20}
end

class Punchcard < ApplicationRecord
    belongs_to :user
    belongs_to :customer, optional: true

    validates :reward, presence: true
    validates :count, presence: true, numericality: true, length: {maximum: 30}
end

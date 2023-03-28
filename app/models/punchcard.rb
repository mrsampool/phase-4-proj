class Punchcard < ApplicationRecord
    belongs_to :user
    belongs_to :customer, optional: true

    validates :reward, presence: true
    validates :count, presence: true
    validates :count, length: {maximum: 30}
end

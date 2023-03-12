class Punchcard < ApplicationRecord
    validates :name, presence: true

    belongs_to :business
    belongs_to :user
end

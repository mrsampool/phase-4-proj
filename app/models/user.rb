class User < ApplicationRecord
    has_many :punchcards, dependent: :destroy
    has_many :customers, through: :punchcards

    has_secure_password    

    def self.average_punchcards
        joins(:punchcards).select('users.*, COUNT(punchcards.id) as punchcard_count').group(:id).average('punchcard_count')
    end

    validates :username, uniqueness: true
    validates :username, presence: true
    validates :password, length: { in: 8..15 }
    
end
 
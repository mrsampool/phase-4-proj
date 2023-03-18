class User < ApplicationRecord
    has_many :punchcards 
    has_many :users, through: :punchcards

    has_secure_password    
    
    validates :username, presence: true
    validates :password, length: { in: 8..15}
end
 
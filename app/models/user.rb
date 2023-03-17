class User < ApplicationRecord
    has_many :punchcards 

    has_secure_password    
    
    validates :username, presence: true
end
 
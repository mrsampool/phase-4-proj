class Customer < ApplicationRecord
    has_many :punchcards
    has_many :users, through: :punchcards

    # def self.top_customers
    #     joins(:punchcards).group(:id).order('COUNT(punchcards.id) DESC').limit(4)
    # end

    # def self.alphabet 
    #   Customer.order(:username)
    # end
    
    validates :username, presence: true
    validates :username, uniqueness: true
end

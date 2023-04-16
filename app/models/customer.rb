class Customer < ApplicationRecord
    has_many :punchcards
    has_many :users, through: :punchcards

    def self.greater_than_num(num)
        # Find all customers who have created punchcards and have a total count of punchcards greater than 10. 
  
        # joins(:punchcards).select('customers.*, COUNT(punchcards.id)').group('customers.id').where('punchcard_count > ?', num)
        byebug

    joins(:punchcards).select('customers.*, COUNT(punchcards.id) as punchcard_count').where('punchcards.id' > ?', num).group(:id)
    end
    
    validates :username, presence: true
    validates :username, uniqueness: true
end

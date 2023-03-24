# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CUSTOMERS




# USE FAKER 

Customer.destroy_all
Punchcard.destroy_all

username = ["Vladimir", "Beckett", "Estragon", "Silvia", "Taft", "Milton" ]

100.times do
    customer = Customer.create(
        username: username.sample
        )
end



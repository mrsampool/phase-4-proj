# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CUSTOMERS


# USE FAKER 
puts "seedin"

Customer.destroy_all
Punchcard.destroy_all

username = ["Vladimir", "Beckett", "Estragon", "Silvia", "Taft", "Milton" ]
reward = ["25% off next purchase", "One Free Coffee", "15% off next purchase", "Two for One"]
count = [10,15,20]
id_counter = 1

100.times do
    customer = Customer.create(
        id: id_counter,
        username: username.sample
        )
    id_counter += 1

    punchcard = Punchcard.create(
        count: count.sample,
        reward: reward.sample,
        user_id: 1,
        customer_id: customer.id,
    )
end



puts "been dun seeded"
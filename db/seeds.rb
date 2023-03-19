# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CUSTOMERS

c1 = Customer.create(username: "Smooky Buggins")
c2 = Customer.create(username: "Pooky Beggins")
c3 = Customer.create(username: "Gooky Boggins")

c1card = customer.punchcards.create(name: starbucks, kind: 'cafe', count: 10, reward: "1/2 Off", user_id: 1)
c2card = customer.punchcards.create(name: starbucks, kind: 'cafe', count: 10, reward: "1/2 Off", user_id: 1)
c3card = customer.punchcards.create(name: starbucks, kind: 'cafe', count: 10, reward: "1/2 Off", user_id: 1)
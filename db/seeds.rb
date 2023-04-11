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

username = ["Mary Cherry","Anna Banana","Emma Pajama","Elizabeth Muffin","Minnie Winnie","Margaret Carrot","Ida Cheetah","Alice Palace","Bertha Gerta","Sarah Sahara","Annie Fanny","Clara Chimera","Ella Nutella","Florence Forensics","Cora Aurora","Martha Scarpa","Laura Flora","Nellie Smelly","Grace Space","Carrie Scary","Maude Claude","Mabel Gable","Bessie Jessie","Jennie Penny","Gertrude Rude","Julia Coolia","Hattie Catty","Edith Digits","Mattie Catty","Rose Foes","Catherine Latrine","Lillian Billion","Ada Nada","Lillie Silly","Helen Melon","Jessie Messy","Louise Squeeze","Ethel Pebble","Lula Formula","Myrtle Turtle","Eva Diva","Frances Dances","Lena Cena","Lucy Goosey","Edna Kedna","Maggie Baggy","Pearl Squirrel","Daisy Lazy","Fannie Nanny","Josephine Morphine","Dora Explorer","Rosa Poser","Katherine Grapevine","Agnes Lasagne","Marie Safari","Nora Aurora","May Ray","Mamie Yammy","Blanche Ranch","Stella Umbrella","Ellen Smellen","Nancy Fancy","Effie Taffy","Sallie Rally","Nettie Betty","Della Umbrella","Lizzie Bizzy","Flora Dora","Susie Snoozy","Maud Fraud","Mae Bay","Etta Jetta","Harriet Parrot","Sadie Lady","Caroline Rhine","Katie Skatie","Lydia Lidia","Elsie Kelsey","Kate Plate","Susan Dozen","Mollie Jolly","Alma Calmer","Addie Daddy","Georgia Flora","Eliza Pizza","Lulu Goo-goo","Nannie Fanny","Lottie Dottie","Amanda Panda","Belle Shell","Charlotte Scarlet","Rebecca Pecca","Ruth Tooth","Viola Viola","Olive Solve","Amelia Sicilia","Hannah Montana","Jane Crane","Virginia Argentina","Emily Smiley","Matilda Hilda","Irene Serene","Kathryn Catherin","Esther Cester","Willie Chili","Henrietta Spaghetti","Ollie Folly","Amy Miami","Rachel Hachel","Sara Sahra","Estella Fella","Theresa Treasa","Augusta Fuster","Ora Aurora","Pauline Clean","Josie Nosey","Lola Crayola","Sophia Sofa","Leona Mona","Anne Pan","Mildred Pillared","Ann Pan","Beulah Cooler","Callie Sally","Lou Blue","Delia Amelia","Eleanor Smelther","Barbara Scarf-a","Iva Diva","Louisa Mariposa","Maria Pizzeria","Mayme Game","Evelyn Melon","Estelle Bell","Nina Mina","Betty Getti","Marion Dalmatian","Bettie Yeti","Dorothy Glory","Luella Cruella","Inez Knees","Lela Bella","Rosie Cozy","Allie Hally","Millie Tilly","Janie Rainy","Cornelia Nelia","Victoria Horia","Ruby Doobie","Winifred Manfred","Alta Malta","Celia Amelia","Christine Teen"]

reward = ["25% off next purchase", "One Free Coffee", "15% off next purchase", "Two for One"]

count = [10,15,20]

id_counter = 1

20.times do
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

20.times do
    customer = Customer.create(
        id: id_counter,
        username: username.sample
        )
    id_counter += 1

    punchcard = Punchcard.create(
        count: count.sample,
        reward: reward.sample,
        user_id: 25,
        customer_id: customer.id,
    )
end


puts "been dun seeded"
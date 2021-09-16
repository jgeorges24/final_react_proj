# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#seeding filies below

# r1 = Rapper.create(name: "The migos")
# r2 = Rapper.create(name: "kanye")
# r3 = Rapper.create(name: "k charles")
# r4 = Rapper.create(name: "Prez P")
# r5 = Rapper.create(name: "The bad bunny")
# r6 = Rapper.create(name: "rick scott")
# r7 = Rapper.create(name: "desperado")
# r8 = Rapper.create(name: "Mega Begga")

v1 = Video.new(song: "bad and boojie")
# v1.rapper= r1
v1.save
v2 = Video.new(song: "dumb axx")
# v2.rapper= r2
v2.save
v3 = Video.new(song: "Midnight In Dallas")
# v3.rapper= r3
v3.save
v4 = Video.new(song: "OD")
# v4.rapper= r4
v4.save
v1 = Video.new(song: "good cop and bad cop")
# v1.rapper= r5
v1.save
v2 = Video.new(song: "raind bow")
# v2.rapper= r6
v2.save
v3 = Video.new(song: "handy mandy In llas")
# v3.rapper= r7
v3.save
v4 = Video.new(song: "Omango")
# v4.rapper= r8
v4.save

# camp1 = Camp.create(name: "Trap")
# camp2 = Camp.create(name: "Dreamer")
# camp3 = Camp.create(name: "crazy")

# camp1.videos << v1
# camp2.videos << v3
# camp2.videos << v4
# camp3.videos << v2
# camp1.videos << v7
# camp2.videos << v5
# camp2.videos << v6
# camp3.videos << v8






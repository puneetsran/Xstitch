# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

puts "Eradicating lingering vermin ..." 
Pattern.destroy_all
User.destroy_all
Favourite.destroy_all

puts "Grudgingly permitting the addition of users ... "

user1 = User.create!({
  name: "John",
  email: "john@email.com",
  password: "password"
})

user2 = User.create!({
  name: "Bob",
  email: "bob@email.com",
  password: "password"
})

puts "Creating Patterns ..."

user1.patterns.create!({
  title:  'My cat',
  description: 'Black cat',
  colours: []
})

user1.patterns.create!({
  title:  'My dog',
  description: 'Poodle',
  colours: []
})

user2.patterns.create!({
  title:  'School Bus',
  description: 'Yellow',
  colours: []
})

puts "Creating Favourites ..."

user1.favourites.create!({
  user_id:  1,
  pattern_id: 1,
})

user2.favourites.create!({
  user_id:  1,
  pattern_id: 1,
})

puts "DONE!"
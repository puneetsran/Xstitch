# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

puts "Seeding Data ..."

puts "Eradicating lingering vermin ..." 
Pattern.destroy_all
puts "destroyed patterns"
User.destroy_all
puts "destroyed users"
Favourite.destroy_all
puts "destroyed favorites"

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

user3 = User.create!({
  name: "Oprah",
  email: "oprah@email.com",
  password: "password"
})




puts "Creating Patterns ..."

# puts [['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']].to_h
# puts [['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']].to_h.to_json

# user1.patterns.create!({
#   title:  'My cat',
#   description: 'Black cat'
#   # colours: JSON.parse([['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']])
#   # colours: JSON.generate([['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']])
# })

# user2.patterns.create!({
#    title:  'My dog',
#    description: 'Poodle'
#   #  colours: {}
#  })

# user2.patterns.create!({
#    title:  'School Bus',
#    description: 'Yellow'
#   #  colours: {}
#  })

# user1.patterns.create!({
#   title:  'Flowers',
#   description: 'Is flowers'
#   # colours: {}
# })

# user1.patterns.create!({
#   title:  'Birbs',
#   description: 'is many birbs'
#   # colours: {}
# })

# user2.patterns.create!({
#   title:  'Bumble Bee',
#   description: 'Buzz'
#   # colours: {}
# })

# user3.patterns.create!({
#   title:  'Jazz hands',
#   description: 'n/a'
#   # colours: {}
# })

# user3.patterns.create!({
#   title:  'Wink emoji',
#   description: 'n/a'
# })

# user3.patterns.create!({
#   title:  'Turtle',
#   description: 'n/a'
# })

# puts "Creating Favourites ..."

# user1.favourites.create!({
#   user_id:  user1.id,
#   pattern_id: 1
# })

# user2.favourites.create!({
#   user_id:  1,
#   pattern_id: 4
# })

# user2.favourites.create!({
#    user_id:  1,
#    pattern_id: 5
# })

# user3.favourites.create!({
#    user_id:  2,
#    pattern_id: 2
# })

# user3.favourites.create!({
#    user_id:  2,
#    pattern_id: 3
# })

# user3.favourites.create!({
#    user_id:  1,
#    pattern_id: 5
# })

# Checkpoint.create!({
#   patterns_id: 1,
#   users_id: 1
# })

puts "DONE!"
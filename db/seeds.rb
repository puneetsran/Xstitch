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
Checkpoint.destroy_all

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


pattern1 = user1.patterns.create!({
  title:  'My cat',
  description: 'Black cat'
  # colours: JSON.parse([['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']])
  # colours: JSON.generate([['#000', '#f00', '#000'], ['#000', '#000', '#f00'], ['#000', '#f00', '#000']])
})

pattern2 = user2.patterns.create!({
   title:  'My dog',
   description: 'Poodle'
 })

 pattern3 = user2.patterns.create!({
   title:  'School Bus',
   description: 'Yellow'
 })

 pattern4 = user1.patterns.create!({
  title:  'Flowers',
  description: 'Is flowers'
})

pattern5 = user1.patterns.create!({
  title:  'Birbs',
  description: 'is many birbs'
})

pattern6 = user2.patterns.create!({
  title:  'Bumble Bee',
  description: 'Buzz'
})

pattern7 = user3.patterns.create!({
  title:  'Jazz hands',
  description: 'n/a'
})

pattern8 = user3.patterns.create!({
  title:  'Wink emoji',
  description: 'n/a'
})

pattern9 = user3.patterns.create!({
  title:  'Turtle',
  description: 'n/a'
})

puts "Creating Favourites ..."

user1.favourites.create!({
  user_id:  1,
  pattern_id: 1,
})

user2.favourites.create!({
  user_id:  1,
  pattern_id: 4,
})

user2.favourites.create!({
   user_id:  1,
   pattern_id: 5,
})

user3.favourites.create!({
   user_id:  2,
   pattern_id: 2,
})

puts "Creating Checkpoints ..."

checkpoint1 = Checkpoint.create!({
  user: user1,
  pattern: pattern1,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint2 = Checkpoint.create!({
  user: user2,
  pattern: pattern2,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint3 = Checkpoint.create!({
  user: user2,
  pattern: pattern3,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint4 = Checkpoint.create!({
  user: user1,
  pattern: pattern4,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint5 = Checkpoint.create!({
  user: user1,
  pattern: pattern5,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint6 = Checkpoint.create!({
  user: user2,
  pattern: pattern6,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint7 = Checkpoint.create!({
  user: user3,
  pattern: pattern7,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint8 = Checkpoint.create!({
  user: user3,
  pattern: pattern8,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

checkpoint9 = Checkpoint.create!({
  user: user3,
  pattern: pattern9,
  colours: {},
  image_url: 'https://github.com/user956/tweeter/blob/master/docs/water-melon.png?raw=true'
})

puts "DONE!"
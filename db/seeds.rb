# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

20.times do
  w = Writer.new(
    name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
  w.save
end

40.times do
  b = Book.new(
    name: Faker::Book.title,
    genre: Faker::Book.genre,
    description: Faker::Lorem.paragraph,
    writer_id: [*1..20].sample
  )
  b.save
end

puts "#{Writer.count} writers in the system..."
puts "#{Book.count} books in the system..."

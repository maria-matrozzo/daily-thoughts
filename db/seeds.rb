User.destroy_all
Post.destroy_all

puts 'seeding users...'
u1 = User.create(username: "Maria!!", email:"mmatrozzo@gmail.com")

puts 'seeding posts...'

current_datetime = DateTime.now

p1 = Post.create(content: "I want to make some mac & cheese soon.", 
time: current_datetime,
user_id: u1.id)

puts 'done seeding! :)'
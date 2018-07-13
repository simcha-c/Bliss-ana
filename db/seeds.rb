# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
TeamMembership.delete_all

# Users
demo_user = User.create!(email: 'demo@bliss-ana.com', password: 'demo-password', first: 'Demo', last: 'Guest')
me = User.create!(email: 'simcha@bliss.com', password: 'password', first: 'Simcha', last: 'Cohen')
josh = User.create!(email: 'josh@bliss.com', password: 'password', first: 'Josh', last: 'J')
jess = User.create!(email: 'jess@bliss.com', password: 'password', first: 'Jess', last: 'J')
just = User.create!(email: 'justin@bliss.com', password: 'password', first: 'Justin', last: 'J')


# Teams
engineers = Team.create!(name: 'Engineering 101')
design = Team.create!(name: 'Design')
customer_service = Team.create!(name: 'Customer Service')
finance = Team.create!(name: 'Finance')

# Team Memberships
tm1 = TeamMembership.create(team_id: engineers.id, user_id: jess.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: engineers.id, user_id: demo_user.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: design.id, user_id: demo_user.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: design.id, user_id: me.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: customer_service.id, user_id: demo_user.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: customer_service.id, user_id: me.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: customer_service.id, user_id: jess.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: customer_service.id, user_id: josh.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: finance.id, user_id: josh.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: finance.id, user_id: demo_user.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: finance.id, user_id: me.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: finance.id, user_id: jess.id, role: , description: , about_me: )
tm1 = TeamMembership.create(team_id: finance.id, user_id: just.id, role: , description: , about_me: )

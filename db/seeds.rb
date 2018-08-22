# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
TeamMembership.destroy_all
Project.destroy_all
Column.destroy_all
Task.destroy_all

# Users
demo_user = User.create!(email: 'demo@bliss-ana.com', password: 'demo-password', first: 'Demo', last: 'Guest')
me = User.create!(email: 'simcha@bliss.com', password: 'password', first: 'Simcha', last: 'Cohen')
josh = User.create!(email: 'josh@bliss.com', password: 'password', first: 'Josh', last: 'J')
tess = User.create!(email: 'tess@bliss.com', password: 'password', first: 'Tess', last: 'L')
gus = User.create!(email: 'gus@bliss.com', password: 'password', first: 'Gus', last: 'P')


# Teams
dev = Team.create!(name: 'Dev Team')
design = Team.create!(name: 'Design')
customer_service = Team.create!(name: 'Customer Service')
finance = Team.create!(name: 'Finance')

# Team Memberships
tm3 = TeamMembership.create!(team_id: design.id, user_id: demo_user.id, role: 'UI Designer', department: 'Forms!')
tm4 = TeamMembership.create!(team_id: design.id, user_id: me.id, role: 'Intern', department: 'Helping out', about_me: 'If anyone needs anything designed, let me know!')
tm5 = TeamMembership.create!(team_id: customer_service.id, user_id: demo_user.id, department: '', about_me: 'Focused on helping the team build necessary skills and knowledge so they can better support customers. Striving for a supportive, communicative, and attentive environment.')
tm6 = TeamMembership.create!(team_id: customer_service.id, user_id: me.id, role: 'Advisor', department: 'Change' , about_me: 'change this soon')
tm7 = TeamMembership.create!(team_id: customer_service.id, user_id: tess.id, role: 'Technician', department: 'Change' , about_me: 'change this soon')
tm8 = TeamMembership.create!(team_id: customer_service.id, user_id: josh.id, role: 'What up?', department: 'Change' , about_me: 'change this soon')
tm9 = TeamMembership.create!(team_id: finance.id, user_id: josh.id, role: 'Basketball Rules!', department: 'Change' , about_me: 'change this soon')
tm10 = TeamMembership.create!(team_id: finance.id, user_id: demo_user.id, role: 'Analyst', department: 'Change' , about_me: 'change this soon')
tm11 = TeamMembership.create!(team_id: finance.id, user_id: me.id, role: 'Planner', department: 'Change' , about_me: 'change this soon')
tm12 = TeamMembership.create!(team_id: finance.id, user_id: tess.id, role: 'Advisor', department: 'Change' , about_me: 'change this soon')
tm13 = TeamMembership.create!(team_id: finance.id, user_id: gus.id, role: 'CEO', department: 'Change' , about_me: 'change this soon')


# Projects
design_plan = Project.create!(name: 'Sprint Plan', team_id: design.id)
brainstorm = Project.create!(name: 'Brainstorm', team_id: design.id)
design_model = Project.create!(name: 'Design Model', team_id: design.id)
review_model = Project.create!(name: 'Review Designed Model', team_id: design.id)
redesign = Project.create!(name: 'Redesign', team_id: design.id)

review = Project.create!(name: 'Review Designed Model', team_id: finance.id)
raise_funds = Project.create!(name: 'Raise funds', team_id: finance.id)
approve = Project.create!(name: 'Approve features', team_id: finance.id)

build = Project.create!(name: 'Build Model', team_id: dev.id)
testing = Project.create!(name: 'Test Model', team_id: dev.id)

training = Project.create!(name: 'Training for Model X', team_id: customer_service.id)
daily = Project.create!(name: 'Day to Day', team_id: customer_service.id)


# Columns
col1 = Column.create!(title: 'Col 1', project_id: design_plan.id)
col2 = Column.create!(title: 'Col 2', project_id: design_plan.id)
col3 = Column.create!(title: 'Col 3', project_id: design_plan.id)
col4 = Column.create!(title: 'Col 4', project_id: brainstorm.id)
col5 = Column.create!(title: 'Col 5', project_id: design_model.id)
col6 = Column.create!(title: 'Col 6', project_id: design_model.id)
col7 = Column.create!(title: 'Col 7', project_id: review_model.id)
col8 = Column.create!(title: 'Col 8', project_id: review_model.id)
col9 = Column.create!(title: 'Col 9', project_id: review_model.id)
col10 = Column.create!(title: 'Col 10', project_id: review_model.id)
col11 = Column.create!(title: 'Col 11', project_id: redesign.id)
col12 = Column.create!(title: 'Col 12', project_id: review.id)
col13 = Column.create!(title: 'Col 13', project_id: review.id)
col14 = Column.create!(title: 'Col 14', project_id: review.id)
col15 = Column.create!(title: 'Col 15', project_id: review.id)
col16 = Column.create!(title: 'Col 16', project_id: review.id)
col17 = Column.create!(title: 'Col 17', project_id: raise_funds.id)
col18 = Column.create!(title: 'Col 18', project_id: raise_funds.id)
col19 = Column.create!(title: 'Col 19', project_id: raise_funds.id)
col20 = Column.create!(title: 'Col 20', project_id: approve.id)
col25 = Column.create!(title: 'Col 25', project_id: build.id)
col26 = Column.create!(title: 'Col 26', project_id: build.id)
col27 = Column.create!(title: 'Col 27', project_id: build.id)
col28 = Column.create!(title: 'Col 28', project_id: testing.id)
col29 = Column.create!(title: 'Col 29', project_id: testing.id)
col30 = Column.create!(title: 'Col 30', project_id: testing.id)
col31 = Column.create!(title: 'Col 31', project_id: daily.id)
col32 = Column.create!(title: 'Col 32', project_id: daily.id)

# ppl
tm1 = TeamMembership.create!(team_id: dev.id, user_id: tess.id, role: 'Manager', department: 'Beers on me', about_me: 'Using mathematics, scientific, and engineering principles to design, repair, and improve air and spacecraft, component parts, facilities, materials, safety regulations, and manufacturing processes.' )
tm14 = TeamMembership.create!(team_id: dev.id, user_id: gus.id, role: 'Web Developer', department: 'Software Engineer', about_me: 'I thrive on complicated algorithms.' )
tm2 = TeamMembership.create!(team_id: dev.id, user_id: demo_user.id, role: 'Janitor', about_me: 'Cleaning all your code')

# project
web_launch = Project.create!(name: 'Website Launch', team_id: dev.id)

# columns
backlog = Column.create!(title: 'Backlog', project_id: web_launch.id)
ready = Column.create!(title: 'Ready to do', project_id: web_launch.id)
progress = Column.create!(title: 'In progress', project_id: web_launch.id)
done = Column.create!(title: 'Done', project_id: web_launch.id)


# Tasks
task1 = Task.create(name: 'Final QA', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: backlog.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: nil)

task2 = Task.create(name: 'Forms submit data properly', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: backlog.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task1.id)

task1.update!(next_id: task2.id)

task3 = Task.create(name: 'Videos have updated branding', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: backlog.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task2.id)

task2.update!(next_id: task3.id)

task4 = Task.create(name: 'Internal links across pages', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: backlog.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task3.id)

task3.update!(next_id: task4.id)

task5 = Task.create(name: 'External links across pages', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: backlog.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task4.id)

task4.update!(next_id: task5.id)

task6 = Task.create(name: 'CSS/HTML Validated', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: nil)

task7 = Task.create(name: 'Tracking codes inserted', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task6.id)

task6.update!(next_id: task7.id)

task8 = Task.create(name: 'Format web copy into code', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task7.id)

task7.update!(next_id: task8.id)

task9 = Task.create(name: 'Format web copy into code', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task8.id)

task8.update!(next_id: task9.id)

task10 = Task.create(name: 'Cross-browser testing', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task9.id)

task9.update!(next_id: task10.id)

task11 = Task.create(name: 'Mobile friendly site parallels', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: ready.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task10.id)

task10.update!(next_id: task11.id)

task12 = Task.create(name: 'CSS is optimized', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: nil)

task13 = Task.create(name: 'CSS is optimized', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task12.id)

task12.update!(next_id: task13.id)

task14 = Task.create(name: 'Sync with Google Analytics', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task13.id)

task13.update!(next_id: task14.id)

task15 = Task.create(name: 'SEO keywords optimizations', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task14.id)

task14.update!(next_id: task15.id)

task16 = Task.create(name: 'Cookies notice', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task15.id)

task15.update!(next_id: task16.id)

task17 = Task.create(name: 'Favicon renders properly', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task16.id)

task16.update!(next_id: task17.id)

task18 = Task.create(name: 'Web copy reviewed', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: progress.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task17.id)

task17.update!(next_id: task18.id)

task19 = Task.create(name: 'Web copy drafted', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: done.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: nil)

task20 = Task.create(name: 'Sharing icons updated and working', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: done.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task19.id)

task19.update!(next_id: task20.id)

task21 = Task.create(name: 'Scripts and images are optimized', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: done.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task20.id)

task20.update!(next_id: task21.id)

task22 = Task.create(name: 'Font and image licensing', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: done.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task21.id)

task21.update!(next_id: task22.id)

task23 = Task.create(name: 'Web page accessibility considerations WAI-ARIA', description: '', due_date: 'Mon, 17 Sep 2018',
  column_id: done.id, creator_id: demo_user.id, assignee_id: demo_user.id, completer_id: '',
  next_id: nil, prev_id: task22.id)

task22.update!(next_id: task23.id)







#

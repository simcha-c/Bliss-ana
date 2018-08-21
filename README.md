# BLISSANA

Blissana is a single-page app, inspired by Asana designed to help teams organize, track and manage their projects through the completion of smaller tasks. 

[Live](https://bliss-ana.herokuapp.com/)

### Technologies Used:
* Ruby
* Ruby on Rails
* PostgreSQL
* JSON
* React
* Redux
* JavaScript
* HTML5
* CSS
* Heroku

### Features:

* Authentication
  * New members can sign up, Members can log in
  * Demo sign up available for previewing the app
  * User login information is authenticated on the backend
  * User information bootstrapped to the window for correct routing

* Teams
  * A user can create a workspace/team when logged in
  * A user is part of many teams
  * A user is able to add, edit and delete a team

* Projects
  * Every team has many projects and a project belongs to one team
  * A team member is able to create and delete projects

* Columns
  * Every project can have unlimited categories or stages to separate their tasks
  * Columns have an intuitive design and experience

* Tasks
  * Tasks are created on columns
  * Users can add and edit information to a task
  * Users can add a due date to the task.
  * Tasks on a column are created as a linked list to decrease the amount of tasks to update when changing the order in a column.
  

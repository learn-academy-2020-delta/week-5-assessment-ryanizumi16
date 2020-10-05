# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails newappname -d postgresql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - the verb we are sending to the server
library - url
:id -
book - the name of the controller
show - name of the method in the controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

you would create a migration to update your database



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

validates: :shirt, :pants, :shoes, presence: true



6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
the rails model names' first letter should be capitalized.

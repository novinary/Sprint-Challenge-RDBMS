## Step 1
Project setup
- Install dependencies -> yarn, express, knex, nodemon(dev) and sqlite3 - done 
- Run knex init to generate a config file - done
- Create index.js and host a local server and use knex here - done

## Step 2
Create migration scripts 
npx knex migrate:make project_table - done
npx knex migrate:make action_table - done
create constraints and rollback function for project_table script - done
create constraints and rollback function for action_table script - done
run knex migrate:latest to run the migration scripts - done 

## Step 3
Build the API with the following endpoints:
 POST for adding projects. - Done
 POST for adding actions. - To do
 GET for retrieving a project by its id that returns an object with action - Done
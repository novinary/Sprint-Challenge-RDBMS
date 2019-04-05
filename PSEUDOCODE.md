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
 POST for adding projects. - done
 POST for adding actions. - done
 GET for retrieving a project by its id that returns an object with action - done


## Step 4 - Stretch
Use knex to add data seeding scripts for projects and actions.
npx knex seed:make 000-cleanup    - done 
yarn add knex-cleaner --dev       - done
npx knex seed:make 001-project    - done
npx knex seed:make 002-action     - done
npx knex seed:run to run the seed scripts   - done
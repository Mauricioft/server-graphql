# server-graphql
It is a NodeJS application with which I seek to understand the operation and the potential of GraphQL, it has a structure similar to what a project in laravel 5.2 would have. The file where the connection credentials will be saved will be in ./config/env.js

# Instructions for installation:

1. yard i or npm i to install the dependencies
2. To create the migrations it is necessary to go to the root of the project to the next route ./database. there they will execute the following command:
knex migrate: make add_name_table
3. Then to create the fields of the table to be migrated, the following command should be executed:
npm run db: migrate
It is important to remember that this command must be executed in the root of the project.
4. Then if we want to enter data to the migration made previously it is necessary to go to the root of the project to the next route ./database. there they will execute the following command:
knex seed: make seed_name
5. to run the seed
npm run db: seed
It is important to remember that this command must be executed in the root of the project.
6. If you want to have more information on how to create migrations, here is an example:
https://alexzywiak.github.io/running-migrations-with-knex/index.html

# To create dummy data you can use casual:
https://github.com/boo1ean/casual

example:
```
  const casual = require('casual')

  exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('comentarios').del().then(() => {
      // Inserts seed entries
      const promise = Array(40).fill().map((_, i) => {
        return knex('comentarios').insert([{
          id: i + 1, 
          nombre: casual.title,
          cuerpo: casual.description,
          curso_id: casual.integer(1, 10),
        }])
      })
      return Promise.all(promise)
    })
  }
```

# Here I leave the link to knexjs, if you want to go deeper
http://knexjs.org/#Schema-increments
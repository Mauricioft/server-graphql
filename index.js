'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./schema');
const env = require('./config/env');

require('./database/setup')

const app = express();
 
// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
// app.get('/', (req, res) => { res.send('Hello World') });

app.listen(env.PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${env.PORT}`);
});
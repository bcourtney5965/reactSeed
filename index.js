const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const path = require('path')

app.use(express.static(path.join(__dirname, './dist')));

app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Running API server at localhost:${port}`))





































// const express = require('express')
// const app = express()
// const graphqlHTTP = require('express-graphql')
// const { buildSchema } = require('graphql')
// const port = process.env.PORT || 4000
// const path = require('path')

// app.use(express.static(path.join(__dirname, './dist')));

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/graphql!`))
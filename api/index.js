const { ApolloServer } = require('apollo-server');
const { mergeTypeDefs } = require('graphql-tools');
const path = require('path');

const { userSchema, userResolvers, UsersAPI } = require('./user');
const { turmaSchema, turmaResolvers, TurmasAPI } = require('./turma');
const { matriculaSchema } = require('./matricula');

const typeDefs = mergeTypeDefs([matriculaSchema, turmaSchema, userSchema])
const resolvers = [turmaResolvers, userResolvers]

const dbConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './data/database.db')
  }
}

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      turmasAPI: new TurmasAPI(dbConfig),
      usersAPI: new UsersAPI(),
    }
  },
 })

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})

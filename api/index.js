const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
    typeDefs: './src/schema.graphql',
    resolvers: './src/resolvers.js',
});
const { GraphQLScalarType } = require('graphql');

const matriculaResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => new Date(value).toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value).toISOString()
      }),

    Mutation: {
        createMatricula: async (_, ids, { dataSources }, info) => dataSources.matriculasAPI.createMatricula(ids),
    }
}

module.exports = matriculaResolvers

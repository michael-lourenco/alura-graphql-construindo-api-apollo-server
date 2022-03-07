const { GraphQLScalarType } = require('graphql');

const userResolvers = {
    RolesType: {
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COORDENACAO: "COORDENACAO",
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value),
    }),
    Query: {
        users: (root, args, { dataSources }) =>{
            return dataSources.usersAPI.getUsers();
        } ,
        user: (root, { id }, { dataSources }) => {
            return dataSources.usersAPI.getUserById(id); 
        },
    },
    Mutation: {
        createUser: async (root, user, { dataSources }) => {
            return dataSources.usersAPI.createUser(user);
        },
        updateUser: async (root, newData, { dataSources }) => {
            return dataSources.usersAPI.updateUser(newData);
        },
        deleteUser: async (root, { id }, { dataSources }) => {
            return dataSources.usersAPI.deleteUser(id);
        },
    },
};

module.exports = userResolvers;

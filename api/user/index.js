const userResolvers = require('./resolvers/userResolvers');
const userSchema = require('./schema/user.graphql');
const UsersAPI = require('./datasource/user');

module.exports = {
    userSchema,
    userResolvers,
    UsersAPI
}

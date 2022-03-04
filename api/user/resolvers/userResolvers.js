const userResolvers = {
    Query: {
        users: (root, args, { dataSources }) =>{
            return dataSources.usersAPI.getUsers();
        } ,
        user: (root, { id }, { dataSources }) => {
            return dataSources.usersAPI.getUserById(id); 
        },
    },
    Mutation: {
        createUser: (root, user, { dataSources }) => {
            return dataSources.usersAPI.createUser(user);
        },
        updateUser: (root, { id, input }, { dataSources }) => {
            return dataSources.usersAPI.updateUser(id, input);
        },
    },
};

module.exports = userResolvers;

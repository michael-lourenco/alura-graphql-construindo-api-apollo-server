const arrayUsers = [
    {
        nome: "Ana",
        ativo: true,
    },
    {
        nome: "Marcia",
        ativo: false,
        email: "marcia@gmail.com",
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0],
    }
};

module.exports = userResolvers;

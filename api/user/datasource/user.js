const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3000';
    }

    async getUsers() {
        return this.get('/users');
    }

    async getUserById(id) {
        return this.get(`/users/${id}`);
    }

    async createUser(user) {
        return this.post('/', user);
    }

    async updateUser(id, user) {
        return this.put(`/${id}`, user);
    }

    async deleteUser(id) {
        return this.delete(`/${id}`);
    }
}

module.exports = UsersAPI;

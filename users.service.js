// users.service.js

class UsersService {
    constructor(request) {
        this.request = request;
    }

    async getUsers() {
        const response = await this.request.get('/users');

        return response.data;
    }
}

module.exports = UsersService;
// index.js

const UsersService = require("./users.service.js");

// the main function is just to be able to run our async code.
const main = async () => {
    const requestService = {
        get(url) {
            const response = { data: [] }
            return Promise.resolve(response)
        }
    };
    const usersService = new UsersService(requestService);

    const users = await usersService.getUsers();
    console.log(users);
}

main();
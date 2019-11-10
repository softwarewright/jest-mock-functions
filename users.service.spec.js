const UsersService = require("./users.service");

test.skip("should request the users", async () => {
    const response = { data: [] };
    const requestService = {
        get: jest.fn().mockResolvedValue(response)
    };
    const usersService = new UsersService(requestService);

    await usersService.getUsers();

    expect(requestService.get).toHaveBeenCalledWith("/users");
})

test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction.mock);
    mockFunction("Hello Mocks");
    console.log(mockFunction.mock);

    expect(mockFunction).toBeCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith("Hello Mocks");
    expect(mockFunction).toHaveReturned(undefined);
})
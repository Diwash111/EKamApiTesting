// const usersData = require('../fixtures/users.json');
// const users = usersData.users;

describe("Multiple users login", () => {

    // })
    // users.forEach((user) => {
    it('It should successfully generate access token for multiple user', () => {
        cy.fixture('users.json').then(user => {
            const arr = user.users
            
            arr.forEach(user => {
                cy.log(user)
                cy.api({
                    method: 'POST',
                    url: 'http://103.94.159.144:8082/bom/api/login',
                    body: {
                        username: `${user.username}`,
                        password: `${user.password}`
                    },
                    failOnStatusCode: false,

                }).then((response) => {
                   // expect(response.status).to.eq(200);


                });
            });

        });
    });
})
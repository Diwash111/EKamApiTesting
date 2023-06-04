describe("Should send Post request and verify status code",() =>{
    it ('It should successfully generate access token', () => {
        
        cy.api({
            method: 'POST',
            url: 'http://103.94.159.144:8082/bom/api/login',
            body: {
                  "username": "DIWASH",
                  "password": "Test@123456789"
                  },
            failOnStatusCode: 'False',
          
          }).then((response) => {
            expect(response.status).to.eq(200);
            const token = response.body.token;
            cy.log('token',token)
            console.log()
          });
        });
      });
      
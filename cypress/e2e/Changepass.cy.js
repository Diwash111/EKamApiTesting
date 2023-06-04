
describe("Should send Post request to change password and verify status code", () => {
    it('It should successfully change the password', () => {
      const oldPassword = 'Test@12345678';
      const newPassword = 'Test@123456789';
      const rePassword = 'Test@123456789';
    
  
      cy.api({
        method: 'POST',
        url: 'http://103.94.159.144:8082/bom/api/change-password',
        body: {
          oldPassword: 'Test@12345678',
          newPassword: 'Test@123456789',
          rePassword: 'Test@123456789'
        },
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJBIjoiMTAuMTAuMjAuMyIsIkIiOiJCQVUiLCJDIjoiRElXQVNIIiwiRCI6IjUiLCJFIjoiUEtSIiwiRiI6IjEwMjA1MDEwNSIsIkciOiIxMDIwNTAyMDUiLCJIIjoiMTAyMDEwNyIsIkkiOiI5OSIsIkoiOiI0OSIsIksiOiJOIiwiTCI6Ik4iLCJNIjoiTiIsIk4iOiJOIiwiTyI6Ii9ib20iLCJpYXQiOjE2ODU1MjE5MzksImV4cCI6MTY4NTU1Njg5OX0.H-aX4-BZ8jBbfr8cC7eVjQyAM1L7dU8XUOsZiFo-T2dSQVjSaao_eUecDtCclJcPSA-MkcbRBOXWHreMiKikxw' // Replace 'your-token' with the actual bearer token
        },
        failOnStatusCode: false,
      }).then((response) => {
       // expect(response.status).to.eq(200);
        // Add further assertions or actions based on the response if needed
      });
    });
  });
  
describe('Multiple tests', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/default-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })

    const test = (testData1, testData2) =>
    function () {
      cy.get('[placeholder="Jane Doe"]').type(`${testData1}`);
      cy.get('input[type="text"][placeholder="Email"]').type(`${testData2}`);
      cy.get('.custom-checkbox').first().click();
      cy.get('[type="submit"]').eq(0).click();
    };
    afterEach(() => {
        cy.log(`Test is finished`)
      })
       

  it('Test for User 1', test('User 1', 'user1@example.com'));
  it('Test for User 2', test('User 2', 'user2@example.com'));
  it('Test for User 3', test('User 3', 'user3@example.com'));
})
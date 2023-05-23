/// <reference types="cypress"/>


describe('Toast tests', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/default-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
    
          })
          const tests = [
                {testData: {
                    position: 'top-right',
                    title: 'Title test 1',
                    content: 'test content1',
                    time: '100000',
                    type: 'success'
                    },
                expectedResult: {
                    icon: 'checkmark',
                    title: 'Title test 1',
                    content: 'test content1',
                    color: 'rgb(0, 214, 143)',
                    position: 'justify-content: flex-end; align-items: flex-start;'
                        }}, 
                {testData: {
                    position: 'top-left',
                    title: 'Title test 2',
                    content: 'test content2',
                    time: '1000',
                    type: 'warning'
                    }, 
                expectedResult: {
                    icon: 'alert-triangle',
                    title: 'Title test 2',
                    content: 'test content2',
                    color: 'rgb(255, 170, 0)',
                    position: 'justify-content: flex-start; align-items: flex-start;'
                    }},
                {testData: {
                    position: 'bottom-left',
                    title: 'Title test 3',
                    content: 'test content3',
                    time: '100000',
                    type: 'info'
                    },
                expectedResult: {
                    icon: 'question-mark',
                    title: 'Title test 3',
                    content: 'test content3',
                    color: 'rgb(0, 149, 255)',
                    position: 'justify-content: flex-start; align-items: flex-end;'
                    }},
                {testData: {
                    position: 'bottom-right',
                    title: 'Title test 4',
                    content: 'test content4',
                    time: '100000',
                    type: 'danger'
                    },
                    expectedResult: {
                    icon: 'flash',
                    title: 'Title test 4',
                    content: 'test content4',
                    color: 'rgb(255, 61, 113)',
                    position: 'justify-content: flex-end; align-items: flex-end;'
                    }}
            ]
    


    tests.forEach(({testData,expectedResult}) => {
        it(`Test`, () => {

           cy.get('[ng-reflect-selected="top-right"]', {timeout:5000}).click();
           cy.contains(testData.position).click();
           cy.get('[name="title"]').clear().type(testData.title);
           cy.get('[name="content"]').clear().type(testData.content);
           cy.get('[name="timeout"]').clear().type(testData.time);
           cy.get('[ng-reflect-selected="primary"]').click();
           cy.contains(testData.type).click();
           cy.get('button:contains("Show toast")').click();
           cy.get('span.title').should('include.text', expectedResult.title);
           cy.get('div.message').should('have.text', expectedResult.content);
           cy.get('[ng-reflect-toast="[object Object]"]').invoke('css', 'background-color').should('be.eq', expectedResult.color);
           cy.get('nb-toast nb-icon svg g g').should('have.attr', 'data-name', expectedResult.icon);
           cy.get('div[dir="ltr"]').should('have.attr', 'style', expectedResult.position);
        })
    })

 
})


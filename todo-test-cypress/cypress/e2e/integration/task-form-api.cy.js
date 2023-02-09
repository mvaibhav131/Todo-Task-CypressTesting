describe("Task form submit",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it("visit the url",()=> {
        
    })
    it("Add the new item and submit the form",()=>{
        const text="ABC"
        cy.server()//latest use cy.intercept()
        cy.route("POST","/api/task",{
            title:text,
            id:1,
            completed:false
        })

        cy.get(".task-input")
        .type(text)
        .type("{enter}")

        cy.get(".task-list")
        .should("have.length",1)
        .and('contain',text)
    })

    it ("Add a new item , on failure , show message",()=>{
        const text="vaibhav"
        cy.server()
        cy.route({
            url:"/api/task",
            status:500,
            method:"POST",
            response:{}
        })
        cy.get('.task-input')
        .type(text)
        .type("{enter}")

        cy.get('.error')
        .should('be.visible')
    })
})
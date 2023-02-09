describe("Task input form",() => {

    beforeEach(()=> cy.visit("http://localhost:3000"))
   
    it("visit home page",()=>{
        cy.visit("http://localhost:3000")
    })
    it("focuse the input tag",()=> {
        // cy.visit("http://localhost:3000")
        cy.focused()
        .should("have.class","task-input")
    })

    it("type the value of input tag",()=> {
        // cy.visit("http://localhost:3000")
        const text="My First Task"
        cy.get(".task-input")
        .type(text)
    })
   
    
})
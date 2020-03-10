describe('The Question List', ()=>{
    beforeEach(()=>{
        console.log("Before Each!")       
    })
    beforeAll(()=>{
        console.log("Before All");
        
    })
    afterEach(()=>{
        console.log("after each");        
    })
    afterAll(()=>{
        console.log("after All");        
    })
    it("should display a list of items", ()=>{
        expect(40+2).toEqual(42)
    })
    it("should display a list of lovers", ()=>{
        expect(40+2).toEqual(42)
    })
})
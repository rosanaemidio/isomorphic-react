import { questions } from './questions'
describe("THe question reducer", ()=>{
    it("should not modify state for unrecognized action", ()=>{
        console.log("BANANAS!!!");
       const state = ["foo","bar"];
       const stateClone = ["foo","bar"];
       const newState = questions(state,{type:"UNRECOGNIZED_ACTION"});
       
       expect(newState).toEqual(stateClone);
       expect(newState).toBe(state);
    })
})
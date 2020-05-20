//const enhancer = require('./enhancer.js');
const {repair, succeed, fail, get} = require('./enhancer')
// test away!

describe('enhancer', ()=>{
    describe('repair()', ()=>{

        it('repairs the item to durability of 100', ()=>{
            let item = {
                name: "Tree Branch",
                durability: 12,
                enhancement: 9000
            }
            //console.log(repair(item))
            expect(repair(item).durability).toBe(100);
            
        })
    })
    describe('succeed()', ()=>{
        it.todo('work on succeed')
    })
    describe('fail()', ()=>{
        it.todo('work on fail')
    })
    describe('get()', ()=>{
        it.todo('work on get')
    })
})


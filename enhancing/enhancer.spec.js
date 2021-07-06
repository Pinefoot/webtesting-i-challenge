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
        it('takes in an item with enhancment less than 20 and gives you a new object/weapon', ()=>{
            let item = {
                name: 'Bonesaw',
                durability: 100,
                enhancement: 5
            }
            let successItem = {
                ...item,
                
                enhancement: 6
            }
            console.log(succeed(item))
            expect(succeed(item).enhancement).toBe(successItem.enhancement);
        })
        it('takes in an item with enchament greater than 20 and returns same item', ()=>{
            let item = {
                name: 'Seesaw You Start Swinging around',
                durability: 1,
                enhancement: 25,
            }
            

            expect(succeed(item)).toBe(item)
        })

    })
    describe('fail()', ()=>{
        it('if enhancement is less than 15 durability decreses by 5', ()=>{
            let item = {
                name: 'Broken Glass Bottle You Pulled Out Of The Drunkard Next To You',
                durability: 10,
                enhancement: 14,
            }
            let failingItem = {
                ...item,
                durability: 5
            }
            expect(fail(item).durability).toBe(failingItem.durability)
        })
        it('if enhancement is greater than or equal to 15 durability decrease by 10', ()=>{
            let item = {
                name: 'Broken Glass Bottle You Pulled Out Of The Drunkard Next To You',
                durability: 15,
                enhancement: 16,
            }
            let failingItem = {
                ...item,
                durability: 5
            }
            expect(fail(item).durability).toBe(failingItem.durability)
        })
        it('if enhancment level is greater than 16 enhancement decreases by 1', ()=>{
            let item = {
                name: 'Broken Glass Bottle You Pulled Out Of The Drunkard Next To You',
                durability: 15,
                enhancement: 17,
            }
            let failingItem = {
                ...item,
                enhancement: 16
            }
            console.log(fail(item))
            expect(fail(item).enhancement).toBe(failingItem.enhancement)
        })
    })
    describe('get()', ()=>{
        it.todo('work on get')
    })
})


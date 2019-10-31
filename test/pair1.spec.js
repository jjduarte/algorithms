const chai = require('chai');

const {expect} = chai;

describe('Setting up Mocha ', () => {
    let out;

    context('Creating first test when', () => {

        it('True should be true', async () => {
            expect(true).to.be.equal(true);
        });

        it('Testing a function', ()=> {
            const { jumpingOnClouds } =  require('../jumpingOnClouds');
            const result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
            expect(result).to.be.equal(4);
        })

        it('Testing an endpoint', () => {
            
        })
    });
});

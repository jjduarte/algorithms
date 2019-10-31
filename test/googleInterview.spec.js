const chai = require('chai');

const {expect} = chai;

describe.only('Google Interview ', () => {

    context('Order statistics algorithm', () => {

        it.skip('Find the smallest', ()=> {
            const { findSmallest } =  require('../googleInterview');
            const inputArray = [3, 5, 2, 1, 6, 7, 18];

            const response = findSmallest(inputArray);

            expect(response).to.be.equal(1);
        })

        it.skip('Find the second smallest', () => {
            const {findSecondSmallest} = require('../googleInterview');
            const inputArray = [4, 22, 0, 3, 5, 2, 1, 6, 7, 18, 55, 33, 61, 29, 17, 16, 15, 100, 77, 56, 1000];
            const timeBefore = Date.now();
            const response = findSecondSmallest(inputArray);
            const timeAfter = Date.now();
            console.log(`diferenca tempo = ${timeAfter - timeBefore}`)
            expect(response).to.be.equal(1);
        })


        it('Find the Kth smallest', () => {
            const {findKthSmallest} = require('../googleInterview');
            const inputArray = [4, 22, 0, 3, 5, 2, 1, 6, 7, 18, 55, 33, 61, 29, 17, 16, 15, 100, 77, 56, 1000, 1001, 1002, 200, 300, 400, 500, 600, 700, 800];
            const k = 4;
            const timeBefore = Date.now();
            const response = findKthSmallest(inputArray, k);
            const timeAfter = Date.now();
            console.log(`diferenca tempo = ${timeAfter - timeBefore}`)
            expect(response).to.be.equal(3)
        })
        
        it('Find the Kth smallest, optimized', () => {
            const {findKthSmallestOptimized} = require('../googleInterview');
            const inputArray = [4, 22, 0, 3, 5, 2, 1, 6, 7, 18, 55, 33, 61, 29, 17, 16, 15, 100, 77, 56, 1000, 1001, 1002, 200, 300, 400, 500, 600, 700, 800];
            const k = 4;
            const timeBefore = Date.now();
            const response = findKthSmallestOptimized(inputArray, k);
            const timeAfter = Date.now();
            console.log(`diferenca tempo = ${timeAfter - timeBefore}`)
            expect(response).to.be.equal(3)
        })

    });
});

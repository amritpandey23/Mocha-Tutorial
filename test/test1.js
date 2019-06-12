const assert = require('assert');
const _ = require('lodash');


describe('Loadash Array Test 1', () => {
    // start here
    // test array
    let testArray = [1, 2, 3, 4, 5];
    // it blocks - test use case
    // TEST CASE 1
    it('finds head of the array', (done) => {
        const head = _.head(testArray);
        assert.equal(head, 1);
        done();
    });
    // TEST CASE 2
    it('slice first 2 elements', (done) => {
        const slicedArray = _.take(testArray, 2);
        assert.equal(slicedArray.length, 2);
        assert(slicedArray.includes(1) && slicedArray.includes(2));
        done();
    });
    // TEST CASE 3
    it('reverse an array', (done) => {
        assert(_.reverse(testArray) === testArray.reverse());
        done();
    });
});

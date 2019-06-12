const _ = require('lodash');
const assert = require('assert');

describe('Lodash String Test 1', () => {
    let testStr = '';

    beforeEach(() => {
        testStr = 'hello    ';
    });

    it('finds last character', (done) => {
        assert(!_.endsWith(testStr, 'd'));
        done();
    });

    it('finds last character to a position', (done) => {
        assert(_.endsWith(testStr, 'l', 3));
        done();
    });

    it('trims the extra space in the end', (done) => {
        assert.equal(_.trim(testStr), 'hello');
        done();
    });
});
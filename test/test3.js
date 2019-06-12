const assert = require('assert');
const _ = require('lodash');

// nested describe

describe('Objects Test Specs', () => {
    let testObj = {};

    beforeEach(() => {
        testObj['a'] = {
            key: 'a',
            value: 'A'
        }
        testObj['b'] = {
            key: 'b',
            value: 'B'
        }
    });

    describe('Lodash Object Test 1', () => {
        it('finds associated key for a value', (done) => {
            const key = _.findKey(testObj, { key: 'a', value: 'A' });
            assert.equal(key, 'a');
            done();
        });

        it('checks if key exist', (done) => {
            assert(!_.has(testObj, 'c'));
            done();
        });
    });

    describe('Loadash Object Test 2', () => {
        it('set a value to a key', (done) => {
            _.set(testObj, 'a.key',  'letter a');
            assert.equal(testObj['a']['key'], 'letter a');
            done();
        });

        it('omit specified keys in new object', (done) => {
            const newObj = _.omit(testObj, ['b']);
            assert(!newObj['b']);
            done();
        });

    });

});
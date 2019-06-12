const assert = require('assert');
const wait = require('../src/wait');

describe('wait Promise', () => {
    it('returns \'completed\' after 1 sec', (done) => {
        wait.then(value => {
            assert(value === 'completed');
            done();
        });
    });
});
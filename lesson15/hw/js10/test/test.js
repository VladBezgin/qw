

function sum(a, b) {
    return a + b > 10;
}


let assert = require('chai').assert

describe('sum', function() {
    it('Сумма', function() {
        assert.equal(sum(2,2), true);
    });
});




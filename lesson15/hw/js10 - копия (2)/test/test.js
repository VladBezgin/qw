
var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        newArr[i]=Math.sqrt(a[i]);
    }
    return newArr;
}
console.log(typeof(each(arr, myFunc)));

let assert = require('chai').assert

describe('each', function() {
    it('each', function() {
        assert.typeOf(each(arr, myFunc), 'object');
    });
    it('each2', function() {
        assert.equal(each(arr, myFunc), [8, 7, 6, 5, 4]);
    });
    it('each3', function() {
        assert.lengthOf(each(arr, myFunc));
    });

});
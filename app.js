const _ = require("lodash");

let number = [ 1, 3, 66,23, 88];

_.forEach(number, function (number, i){
    
});

let ascending = _.sortBy(number);
let descending = _.orderBy(number, [],['desc']);

console.log('Ascending:', ascending);
console.log('Descending:', descending);
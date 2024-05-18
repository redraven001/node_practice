const ld=require('lodash')
const item=[1,[2,[3,[4]]]]
console.log(item)
console.log(ld.flattenDeep(item))
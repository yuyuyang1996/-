// ? Array(3)和 new Array(3, 4)的区别？

let arr1 = Array(3)
let arr2 = Array(3,4)
console.log( arr1 instanceof Array) //[ empty x 3 ]
console.log(arr2)//[3,4]


let arr3 = new Array(3)
let arr4 = new Array(3,4)
console.log(arr3)//[ empty x 3 ]
console.log(arr4)//[3,4]

// todo Array 用不用new 效果都是一样的
// todo Array 如果参数是一个的话，创建一个该参数长度的数组 ，成员是empty 并不是undefined  
// todo Array 如果是多个参数的话，会按照顺序创建一个数组


// !  这里引出 Array.of()来创建数组 统一参数不一样的时的默认形式
let arr5 = Array.of(3)
let arr6 = Array.of(3,4)
// todo 形成了统一
console.log(arr5)
console.log(arr6)
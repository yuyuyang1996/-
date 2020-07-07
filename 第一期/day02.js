// ? 请创建一个长度为100，值为对应下标的数组

// ! 第一种写法 较好
let arr1 = [...Array(100).keys()]
let it = Array(100).keys()
console.log(it)
// console.log(arr1)
// console.log(arr1.length)
// console.log(Object.prototype.toString.call(arr1))

// ! 第二种写法
let arr2 = Array(100)
let arr3 = arr2.join(',').split(',').map((v,i) => { return i})
// console.log(arr3)
// console.log(arr3.length)
// console.log(Array.isArray(arr3))

// ! 第三种写法
let arr4 = Array(100)
let arr5 = arr4.fill().map( (v,i) => {return i} )
// console.log(arr5)
// console.log(arr5.length)
// console.log(Array.isArray(arr5))

// todo ...Array(100) 创建一个长度为100 的空数组 


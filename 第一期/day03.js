// ? 实现 arr[-1] = arr[arr.length - 1]

// todo 解析: function craeteArr (...elements) {  //... return arr   }   var arr1 = createArr(1,2,3)   console.log(arr1[-1])//3   console.log(arr1[-2])//2

// todo Proxy
// ! 涉及到对数组的值得获取，显然使用proxy更好一点

// todo Proxy ES6的新语法 作用在于对JS中所有合法对象的基本操作进行自定义，然后用自定义的操作去覆盖原来的操作



function createArr (...elements) {
    let handler = {
        get (target,key,receiver) {
            // todo 字符串转数字 key拿到的是数组的下标，此时是个字符串
            // todo Number() || ~~
            // todo 因为Number传入undefined 会转换成NaN 而 ~~ 会直接转换为 0
            let index = ~~key
            if (index < 0) {
                index = String(target.length + index)
            }
            return Reflect.get(target,index,receiver)
        }
    }
    let target = [...elements]
    return new Proxy(target,handler)
}

let arr1 = createArr(1,2,3)

console.log(arr1[-1])
console.log(arr1[-2])

// todo Object.defineProperty()
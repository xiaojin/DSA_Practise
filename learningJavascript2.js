function memoize(fn) {
    const history = new Map()

    return function(...args) {
        key = `{fnName}:${args.join(",")}`
        if (history.has(key)) {
            return history.get[key]
        } else {
            const val = fn(...args)
            history.set(key, val)
            return val
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
     callCount += 1;
   return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 

const memorizeFib = memoize((n) => (n <= 1) ? 1 : n* memorizeFib(n-1))
console.log(memorizeFib(4))

const memorizeFab = memoize((n) => (n <= 1) ? 1 : (memorizeFab(n-2) + memorizeFab(n-1)))
console.log(memorizeFab(5))


const b = n => (n<=1) ? 1: (b(n-2) + b(n-1))

console.log(b(4))


var removeElement = function(nums, val) {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;
};

console.log(removeElement([3,2,2,3],3))



var removeDuplicates = function(nums) {
    let i = 0 
    for(let j = 0; j < nums.length; j++){
        if(nums[j+1] == nums[i] && j < nums.length ) {
            nums[j+1] = nums[j]
            i++
        }
    }
    
    return i
};
console.log(removeDuplicates([1,1,2]))


var checkIfExist = function(arr) {
    let i = 0
    while(i< arr.length) {
        if (arr[i]%2 == 0){
            for(let j=0; j< arr.length; j ++){
                if(arr[j] == arr[i]/2){
                    return true
                }
            }
        } else {
            for(let j=0; j< arr.length; j ++){
                if(arr[j] === arr[i] * 2){
                    return true
                }
            }
        }
        i++
    }
    return false
};
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))


const x = (n) => n%2 ==0 ? n/2: n/2+1
console.log(x(3))



var validMountainArray = function(arr) {
    if(arr.length<3) return false
    let i = 0
    let n = arr.length

    while(i+1<n && arr[i]< arr[i+1]){
        i ++
    }
    if(i ===0 || i ===n) return false

    while(i+1<n && arr[i] > arr[i+1]) {
        i++
    }

    return i+ 1 === n 
};
console.log(validMountainArray([0,1,2,4,2,1]))

var removeduplicate = function(arr){
    let n = arr.length
    let i = 0
    for(let j = 1; i < arr.length; i++){
        if (arr[i] != arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}
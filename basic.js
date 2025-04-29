const arr = [1,2,3];
console.log(arr.length);
console.log(arr.push(4));
console.log(arr.pop())
console.log(arr);
console.log(arr.shift());

console.log(arr);

arr.unshift(1)
for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

for(const num of arr) {
    console.log(num)
}

arr.forEach((num, i ) => {
    console.log(num, i)
})

const map = new Map();
map.set("key", 12)
map.get("key")
map.has("ke")
console.log(map)

const obj = {}
obj["a"] = 1
console.log("b" in obj)

const set = new Set();
set.add(1);
set.has(1);

const str = "Hello";
console.log(str.split(""));
console.log(str.slice(1,3))
console.log(str.charAt(0))
console.log(str.toLowerCase());

function sum(a, b ){
    return a + b
}

console.log(sum(1,2))

const sum1 = function(a, b) {
    return a + b;
}

const sum2 = (a, b) => a + b;

const isEven = (num) => num %2 == 0;
const filterEven = (arr)  => arr.filter(isEven);

function factorial(num) {
    if(num == 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5));

const backnumbers = [1,2,3,4,5].filter( x => x %2 ===0)
console.log(backnumbers)

const timers = [1,2,3,4].map(x=> x * 2)
console.log(timers)


const reducer = [1,2,3,4].reduce((acc,x) => acc + x, 0)
console.log(reducer)

function solveProblem(input){
    const isValue = (val) => val >=0
    let result = []
    for(let i =0; i<input.length; i++) {
        if(isValue(input[i])){
            result.push(input[i])
        } else {
            console.log(input[i])
        }
    }

    return result
}

console.log(solveProblem([-1,2,4,5,-10,-20]))

function backTracking(nums) {
    const result = []
    function fds(path, start) {
        result.push([...path])
        for(let i = start; i< nums.length; i++) {
            path.push(nums[i]);
            dfs(path, i+1)
            path.pop()
        }
    }
    fds([], 0)
    return result
}


var fizzBuzz = function(n) {
    const answers = []
    for(let i = 1;i<=n;i++) {
        if(i%3===0 && i%5===0) {
            answers.push("FizzBuzz")
        } else if(i%3===0) {
            answers.push("Fizz")
        } else if (i%5===0) {
            answers.push("Buzz")
        } else {
            answers.push(i)
        }
    }
    return answers
};

console.log(fizzBuzz(3))

var numberOfSteps = function(num) {
    let steps = 0
    let remain = num 
    while(remain != 0) {
        if (remain % 2 != 0) {
            remain = remain - 1
            steps += 1
        } else {
            remain = remain/2
            steps += 1
        }
    }
    return steps
};
console.log(numberOfSteps(14))


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

console.log(middleNode(head))

var canConstruct = function(ransomNote, magazine) {
    const magazineCount = {}
    for(let i in magazine) {
        magazineCount[magazine[i]] = (magazineCount[magazine[i]] || 0) + 1
    }

    for(let i in ransomNote) {
        if(!magazineCount[ransomNote[i]]){
            return false
        }
        magazineCount[ransomNote[i]]--
    }
    return true
}

console.log(canConstruct("aa", "aab"))


var findMaxConsecutiveOnes = function(nums) {
    var maxStep = 0
    var steps = 0
    for(let i in nums){
        if(nums[i] == 1){
            steps += 1
        }else {
            if(maxStep < steps){
                maxStep = steps
            }
            steps = 0
        }
    }
    if(maxStep < steps){
        maxStep = steps
    }
    return maxStep
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))


var findNumbers = function(nums) {
    let amount = 0
    for(let i in nums) {
        let num = nums[i]
        let count = 0
        while(num >= 1) {
            num = num / 10
            count += 1
        } 
        if(count % 2 == 0) {
            amount += 1
        }
    }
    return amount
};

console.log("x: " + findNumbers([100000]))

var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let result = new Array(nums.length)
    let resultIndex = nums.length - 1


    while(left < right) {
        let leftValue = Math.abs(nums[left])
        let rightValue = Math.abs(nums[right])
        if(leftValue > rightValue) {
            result[resultIndex] = leftValue * leftValue
            left += 1
        } else {
            result[resultIndex] = rightValue * rightValue
            right -= 1
        }
        resultIndex -= 1
    }
    result[resultIndex] = nums[left] * nums[left]
    return result
};

console.log(sortedSquares([-4,-1,0,3,10]))


var merge = function(nums1, m, nums2, n) {
    for(let j = 0; j<n; j++){
        for(let i = 0; i <m; i++){
            if(nums2[j] <= nums1[i]){
                nums1.splice(i+1,0,nums1[i])
                nums1[i] = nums2[j]
                if(nums1.length > m+n){
                    nums1.pop()
                }
                break
            }
        }
    }
};

merge([1,2,3,0,0,0],3,[2,5,6],3)
console.log(nums1)
// 2.1.
let z = [1,2,3,4,5]
let z_doubled = z.map((item)=>item*2)
// console.log(z_doubled);

// 2.2.
let ages = [1,2,3,4,10]
let ages_srtings= ages.map((item)=>item.toString())
// console.log(ages_srtings);

// 2.3.
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
];

let employees_allcaps= employees.map((item)=>item.name.toUpperCase())
// console.log(employees_allcaps);

// 2.4.
let nums = [1,2,3,4,10]
let nums_multiply_by_index= ages.map((item,i)=>item*i)
// console.log(nums_multiply_by_index)

// 3.1.
let numsArr = [1,2,3,4,10]
const sumOfArr = (arr) => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}
// console.log(sumOfArr(numsArr))

// 3.2.
let numsArr_2 = [1,2,3,4,10]
const doubledItemsOfArr = (arr) => {
    let doubled_arr = []
    arr.forEach(element => {
        doubled_arr.push(element*2)
    });
    return doubled_arr
}
// console.log(doubledItemsOfArr(numsArr_2))

// 3.3.
let stringsWithVowels = ["aeasra","aufdsjfuuaa","fdshfksUfdjfdslA"]
const catchTheVowels = (arr) => {
    let arr_without_vowles = []
    arr.forEach(element => {
        disassemled_element = element.split("")
        disassemled_element.forEach(letter => {
            if (["a","e","i","o","u"].includes(letter.toLowerCase())){
                disassemled_element.splice(disassemled_element.indexOf(letter),1,"X")
            }
        })
        let new_word = disassemled_element.join("")
        arr_without_vowles.push(new_word)
        })
    return arr_without_vowles
    };
// console.log(catchTheVowels(stringsWithVowels))

// 3.4.
const employees_2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];

const checkAge = (employees_arr) => {
    employees_arr.forEach((epl,i) => {
        if(epl.age < 20){
            console.log(`The person at index ${i} is too young.`)
        }
    })
}
// checkAge(employees_2)

// 4.1. Filter Practice
let a = [1,2,3,4,56]
const evensOnly = (nums_arr) => {
   return nums_arr.filter(num => num % 2 === 0)
}
// console.log(evensOnly(a))

// 4.2.
let strings_2 = ["aaa","bbbb","ccccc","dddddd"]
const fiveAndGreaterOnly = (strings_arr) => {
   return strings_arr.filter(word => word.length > 4)
}
// console.log(fiveAndGreaterOnly(strings_2));

// 4.3. 
ppl = [
    { name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }
]

const filterClubMembers = (ppl_arr) => {
    let filtered_pll = ppl_arr.filter(person => person.isClubMember === true)
    return filtered_pll
}
// console.log(filterClubMembers(ppl))

// 5.1. find practice
const array1 = [5, 12, 8, 130, 44]
// console.log(array1.find(num => num >10 ))

// 5.2.A.
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]
   
const findStudent = (stu_arr, name) => {
    return stu_arr.find(stu => stu.name === name)
}
// console.log(findStudent(students,"Bob"))

// 5.2.B
const OlderThan23 = (stu_arr) => {
    return stu_arr.find(stu => stu.age > 23)
}
// console.log(OlderThan23(students))

// 6.1. reduce Practice
const input = [1,-4,12,0,-3,29,-150]
const sumPositive = (arrOfNums) => {
let positive_arr = arrOfNums.filter(num => num > 0 )
if (positive_arr === []){
    return 0
}
return positive_arr.reduce((acc,curr)=> acc+curr)
}
// console.log(sumPositive(input))

// 6.2.
const calcFactorial = (arg) => {
let arg_arr=[]
    for (let i = 1; i< arg+1; i++){
        arg_arr.push(i)
}
return arg_arr.reduce((acc,crr) => acc*crr)
}

// console.log(calcFactorial(6))


// 6.3.

const students2 = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]

const findOldest = (stu_arr) => {
    return stu_arr.reduce((max, current) => {
        if(current.age > max.age) return current;
        return max})
}

// console.log(findOldest(students2))
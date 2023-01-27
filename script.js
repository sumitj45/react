// var a="14";
// var b=14;
// var c=a+b;
// console.log(c)
// console.log(typeof c);

// function Msg() {
//     return ("Good Morning Class")
// }()

// console.log(Msg);


//   function add(a,b){
//     a=prompt("Enter num1")
//     b=prompt("Enter num1")
//     // console.log(a+b);
//   }
//   add(a,b);

//obj
// const student = {
//     name: "sumit",
//     age: "20",
//     email: "sumit@gmail.com"
//     address: {

//     }

// }
// student.phone = 84874505;
// console.log(student)
// program to check if the string is palindrome or not

// function checkPalindrome(string) {


//     const n = string.length;


//     for (let i = 0; i < n / 2; i++) {


//         if (string[i] !== string[len - 1 - i]) {
//             return 'Its not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }


// const input = prompt('Enter a string: ');

// const check = checkPalindrome(input);

// console.log(check);

let arr = [2, 3, 4];
// const newArr = arr.map((nums) => nums * 3);
let newArr = []
arr.forEach(function(item) {
    newArr.push(item * 2 + 2);
})
console.log(newArr);
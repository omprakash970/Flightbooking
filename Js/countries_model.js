// // // // let js = 'Javascript'; 
// // // // const charsInJs=js.split('');
// // // // console.log(charsInJs);
// // // // let companiesString='Faceboook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; 
// // // // const companies=companiesString.split(', ');
// // // // console.log(companies);
// // // // let txt="I love teaching and empowering people, I tech HTML, CSS, JS, React, Python.";
// // // // const words = txt.split(' ');
// // // // console.log(words);
// // // const fruits=['banana', 'oragne', 'mango', 'lemon'];
// // // let firstFruit=fruits[0];   
// // // console.log(firstFruit);
// // // secondFruit=fruits[1];
// // // console.log(secondFruit);
// // // let LastFruit=fruits[fruits.length-1];
// // // console.log(LastFruit);
// // // let lastIndex=fruits.length-1;
// // // console.log(lastIndex);
// // // const numbers = [0, 3.14, 9.81, 98.6, 100]; 
// // // console.log(numbers.length); 
// // // console.log(numbers[0]); 
// // // console.log(numbers[lastIndex]);
// // // const webTechs=[
// // //     'HTML', 
// // //     'CSS', 
// // //     'JavaScript',
// // //     'React',
// // //     'Redux',
// // //     'Node',
// // //     'MongoDB'
// // // ];
// // // console.log(webTechs) ; 
// // // console.log(webTechs.length);
// // // console.log(webTechs[0]);
// // // console.log(webTechs[webTechs.length-1]);


// // // const arr=[];
// // // const countries=[
// // //     'Albania',
// // //     'Bolivia',
// // //     'Canada',
// // //     'Denmark',
// // //     'Ethiopia',
// // //     'Finland',
// // //     'Germany',
// // //     'Hungary',
// // //     'India',
// // //     'Japan',
// // //     'Kenya',
// // //     'Lesotho',
// // //     'Morocco',
// // //     'Nigeria',
// // //     'Oman',
// // //     'Palestine',
// // //     'Qatar',
// // //     'Romania',
// // //     'Sweden',
// // //     'Turkey',
// // //     'Uganda',
// // //     'Venezuela',
// // //     'Yemen',
// // //     'Zimbabwe'
// // // ]
// // // //Fill all the array with the static value 
// // // const list = new Array(); 
// // // console.log(list);
// // // const eightXvalues = new Array(8).fill('X');
// // // console.log(eightXvalues);
// // // const eightAvalues = new Array(8).fill('A');
// // // console.log(eightAvalues);
// // // const four4values = new Array(4).fill(4);
// // // console.log(four4values);
// // const firstList= [1,2,3];
// // const secondList=[4,5,6];
// // const combinedList=firstList.concat(secondList);
// // console.log(combinedList);
// // const fruits=['banana', 'orange', 'mango', 'lemon'];
// // // const vegetables=['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
// // // const fruitsandVeggies=fruits.concat(vegetables);
// // // console.log(fruitsandVeggies);
// // // const numbers = [1, 2, 3, 4, 5];
// // // console.log(numbers.length); 
// // // const numbers1=[6,7,8,9,10];
// // // console.log(numbers1.indexOf(3));
// // // console.log(numbers1.indexOf(0));
// // // console.log(numbers1.indexOf(10));
// // // console.log(numbers1.indexOf(6));
// // // //check item in a list 
// // // const fruits1=['banana', 'orange', 'mango', 'lemon'];
// // // let index=fruits1.indexOf('banana');
// // // if(index!=-1){
// // //     console.log('This fruit does exist in the list');
// // // }else{
// // //     console.log('This fruit does not exist in the list');
// // // }
// // // index!=-1?console.log('This fruit does exist in the list'):console.log('This fruit does not exist in the list');

// // // let indexOfAvocado=fruits1.indexOf('avocado');
// // // indexOfAvocado!=-1?console.log('This fruit does exist in the list'):console.log('This fruit does not exist in the list');
// // // const numbers=[1,2,3,4,5,6,7,8,9,10];
// // // console.log(numbers.includes(5));
// // // console.log(numbers.includes(0));
// // // console.log(numbers.includes(10));
// // // console.log(numbers.includes(1));
// // // const webTechs=[
// // //     'HTML',
// // //     'CSS',
// // //     'JavaScript',
// // //     'React',
// // //     'Redux',
// // //     'Node',
// // //     'MongoDB'
// // // ]
// // // console.log(webTechs.includes('Node'));
// // // console.log(webTechs.includes('C++'));
// // // console.log

// // const numbers=[1,2,3,4,5];
// // console.log(numbers.toString());
// // console.log(numbers.join());
// // const webTechs=[
// //     'HTML',
// //     'CSS',
// //     'JavaScript',
// //     'React',
// //     'Redux',
// //     'Node',
    
// // ]
// // console.log(webTechs.join(" # "));
// const numbers = [1,2,3,4,5];

// // console.log(numbers.slice());
// // console.log(numbers.slice(0));
// // // console.log(numbers.slice(0,3));
// // // console.log(numbers.slice(0,2));
// // // console.log(numbers.splice());
// // // console.log(numbers.splice(0, 1));
// // numbers.splice(2, 3, 6, 7, 8, 9, 10);
// // console.log(numbers);
// const arr = ['item1', 'item2', 'item3', 'new Item'];
// arr.push('last Item');
// console.log(arr);
// //shift means remove from the beginning and pop means remove from the end, and push means add to the end and unshift means add to the beginning
// const numbers1 = [1,2,3,4,5];
// numbers1.reverse();
// console.log(numbers1);
// const webTechs=[
//     "html", 
//     "css",
//     "js",
//     "react",
//     "node",
//     "mongodb"

// ]
// webTechs.sort();
// console.log(webTechs);
// webTechs.reverse();
// console.log(webTechs);
const firstNums=[1,2,3]; 
const secondNums=[4,5,6];
const ArrayofArrays=[firstNums, secondNums];
console.log(ArrayofArrays[0]);
const frontend=['html', 'css', 'js', 'react'];
const backend=['node', 'express', 'mongodb'];
const fullstack=[frontend, backend];
console.log(fullstack[0]);

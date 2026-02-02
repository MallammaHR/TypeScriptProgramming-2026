let num :number[] = [4,5,6,7,8,9,1];
console.log(num);
//remove
num.splice(1,2);//starting at index=1,remove 2 elements
console.log(num);
 //add
num.splice(1,3,100,101,102);//starting at index=3,it will remove 3 elements and i will add 3-new elements
console.log(num);

let fruit:string[]=['banana','orange','kiwi'];
fruit.splice(1,0,'Grapes');
console.log(fruit);

//array.slice(startIndex, endIndex)--slice() – does NOT change original array
let nums = [10, 20, 30, 40, 50];

let result = nums.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(nums);   // unchanged
//slice()==>immutable
//endIndex is not included


//Array.of() – create array safely
//when you want to create an array from valueslet arr = Array.of(5);
let arr1=Array(5);
console.log(arr1);
let arr = Array.of(5);
console.log(arr); // [5]

//indexOf() – find index of element--Returns index or -1
let colors = ["red", "green", "blue"];

console.log(colors.indexOf("green")); // 1
console.log(colors.indexOf("yellow")); // -1
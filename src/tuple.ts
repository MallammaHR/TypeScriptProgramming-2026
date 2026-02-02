//fixed in size
//allowed both homo and hetro(allowed differnet types of data types)
//fixed-lenght

let person:[string,number]=['tom',69]
person.push(6);
console.log(person);

let empData:[string,number,number,boolean]=['Alex',40,23.3,true];
console.log(empData);

//from TS:4.4 onwords we can give name for tuple elments
let emp:[id:number,name:string,salary:number,active:boolean]=[101,'TOM',34.4,true];
console.log(emp);
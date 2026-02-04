import { User } from "./User";

let u1=new User('Manish',38,30.22);
console.log(u1.name,u1.age,u1.salary);
u1.drive();
console.log(u1.shares);//shares ,eventhough its final and we acesss it but we cannot change it 

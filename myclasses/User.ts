export class User{
    public name:string;
    public age:number;
    public salary:number;
    readonly shares :number=1000;
  

    constructor(name:string,age:number,salary:number){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

     drive():void{
        console.log('User is driving : '+this.name);
    }
}

// //create object
// let u1 = new User('Mallu',30,12.33);
// console.log(u1.name,u1.age);
// u1.driver();
// u1.age=40;
// console.log(u1.name,u1.age);
// //u1.shares=80;//we cannot assign since it is read-only

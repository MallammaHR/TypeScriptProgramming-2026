import  {Employee} from "./accessModifiers.ts";

class User extends  Employee{
 

  constructor(name:string,age:number,salary:number,isActive:boolean){
      super(name,age,salary,isActive);

}
   static start():void{
        let ul=new User('Peter',20,32.11,true);
        console.log(ul.name);
        console.log(ul.name);
        console.log(ul.getSalary());

    ul.getUserData();
    ul.getUserDetails();

    }

}

User.start();
//Access Modifiers
//public-anywhere
//private-only withing the class
//protected--withing the class+child class

 class Employee{
    public name :string;
    public age:number;
    private salary:number;
    protected isActive:boolean;


    constructor(name:string,age:number,salary:number,isActive:boolean){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.isActive=isActive;
    }

    public  drive():void{
        console.log(this.name);
        console.log(this.salary);

    }

    public getSalary():number{
        return this.salary=this.salary;
    }

    private getUserDetails():void{
        console.log('get details..............');
    }

    protected getUserData():void{
        console.log('getting user data..');
    }

 }

 let emp=new Employee('TOM',30,12.33,true);
 console.log(emp.name);
 console.log(emp.age);
 //console.log(emp.salaray);//not allowerd since salary is private outside 
 //console.log(emp.isActive);//not allowed protected outsude the class
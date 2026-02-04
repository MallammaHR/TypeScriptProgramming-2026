export interface User{
    name:string;
    age:number;
    drive():void;
}
export interface Customer{
    salary:number;
    login():boolean;
}

let user:User & Customer={
    name: "TOM",
    age: 60,
    salary:12.33,

    login():boolean {
        console.log('user is logged-in',user.name,user.age);
        return true;
    },
    drive: function (): void {
        console.log('user is logged-in',user.name,user.age);

    }
}
console.log(user.name);
console.log(user.age);
user.drive();
user.login();
console.log(user.salary);
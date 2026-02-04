

let myusername:string='Mallu';
let myage:number=100;

//custometype
type userID=string|number;
let myuserID:userID='mallumTaanuKinni';
let custID:userID=4439;

console.log(myuserID);

type status="pending"|"inprogress"|"completed";

let orderStatus:status="completed";
console.log(orderStatus);

let httpStatusCode=200|201;


type buttonSize="small"|"medium"|"large";
let loginBTN:buttonSize="small";

type User={
    id:string|number;
    name:string,
    salary:number;
    isActive:boolean;
    creatatedAt:Date;
}

let newUser1:User={
    id: 123,
    name: "Petere",
    salary: 12.33,
    isActive: false,
    creatatedAt: new Date()
}
console.log(newUser1);



let newUser2:User={
    id: "nav001",
    name: "Naveen",
    salary: 13.33,
    isActive: false,
    creatatedAt: new Date()
}

console.log(newUser2);
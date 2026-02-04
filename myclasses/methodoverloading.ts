//method overloadin
//multiple method  with same method name
//only single implentation


class Calc{

    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:string,b:number):string;
    add(a:number,b:string):string;
    add(a:number,b:boolean):string;
    add(a:boolean,b:string):string;

    //single implenattion :with only one body
    
    add(a:any,b:any):any{
        return a+b;
    }

}

let c1=new Calc();
let r1=c1.add(10,20);
console.log(r1);


let s1=c1.add('hello','plawrigth');
console.log(s1);

let t1=c1.add('hi',10);
console.log(t1);

let b1=c1.add(10,false);
console.log(b1);
export class Employee{

    getSalary(empName:string):number{
        if(empName==='tom')
        {
            return 12.33;
        }
        else if(empName==='petere')
        {
            return 14.33;
        }
        else{
            console.log('emp not found..'+empName);
            return -1;
        }
    }
}

let e1=new Employee();
let slaray=e1.getSalary('tom');
console.log(slaray);
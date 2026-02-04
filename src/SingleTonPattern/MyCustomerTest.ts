export class Customer{

    private static customer:Customer;//null

    public static getInstance():Customer{
        if(this.customer==null)
        {
            Customer.customer= new Customer();
        }
        return this.customer;
    }

    public getInfo():void{
        console.log('Getting the customer Info...');
    }
}

Customer.getInstance().getInfo();
//we can create the object of this class using new keyword
let c1=Customer.getInstance();
let c2=Customer.getInstance();
console.log(c1===c2);

//Customer.getInstance().getInfo();
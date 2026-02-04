export class Car {
    public name: string;
    public color: string;
    public price: number;
    
    constructor(name: string, color: string, price: number) {
        this.name = name
        this.color = color
        this.price = price
    }


    start(): void {
        console.log('start-car....');
    }

    stop(): void {
        console.log('stop-car');
    }
}

export class BMW extends Car {
    // public name:string;
    // public color:string;
    // public price:number;

    // constructor(name:string,color:string,price:number){
    //     //super class constructor and first statement of the child class constructro
    //     super();
    //     this.name=name;
    //     this.color=color;
    //     this.price=price;
    // }

    override start(): void {
        console.log('BMW-start');
    }

    autoParking(): void {
        console.log('BMW-auto parking..');
    }
}
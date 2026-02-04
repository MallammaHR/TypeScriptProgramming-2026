export abstract class Page {

    name: string;
    time: number;
    //in Ts-abstract class can have the constructor
    constructor(name: string, time: number) {
        this.name = name
        this.time = time
    } 


    //abstract method with method prototype:
    abstract title(): void;
    abstract url(): void;

    //non-abstract-with properbod
    loadingTime(): void {
        console.log('page....loading... 10se');
    }

}

export class LoginPage extends Page {
    override title(): void {
        console.log('Login page --title');
    }
    override url(): void {
        console.log('login page ul---http://abc.com');

    }
    override loadingTime(): void {
        console.log('page loading ...2sec');
    }

    public login(username: string, password: string): void {

        console.log('Login with username and password:' + username, password);
    }
        name: string;
    time: number;
    //in Ts-abstract class can have the constructor
    constructor(name: string, time: number) {
        super(name,time);
        this.name = name
        this.time = time
    } 

}
//we cannot create the objcet of the abcstact class;
//let p1=new Page();

let l1 = new LoginPage('TOM',10);
console.log(l1.name,l1.time);
l1.title();
l1.url();
l1.loadingTime();
l1.login('admin', 'admin123');
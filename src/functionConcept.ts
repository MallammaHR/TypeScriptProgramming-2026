function add(a:number,b:number):number
{
    return a+b;
}
let s1:number=add(2,3)
console.log(s1);


function print():void{
    console.log('some Info....');
}
print();


function clickOnElement(element:string):void
{
    console.log(`click-on the element ${element}`);
}

clickOnElement('loginBTN');

//return and void cannot be together
/**
 * This function is checking the element on the page
 * @param element 
 * @param timeOut 
 * @returns it rtuen boolean value(true/false)
 */
//can we return anything
function isElementDisplayed(element:string,timeOut:number):boolean{
    let isElement=true;
    if(isElement)
    {
        console.log(`ele is present on the page :${element} within the timeOut :${timeOut}`);
        return true;
    }
    else
    {
        console.log('element is not present.....');
        return false;
   }

}
if (isElementDisplayed('loginLink',10)){
    clickOnElement('loginLink');
}


function getData():string[]{
    return ['macbook','iphone','laptop'];
}
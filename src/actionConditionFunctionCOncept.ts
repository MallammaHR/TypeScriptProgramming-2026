//action:click on element
function clickOnElement(element:string):void{
    console.log(`click on the element : ${element}`);
}
clickOnElement('loginBTN');

//on Condition have to apply the action
function isElementDisplayed(element:string ,timeOut:number):boolean{
    let isElement = true;
    if(isElement)
    {
        console.log(`element is present on : ${element} within the time : ${timeOut}`);
        return true;
    }
    else{
        console.log('eleement is not present .....'); 
        return false;
    }
}

if(isElementDisplayed('loginBTN',10)){
    clickOnElement('loginBTN');
}

function getData():{}{
    return {
        name:'Mallu',
        age:20
    }
}

let user = getData();
console.log(user);
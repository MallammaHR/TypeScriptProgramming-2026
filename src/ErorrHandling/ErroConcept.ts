let numb =9/0;
console.log(numb);//no error or no exception

function m1(){
console.log('m1-method');
m2();
}

function m2(){
    console.log('m2-method');
    try {
          m3();
    } catch (error) {
        console.log(error);
    }
    finally{
        console.log('logout..');
    }
  
}
function m3(){
    console.log('m3-method');
    throw new Error('===some error=====' );
}
m1();
console.log("Bye...");


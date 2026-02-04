import { SHARE_ENV } from "node:worker_threads";

export class Shop{
    //private constructor..
    private constructor(){}

    login():Shop{
        console.log('Login--app');
        return this;
    }

    search():Shop{
        console.log('serach--product');
        return this;
    }

    addToCart():Shop{
        console.log('add to cart for this product');
        return this;
    }

    payment():Shop{
        console.log('making the payment using cc');
        return this;
    }

    logout():Shop{
        console.log('logout......');
        return this;
    }

    static builder():Shop{
        return new Shop();
    }

    build():void
    {
        console.log('Email sent and Shopping is Done.....');
    }
}

//fluent wait way of calling the method
//method chaining 
//uc1
Shop.builder()
    .login()
    .search()
    .addToCart()
    .payment()
    .logout()
    .build();
//uc2
Shop.builder()
    .login()
    .search()
    .logout()
    .build();
//uc3
Shop.builder()
    .login()
    .logout()
    .build();

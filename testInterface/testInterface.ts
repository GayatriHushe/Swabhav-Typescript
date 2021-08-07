//building schema
interface ICustomer{
    id:number,
    firstName:String,
    lastname:String,
    location?:String
}

function printInfo(customers:ICustomer[])
{
    console.log("using of")
    for(let c of customers)
    {   console.log(c);
    }

    console.log("using in")
    for(let c in customers)
    {   console.log(c);
    }
}

printInfo([{id:101,firstName:'abc',lastname:'xxy'},
{id:102,firstName:'def',lastname:'yhs'},
{id:103,firstName:'pqr',lastname:'ksk',location:'mumbai'},
])
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


var arr = [3, 5, 7];
arr.foo = "hello";
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
  // it doesn't log "3", "5", "7", "hello"
}

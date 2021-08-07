class Customer{
    _id:number
    _firstName:String
    _lastName:String

    constructor(id:number,firstName:String,lastname:String)
    {
        this._id=id
        this._firstName=firstName
        this._lastName=lastname
    }

    get Id()
    {   return this._id;
    }
    get FirstName()
    {   return this._firstName
    }
    set FirstName(name:String)
    {   this._firstName=name
    }
    get LastName()
    {   return this._lastName
    }
}

let c1=new Customer(101,"abc","pqr")
console.log(c1.Id) //c1.getId()

console.log(c1.FirstName) //c1.getFirstName()
c1.FirstName="ABC"
console.log(c1.FirstName) 

console.log(c1.LastName) //c1.getLastName()


// compile as : tsc -t es5 testClass.ts
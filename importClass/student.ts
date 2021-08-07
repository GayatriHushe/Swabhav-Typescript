//one module

export class Student{
    constructor(private firstname, private lastName)        
    {

    }

    get FullName()
    {
        return this.firstname +" "+this.lastName
    }
}

export class Address{
    constructor(private location, private city)
    {

    }
    get City()
    {
        return this.city
    }
}
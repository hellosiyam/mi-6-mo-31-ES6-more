class Vehicle{
    constructor(name, seat){
        this.name = name
        this.seat = seat
    }
}

class Bus extends Vehicle{
    constructor(wait, rote){
        super(name, seat);
        this.wait = wait;
        this.rote = rote;
    }
}

class Car extends Vehicle{
    constructor(color, price){
        super(name, seat);
        this.color = color;
        this.price = price;
    }
}

// factory DP

class Car{
    private make: string;
    private model: string;
    private numDoor: number;
    private color: string;


       constructor(make: string, model: string){
        this.model = model;
        this.make = make;
        this.numDoor = 0;
        this.color = "";
    
       }
       setNUmDoors(doors: number){
        this.numDoor = doors
       }
       setColor(color: string){
        this.color= color;
       }
}


class CarFactory{
    private car: Car;
    private makeCar: ()=> Car;

    constructor(makeCar: ()=>Car){
        this.makeCar = makeCar;
    }
    build(doors: number, color: string){
        this.car = this.makeCar();
        this.car.setNUmDoors(doors);
        this.car.setColor(color);
    }

    getCar(): Car{
        return this.car;
    }
}

function makeFord(): Car{
    return new Car("Ford", "Pinto")
}

function makeHonda(): Car{
    return new Car("Honda", "Civic")
}


let fordFactory = new CarFactory(makeFord);
fordFactory.build(4,"green");
console.log(fordFactory.getCar());
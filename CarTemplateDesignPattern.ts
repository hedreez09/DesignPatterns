//Implementing Template pattern with thw use of CarFactrory

class Car{
    private make: string;
    private model: string;
    private numDoors: number;
    private color: string;


    constructor(make: string, model: string){
        this.model = model;
        this.make = make;
        this.numDoors = 0;
        this.color = "";
    }

    setNumDoors(doors: number){
        this.numDoors = doors;
    }
    setColor(color: string){
        this.color = color;
    }

}
 class CarFactory{
        protected car: Car;
    
        constructor(){}
            build(){
                this.makeCar();
                this.attachDoors();
                this.paintColor();
            }

            makeCar(){}
            attachDoors(){}
            paintColor(){}

            getCar(){
                return this.car;
            }
    }

    class ToyotaCorrolaFactory extends CarFactory{
        makeCar(){
            this.car = new Car("Toyota", "corolla");
        }
        attachDoors(){
            this.car.setNumDoors(4);
        }
        paintColor(){
            this.car.setColor("Navy Blue"); 
        }
    }

    let myToyotaCorrolaFactory = new ToyotaCorrolaFactory();
    myToyotaCorrolaFactory.build();
    console.log(myToyotaCorrolaFactory.getCar());
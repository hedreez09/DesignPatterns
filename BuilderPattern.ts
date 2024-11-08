/*
*************************************
Builder Pattern
A class should be responsible for itself, and not building itself

*/

class Car{
    private make : string;
    private model: string;
    private numDoors : number;
    private color: string;


    constructor(make: string, model: string, numDoors: number, color: string){
        this.make = make;
        this.model = model;
        this.numDoors = numDoors;
        this.color = color;
    }

    // Include your favorite getters and setters and other Methods



}
class FerrariBuilder {
    private car: Car;

    constructor(model:string, color:string){
        this.car = new Car("Ferrari", model, 2 , color);
    }

    getCar(): Car {
        return this.car;
    }

}
let fb = new FerrariBuilder("La Ferrari", "blue");

console.log(fb.getCar());
       
 /*
***********************************************************Singleton Design Pattern
The goal: is to have exalty one object of a class  */
class Earth {
    private static instance: Earth ; // First requirement: private static instance

    private numPeople: number;
    private numKangoroos: number;

    private constructor(){  //Second requirement: private constructor
        this.numPeople = 10000;
        this.numKangoroos = 2000;

    }
  
  static getEarth(): Earth {  // Third requirement: static getter Method
        if (Earth.instance == undefined){
            Earth.instance = new Earth();
        }
    return Earth.instance;
  }

  //At this point this is a normal class
  getNumPeople(): number{
    return this.numPeople;
  }
  getNumKangoroos(): number{
    return this.numKangoroos;
  }
  setNumKangoroos(num: number){
    this.numKangoroos = num;
  }
  setNumPeople(num: number){
    this.numKangoroos = num;
  }
  
}
function increaseKangoroos(num: number){
    let earth: Earth=Earth.getEarth();
    earth.setNumKangoroos(earth.getNumKangoroos() + num);// increase the number of Kangoroos by num
}
function decreaseHumans(num: number){
    let earth: Earth = Earth.getEarth();

    earth.setNumPeople(earth.getNumPeople() - num);
}
console.log (Earth.getEarth());
increaseKangoroos(1000);
console.log(Earth.getEarth());
decreaseHumans(1000);
console.log(Earth.getEarth());
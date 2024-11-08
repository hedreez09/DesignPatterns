//Decorator Design pattern

interface Coffee{
    getCost(): number;
    getIngredients(): string;

}


class SimpleHotCoffee implements Coffee{
    public getCost(): number{
        return 3.50;
    }

    public getIngredients(): string {
        return "Regular Coffee";
    }
}
class FancyCoffee implements Coffee {
    public getCost(): number{
        return 8;
    }
    public getIngredients(): string {
        return "Fancy Coffee";
    }
}

abstract class CoffeeDecorator implements Coffee{
    private decoratedCoffee:Coffee;

    constructor(coffee: Coffee){
        this.decoratedCoffee = coffee;
    }

    public getCost(): number{
        return this.decoratedCoffee.getCost()
    }
    public getIngredients(): string{
        return this.decoratedCoffee.getIngredients();
    }
}

class WithCrime extends CoffeeDecorator {
    public constructor(coffee: Coffee){
        super(coffee);
    }
}

class WithSprinkles extends CoffeeDecorator{
    public constructor(coffee: Coffee){
        super(coffee);
    }
    public getCost(): number{
        return super.getCost() + 0.75;
    }

    public getIngredients(): string {
        return super.getIngredients() + "WithSprinkles"

    } 
}

let  jameIdrisOrder = new WithCrime(new SimpleHotCoffee);
console.log(jameIdrisOrder.getIngredients());
console.log(jameIdrisOrder.getCost());
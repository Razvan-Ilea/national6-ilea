console.log('Java-Script Object Oriented Programming');

const car = {
    nrOfWheels: 4,
    color: 'red',
    engine: 'diesel',
    runningEngine: false,
    turn: function(direction) {
        if (this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
    },
    startEngine: function() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
}

car.turn('left');
car.startEngine();
car.turn('left');

const car2 = {
    nrOfWheels: 4,
    color: 'white',
    engine: 'petrol',
    runningEngine: false,
    turn: function(direction) {
        if (this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
    },
    startEngine: function() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
}

car2.turn('left');
car2.startEngine();
car2.turn('left');

// Classes

class Car {
    constructor(color, engine) {
        this.nrOfWheels = 4;
        this.color = color;
        this.engine = engine;
        this.runningEngine = false;
    }

    turn(direction) {
        if (this.runningEngine) {
            console.log('The car is turning', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
    }

    startEngine() {
        console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
}

const car3 = new Car('yellow', 'hybrid');
const car4 = new Car('pink', 'petrol')
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color = 'green';
console.log(car3);
console.log(car4);

car4.nrOfDoors = 2;
console.log(car4);
console.log(car3);
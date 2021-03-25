console.log('Spaceship Generator Homework');

class Spaceship {
    constructor() {
        this.xPosition = 0;
        this.yPosition = 0;
        this.generateHtmlRef();
        this.setMoveSpaceship()
    }
    generateHtmlRef() {
        const spaceship = ['blue-spaceship.png','red-spaceship.png','green-spaceship.png']  
        this.ref = document.createElement("img");
        this.ref.src = spaceship[Math.floor(Math.random() * spaceship.length)];
        this.ref.classList.add("spaceship");
        document.body.appendChild(this.ref);
    }
    setMoveSpaceship() {
        document.addEventListener("keydown", (event) => {
            newSpaceship.moveSpaceship(event.key)
        });
    }
    moveSpaceship(direction) {
        if (direction === "ArrowRight") {
            this.xPosition += 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowLeft") {
            this.xPosition -= 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowUp") {
            this.yPosition -= 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        } else if (direction === "ArrowDown") {
            this.yPosition += 5;
            this.ref.style.transform = `translate(${this.xPosition}px, ${this.yPosition}px)`;
        }
    }    
};

let newSpaceship;
document.getElementById('generate-spaceship').addEventListener('click', function() {
    newSpaceship = new Spaceship();
})
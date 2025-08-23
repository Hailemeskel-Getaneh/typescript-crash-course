// abstract class and methods

abstract class Shape {

    constructor(public color: string){}

    abstract draw(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color:string){
        super(color)
    }

    draw(): void{
        console.log(`Drawing a cicle with area of ${this.radius * this.radius* 3.14 } and color ${this.color} `)
    }
}

class Rectangle extends Shape{
    constructor(public length: number, public width: number, color: string){
        super(color)
    }

    draw(): void{
        console.log(`Drawing a rectangle with area of ${this.length * this.width} and color ${this.color}`)
    }
}

let circle = new Circle(6, 'red');

circle.draw();

let rectangle = new Rectangle(3, 8, 'green')
rectangle.draw()
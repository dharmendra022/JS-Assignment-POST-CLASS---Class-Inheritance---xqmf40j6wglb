// import using require

var Shape = require('./shape.js');
class Circle extends Shape {
    constructor() { super(); this.radius = 9; }
    calculateArea() { return "Calculated area of circle"; }
}
module.exports = Circle;

// declare class


// export class using module.exports

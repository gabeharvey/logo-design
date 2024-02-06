// This defines the Shapes class
class Shapes {
    constructor () {
        this.color = '';
    }
    setColor (color) {
        this.color = (color);
    }
};

// This defines the Circle class by extending the Shapes class
class Circle extends Shapes {
    render () {
        return `<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.color}'></circle>`;
    }
};

// This defines Triangle class by extending the Shapes class
class Triangle extends Shapes {
    render () {
        return `<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${this.color}'></polygon>`;
    }
};

// This defines Square class by extending the Shapes class
class Square extends Shapes {
    render () {
        return `<rect x='50' height='200' width='200' fill='${this.color}'></rect>`;
    }
};

module.exports = { Circle, Triangle, Square };
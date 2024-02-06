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
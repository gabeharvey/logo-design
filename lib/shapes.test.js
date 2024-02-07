// This imports shapes data from shapes.js
const { Circle, Triangle, Square } = require('./shapes');

// This is the test case for Circle
describe ('Circle', () => {
    test('Circle render success!', () => {
        const shape = new Circle ();
        let color = ('royalblue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${color}'></circle>`);
    })
});

// This is the test case for Triangle
describe ('Triangle', () => {
    test('Triangle render success!', () => {
        const shape = new Triangle ();
        let color = ('gray');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='${color}'></polygon>`);
    })
});

// This is the test case for Square
describe ('Square', () => {
    test('Square render success!', () => {
        const shape = new Square ();
        let color = ('seagreen');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='${color}'></rect>`);
    })
});
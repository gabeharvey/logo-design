// This imports shapes data from shapes.js
const { Circle, Triangle, Square } = require('./shapes');

// This is the test case for Circle
describe ('Circle', () => {
    test('Circle render success!', () => {
        const shape = new Circle ();
        let color = ('royalblue');
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50% r='100' height='100%' width= '100%' fill='${color}'></circle>`);
    })
});
// Packages required for this application
const inquirer = require("inquirer");
const filesystem = require("graceful-fs");
const { Circle, Triangle, Square } = require("./lib/shapes")

// Questions presented to user, user can specify desired aspects of logo
const questions = [
    {
        type: "input",
        message: "What letters would you like to appear on your customized logo? Please enter 1 to 3 letters. Example A, AB, or ABC:",
        name: "chars",
    },
    {
        type: "input",
        message: "What color would you like the characters to appear on your customized logo? Please enter a color or hexadecimal number. Example Red or #ff0000:",
        name: "chars-color",
    },
    {
        type: "input",
        message: "What color would you like for your background on your customized logo? Please enter a color or hexadecimal number. Example Yellow or #ffff00:",
        name: "shape-color",
    },
    {
        type: "checkbox",
        message: "What shape would you like for your customized logo? Please select from the following options.",
        name: 'logo-shape',
        choices: ["Circle", "Triangle", "Square"],
    },
];

// This class represents a Scalable Vector Graphics element
class Svg {
    // Sets textElement and shapeElement to empty strings
    constructor () {
        this.textElement = '';
        this.shapeElement = '';
    }
    // This method returns a Scalable Vector Graphics element with a specified shape and text
    render () {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    // This method sets the textElement with a specific color and text
    setTextElement (text,color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    // This method sets the shapeElement
    setShapeElement (shape) {
        this.shapeElement = shape.render();
    };
};

// This function writes the information generated to a separate file
function writeToFile (fileName, data) {
    filesystem.writeFile (fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg")
    });
};

// This function initializes the application
async function init () {
    console.log('Initializing Application');
    let svgFinalString = '';
    let svgFile = 'logo.svg';
    
    const answers = await inquirer.prompt(questions);

    let resChars = '';
    if (answers.chars.length > 0 && answers.chars.length < 4) {
        resChars = answers.chars;
    } else {
        console.log("Please re-enter number of characters as 1, 2, or 3 characters. Any other entries are invalid.")
    return;
    };

console.log('[' + resChars + '] are the letters that will appear in custom logo!');

// This sets resFontColor to the font color the user chooses
resFontColor = answers['chars-color'];
console.log('[' + resFontColor + '] is the font color chosen!');

// This sets resShapeColor to the background color the user chooses
resShapeColor = answers['shape-color'];
console.log('[' + resShapeColor + '] is the background color chosen!');

// This sets resShapeType to the logo shape type the user chooses
resShapeType = answers['logo-shape'];

// This sets finalShape to user preference
let finalShape;
if (resShapeType == 'Circle') {
    finalShape = new Circle ();
    console.log('Circle is the shape chosen!');
} else if (resShapeType == 'Triangle') {
    finalShape = new Triangle ();
    console.log('Triangle is the shape chosen!');
} else if (resShapeType == 'Square') {
    finalShape = new Square ();
    console.log('Square is the shape chosen!');
} else {
    console.log('Shape is not valid!');
}

// This sets finalShape to background color selected by user
finalShape.setColor(resShapeColor);

let svg = new Svg();
svg.setTextElement(resChars, resFontColor);
svg.setShapeElement(finalShape);
svgFinalString = svg.render();

console.log(svgFinalString + 'is being displayed');

console.log('Your customized logo is now complete!');
console.log('Creating file for your personalized logo...');
writeToFile(svgFile, svgFinalString);

};

init ();
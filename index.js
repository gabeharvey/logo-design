// Packages required for this application
const inquirer = require("inquirer");
const filesystem = require("graceful-fs");

// Questions presented to user, user can specify desired aspects of logo
const questions = [
    {
        type: "input",
        message: "What characters would you like to appear on your customized logo? Please select up to 3 characters.",
        name: "chars",
        default: "ABC"
    },
    {
        type: "input",
        message: "What color would you like the characters to appear on your customized logo? Please enter a color or hexadecimal number.",
        name: "chars-color",
        default: "Red or #ff0000"
    },
    {
        type: "input",
        message: "What color would you like for your background on your customized logo? Please enter a color or hexadecimal number.",
        name: "shape-color",
        default: "Yellow or #ffff00"
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
        return `<svg version="1.1" xlmns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
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
        console.log("Your Logo is Complete!")
    });
};

// This function initializes the application
async function init () {
    console.log('Initializing Application');
    let svgString = '';
    let svgFile = 'myCustomizedLogo.svg';
    
    const answers = await inquirer.prompt(questions);

    let resChars = '';
    if (answers.chars.length > 0 && answers.chars.length < 4) {
        resChars = answers.chars;
    } else {
        console.log("Please re-enter number of characters as 1, 2, or 3 characters. Any other entries are invalid.")
    }
    return;
};
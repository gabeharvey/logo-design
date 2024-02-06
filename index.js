// Packages required for this application
const inquirer = require("inquirer");

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
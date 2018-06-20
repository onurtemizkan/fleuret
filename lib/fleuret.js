const Matrix = require("./matrix.js");
const constructors = require("./constructors.js");

const fleuret = {
    matrix: Matrix,
    ...constructors,
};

exports = fleuret;
const Matrix = require("./core/matrix.js");
const constructors = require("./constructors.js");

const fleuret = {
    matrix: Matrix,
    ...constructors,
};

module.exports = fleuret;

const Matrix = require("./matrix.js");

/*
    Filled Values
*/

/**
 * Creates a matrix filled with given value
 *
 * @param {Number} dimX Row size of the matrix
 * @param {Number} dimY Column size of the matrix
 * @param {Number} value Value to give all elements of the matrix
 * @param {String} type Expected C-type of the matrix elements
 * @returns {Matrix} Created matrix
 */
function full(dimX, dimY, value, type) {
    const mat = new Matrix({ dimX, dimY, type });
    mat.data.fill(value);

    return mat;
}

/**
 * Creates a matrix filled with `1`s
 *
 * @param {Number} dimX Row size of the matrix
 * @param {Number} dimY Column size of the matrix
 * @param {String} type Expected C-type of the matrix elements
 * @returns {Matrix} Created matrix
 */
function ones(dimX, dimY, type) {
    return full(dimX, dimY, 1, type);
}

/**
 * Creates a matrix filled with `0`s
 *
 * @param {Number} dimX Row size of the matrix
 * @param {Number} dimY Column size of the matrix
 * @param {String} type Expected C-type of the matrix elements
 * @returns {Matrix} Created matrix
 */
function zeros(dimX, dimY, type) {
    return new Matrix({ dimX, dimY, type });
}

/**
 * Creates an identity matrix of given size
 *
 * @param {Number} size Edge size of the square identity matrix
 * @param {String} type Expected C-type of the matrix elements
 * @returns {Matrix} Created identity matrix

 */
function identity(size, type) {
    const mat = new Matrix({ dimX: size, dimY: size, type });

    for (let i = 0; i < size; i++)
        mat.set(i, i, 1);

    return mat;
}

/*
    From Existing Data
*/

/**
 * Creates a vector or a matrix from the given JavaScript array
 *
 * @param {Array} array JavaScript array to be converted into a matrix or vector
 * @returns {Matrix} Created identity matrix
 */
function fromArray(array) {
    return new Matrix({ data: array });
}

module.exports = {
    zeros,
    ones,
    full,
    identity,
    fromArray,
};
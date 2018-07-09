/**
 * Returns whether the matrix is a Vector
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @returns {boolean} True if the matrix is 1D
 * @memberof Matrix
 * @instance
 */
function isVector() {
    if (this.colCount === 1 || this.rowCount === 1)
        return true;

    return false;
}

/**
 * Returns whether the matrix is a 3D Vector
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @returns {boolean} True if the matrix is a 3D Vector
 * @memberof Matrix
 * @instance
 */
function is3dVector() {
    // eslint-disable-next-line no-magic-numbers
    if (this.isVector() && this.colCount === 3 || this.rowCount === 3)
        return true;

    return false;
}

/**
 * Returns whether the matrix is 1x1
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @returns {boolean} True if matrix is 1x1
 * @memberof Matrix
 * @instance
 */
function isScalar() {
    if (this.colCount === 1 && this.rowCount === 1)
        return true;

    return false;
}

/**
 * Returns whether the matrix is a square matrix
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @returns {boolean} True if matrix is square
 * @memberof Matrix
 * @instance
 */
function isSquare() {
    return this.colCount === this.rowCount;
}

/**
 * Returns whether the matrix is an identity matrix
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @returns {boolean} True if the matrix is an identity matrix
 * @memberof Matrix
 * @instance
 */
function isIdentity() {
    if (!this.isSquare()) return false;

    const flattened = this.flatten().data;

    for (let idx = 0; idx < flattened.length; idx++) {
        const elm = flattened[idx];

        if (idx % (this.rowCount + 1) === 0 && elm !== 1)
            return false;

        if (idx % (this.rowCount + 1) !== 0 && elm !== 0)
            return false;
    }

    return true;
}

module.exports = {
    isVector,
    is3dVector,
    isScalar,
    isSquare,
    isIdentity,
};

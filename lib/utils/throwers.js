/**
 * Throws if the given matrices have incompatible dimensions
 * Useful for dot products
 *
 * @param {Matrix} mat1 Leftmost matrix to be checked
 * @param {Matrix} mat2 Rightmost matrix to be checked
 *
 * @throws Error
 * @returns {undefined}
 */
function throwIfDimensionsMismatch(mat1, mat2) {
    if (mat1.colCount !== mat2.rowCount)
        throw Error("The dimensions of matrices are incompatible for dot product");
}

/**
 * Throws if the given matrice is not square
 * Useful for dot products
 *
 * @param {Matrix} mat Matrix to be checked
 *
 * @throws Error
 * @returns {undefined}
 */
function throwIfNotSquare(mat) {
    if (!mat.isSquare())
        throw Error("This matrix is not a square matrix.");
}

module.exports = {
    throwIfDimensionsMismatch,
    throwIfNotSquare,
};
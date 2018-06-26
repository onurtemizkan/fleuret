/**
 * Throws if given matrices have incompatible dimensions
 * Useful for dot products
 *
 * @param {Matrix} mat1 - Leftmost matrix to be checked
 * @param {Matrix} mat2 - Rightmost matrix to be checked
 *
 * @throws Error
 * @returns {undefined}
 * @private
 */
function throwIfDimensionsMismatch(mat1, mat2) {
    if (mat1.colCount !== mat2.rowCount)
        throw Error("The dimensions of matrices are incompatible for dot product");
}

/**
 * Throws if given matrices are not compatible for cross product
 * Useful for cross products
 *
 * @param {Matrix} mat1 - First matrix to be checked
 * @param {Matrix} mat2 - Second matrix to be checked
 *
 * @throws Error
 * @returns {undefined}
 * @private
 */
function throwIfNotCrossable(mat1, mat2) {
    if (!mat1.is3dVector() || !mat2.is3dVector())
        throw Error("This matrix is not a square matrix.");
}

/**
 * Throws if given matrix is not square
 * Useful for dot products
 *
 * @param {Matrix} mat - Matrix to be checked
 *
 * @throws Error
 * @returns {undefined}
 * @private
 */
function throwIfNotSquare(mat) {
    if (!mat.isSquare())
        throw Error("This matrix is not a square matrix.");
}

module.exports = {
    throwIfDimensionsMismatch,
    throwIfNotCrossable,
    throwIfNotSquare,
};
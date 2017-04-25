class Matrix {
    /**
     * Creates an instance of Matrix.
     * @param {any} dimX row size of the matrix
     * @param {any} dimY column size of the matrix
     * @param {string} [type="tbd"] data type of the matrix
     *
     * @memberOf Matrix
     */
    constructor(dimX, dimY) {
        const buffer = new ArrayBuffer(dimX * dimY * 8);
        this.data = new Float64Array(buffer);
        this.rowCount = dimY;
        this.colCount = dimX;
    }

    /**
     * Returns the value of the given location
     * @param {any} x column index
     * @param {any} y row index
     * @returns {any} value of the given index
     *
     * @memberOf Matrix
     */
    get(x, y) {
        return this.data[this.rowCount * y + x];
    }

    /**
     * Sets the value of the given location
     * @param {any} x column index
     * @param {any} y row index
     * @param {any} entry value to set the given index
     * @returns {void}
     *
     * @memberOf Matrix
     */
    set(x, y, entry) {
        this.data[this.rowCount * y + x] = entry;
    }
}

module.exports = Matrix;

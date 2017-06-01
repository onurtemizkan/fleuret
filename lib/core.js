class Matrix {
    /**
     * Creates an instance of Matrix.
     * @param {any} dimX row size of the matrix
     * @param {any} dimY column size of the matrix
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


    /**
     * Returns transposed view of self
     *
     * @returns {Matrix} Transposed self
     *
     * @memberOf Matrix
     */
    t() {
        const transpose = new Matrix(this.rowCount, this.colCount);
        for (let i = 0; i < this.colCount; i++) {
            for (let j = 0; j < this.rowCount; j++)
                transpose.set(j, i, this.get(i, j));
        }

        return transpose;
    }

    /**
     * Returns dot product of self with given matrix
     *
     * @param {Matrix} other The second matrix
     * @returns {Number} Dot product with `other`
     *
     * @memberof Matrix
     */
    dot(other) {
        if (this.colCount === other.rowCount && this.rowCount === other.colCount) {
            const otherData = other.t().data;

            return this.data.reduce((prev, curr, idx) => prev + curr * otherData[idx], 0);
        }

        throw Error("The dimensions of matrices are incompatible for dot product");
    }
}

module.exports = Matrix;

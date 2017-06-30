const chalk = require("chalk");
const os = require("os");
const { matrixFactory } = require("./utils/factory");

class Matrix {
    /**
     * Creates an instance of Matrix.
     *
     *
     * @param {Number} dimX Row size of the matrix
     * @param {Number} dimY Column size of the matrix
     * @param {String} type  expected C-type of the matrix elements (Defaults to `double`)
     *
     * @memberOf Matrix
     */
    constructor(dimX, dimY, type="double") { // eslint-disable-line space-infix-ops
        this.rowCount = dimY;
        this.colCount = dimX;

        this.data = matrixFactory(this.colCount, this.rowCount, type);
    }

    /**
     * Returns the value of the given location
     *
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
     * Returns values of given row
     *
     * @param {Number} x Row index
     * @returns {Float64Array} A TypedArray containing the values of given row
     *
     * @memberof Matrix
     */
    getRow(x) {
        const begin = this.colCount * x;
        const end = begin + this.rowCount;

        return this.data.slice(begin, end);
    }

    /**
     * Sets the value of the given location
     *
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
     * Returns transpose of self
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


    /**
     * Returns whether self is a 1D vector
     *
     * @returns {boolean} Indicator of vector self
     *
     * @memberof Matrix
     */
    isVector() {
        if (this.colCount === 1 || this.rowCount === 1)
            return true;

        return false;
    }

    /**
     * Returns whether self is 1x1
     *
     * @returns {boolean} Indicator of scalar self
     *
     * @memberof Matrix
     */
    isScalar() {
        if (this.colCount === 1 && this.rowCount === 1)
            return true;

        return false;
    }

    /**
     * Prints the text representation of self to console
     *
     * @returns {void}
     *
     * @memberof Matrix
     */
    print /* istanbul ignore next */ () { // eslint-disable-line space-before-function-paren
        let repr = "";
        for (let i = 0; i < this.rowCount - 1; i++) {
            const row = this.getRow(i);

            repr += `${chalk.gray("[")} ${
                row.reduce((prev, curr, idx) => {
                    prev += `${chalk.blue(curr)}`;
                    if (idx !== this.colCount)
                        prev += ",\t";

                    return prev;
                }, "")
            } ${chalk.gray("]")}${os.EOL}`;
        }

        console.log(repr); // eslint-disable-line no-console
    }
}

module.exports = Matrix;

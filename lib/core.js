const chalk = require("chalk");
const os = require("os");
const { matrixFactory, BYTE_SIZE } = require("./utils/factory");

class Matrix {
    /**
     * Creates an instance of Matrix.
     *
     * @param {Number} dimX Row size of the matrix
     * @param {Number} dimY Column size of the matrix
     * @param {String} type  expected C-type of the matrix elements (Defaults to `double`)
     *
     * @memberOf Matrix
     */
    constructor({ dimX, dimY, type="double", data }) { // eslint-disable-line space-infix-ops
        const Mat = matrixFactory(type);

        if (data) {
            if (Array.isArray(data)) {
                const is2d = Boolean(data[0].length);

                this.data = Mat.from(
                    is2d ? data.reduce((prev, cur) => prev.concat(cur), []) : data
                );

                this.rowCount = data.length;
                this.colCount = data[0].length || 1;
            } else {
                throw Error("Invalid data to construct a Matrix");
            }
        } else {
            const buffer = new ArrayBuffer(dimX * dimY * BYTE_SIZE[type]);

            this.data = new Mat(buffer);
            this.rowCount = dimY;
            this.colCount = dimX;
        }
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
        return this.data[this.colCount * y + x];
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
        const end = begin + this.colCount;

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
        this.data[this.colCount * y + x] = entry;
    }

    /**
     * Returns transpose of self
     *
     * @returns {Matrix} Transposed self
     *
     * @memberOf Matrix
     */
    t() {
        const transpose = new Matrix({ dimX: this.rowCount, dimY: this.colCount });

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
        if (this.colCount === other.rowCount) {
            const otherMat = other.t();
            const mat = new Matrix({
                dimY: this.rowCount,
                dimX: otherMat.colCount,
                type: this.type,
            });

            for (let i = 0; i < this.rowCount; i++) {
                for (let j = 0; j < other.colCount; j++) {

                    const thisRow = this.getRow(i);
                    const otherCol = otherMat.getRow(j);

                    mat.set(
                        i,
                        j,
                        thisRow.reduce((prev, curr, idx) => prev + curr * otherCol[idx], 0)
                    );
                }
            }

            return mat;
        }

        throw Error("The dimensions of matrices are incompatible for dot product");
    }

    /**
     * Returns whether self is a 1D Matrix
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
        for (let i = 0; i < this.rowCount; i++) {
            const row = this.getRow(i);

            repr += `${chalk.gray("[")} ${
                row.reduce((prev, curr, idx) => {
                    prev += `${chalk.blue(curr)}`;
                    if (idx < this.colCount - 1)
                        prev += ",\t";

                    return prev;
                }, "")
            } ${chalk.gray("]")}${os.EOL}`;
        }

        console.log(repr); // eslint-disable-line no-console
    }
}

module.exports = Matrix;

const printer = require("../utils/printer");
const { matrixFactory, BYTE_SIZE } = require("../utils/factory");
const { throwIfDimensionsMismatch, throwIfNotSquare } = require("../utils/throwers");
const identifiers = require("./methods/identifiers");

class Matrix {
    /**
     * Creates an instance of Matrix.
     *
     * @param {Number} dimX - Row size of the matrix
     * @param {Number} dimY - Column size of the matrix
     * @param {String} type - Expected C-type of the matrix elements (Defaults to `double`)
     */
    constructor({ dimX, dimY, type="double", data }) { // eslint-disable-line space-infix-ops
        const Mat = matrixFactory(type);

        this.type = type;

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
     * Returns the value of given location
     *
     * @param {any} x - column index
     * @param {any} y - row index
     * @returns {any} value of given index
     */
    get(x, y) {
        return this.data[this.colCount * y + x];
    }

    /**
     * Returns values of given row
     *
     * @param {Number} x Row index
     * @returns {Float64Array} A TypedArray containing the values of given row
     */
    getRow(x) {
        const begin = this.colCount * x;
        const end = begin + this.colCount;

        return this.data.slice(begin, end);
    }

    /**
     * Sets the value of given location
     *
     * @param {any} x - column index
     * @param {any} y - row index
     * @param {any} entry - value to set given index
     *
     * @returns {void}
     */
    set(x, y, entry) {
        this.data[this.colCount * y + x] = entry;
    }

    /**
     * Returns transposed copy of self
     *
     * @returns {Matrix} Transposed self
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
     * Returns row-major flattened version of self
     *
     * @returns {Matrix} row-major flattened copy of self
     */
    flatten() {
        return new Matrix({
            data: Array.from(this.data),
            type: this.type,
        });
    }

    /**
     * Returns dot product of self with given matrix
     *
     * @param {Matrix} other - The second matrix
     *
     * @returns {Number} Dot product with `other`
     */
    dot(other) {
        throwIfDimensionsMismatch(this, other);

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
                    thisRow.reduce(
                        (prev, curr, idx) => prev + curr * otherCol[idx],
                        0
                    )
                );
            }
        }

        return mat;
    }

    /**
     * Returns the shape of the array as an array of dimensions
     *
     * @returns {array} Tuple of rowCount and colCount
     */
    shape() {
        return [this.rowCount, this.colCount];
    }

    /**
     * Returns lower triangle of the matrix
     *
     * @returns {Matrix} Lower triangle of self
     */
    tril() {
        throwIfNotSquare(this);

        const lower = new Matrix({
            dimX: this.colCount,
            dimY: this.rowCount,
            type: this.type,
        });

        for (let idx = 0; idx < this.rowCount; idx++) {
            const row = this.getRow(idx);

            for (let ndx = 0; ndx <= idx; ndx++)
                lower.set(ndx, idx, row[ndx]);
        }

        return lower;
    }

    /**
     * Returns upper triangle of the matrix
     *
     * @returns {Matrix} Lower triangle of self
     */
    triu() {
        throwIfNotSquare(this);

        const upper = new Matrix({
            dimX: this.colCount,
            dimY: this.rowCount,
            type: this.type,
        });

        for (let idx = 0; idx < this.rowCount; idx++) {
            const row = this.getRow(idx);

            for (let ndx = this.colCount - 1; ndx >= idx; ndx--)
                upper.set(ndx, idx, row[ndx]);
        }

        return upper;
    }

    /**
     * Extract diagonal of self
     *
     * @returns {array} Diagonal array of self
     */
    diag() {
        throwIfNotSquare(this);

        return this.data.filter(
            (_val, idx) => idx % (this.rowCount + 1) === 0
        );
    }

    /**
     * Prints the text representation of self to console
     *
     * @returns {void}
     */
    print() {
        printer(this);
    }
}

Object.assign(Matrix.prototype, identifiers);

module.exports = Matrix;

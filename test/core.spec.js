const { expect } = require("chai");
const path = require("path");

const Matrix = require(path.join(__dirname, "..", "index.js"));

describe("Matrix", () => {
    it("should be constructed correctly", () => {
        const mat = new Matrix(2, 2);

        expect(mat.data).to.be.instanceOf(Float64Array);
        expect(Object.values(mat.data)).to.be.eql([0, 0, 0, 0]);
        expect(mat.rowCount).to.be.equal(2);
        expect(mat.colCount).to.be.equal(2);
    });

    it("should get value of given location", () => {
        const mat = new Matrix(3, 4);
        expect(mat.get(1, 1)).to.be.equal(0);
    });


    it("should set value of given location", () => {
        const mat = new Matrix(3, 4);

        mat.set(1, 1, 20);

        expect(mat.get(1, 1)).to.be.equal(20);
    });

    it("should return a transposed matrix", () => {
        const mat = new Matrix(3, 4);
        mat.set(2, 1, 101);

        const transposed = mat.t();

        expect(transposed.colCount).to.be.equal(4);
        expect(transposed.rowCount).to.be.equal(3);
        expect(transposed.get(1, 2)).to.be.equal(101);
        expect(transposed.get(2, 1)).not.to.be.equal(101);
    });

    it("should make dot product with another matrix", () => {
        const mat = new Matrix(3, 4);
        mat.set(0, 0, 101);

        const mat2 = new Matrix(4, 3);
        mat2.set(0, 0, 10);

        expect(mat.dot(mat2)).to.be.equal(1010);
    });

    it("should not make dot product with a matrix with incompatible dimensions", () => {
        const mat = new Matrix(3, 4);
        mat.set(0, 0, 101);

        const mat2 = new Matrix(4, 4);
        mat2.set(0, 0, 10);

        expect(mat.dot.bind(this, mat2)).to.throw();
    });
});
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
});
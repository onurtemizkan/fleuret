const { expect } = require("chai");
const path = require("path");

const Matrix = require(path.join(__dirname, "../..", "index.js"));

describe("Matrix", () => {
    it("should be constructed correctly", () => {
        const mat = new Matrix({ dimX: 2, dimY: 2 });

        expect(mat.data).to.be.instanceOf(Float64Array);
        expect(Object.values(mat.data)).to.be.eql([0, 0, 0, 0]);
        expect(mat.rowCount).to.be.equal(2);
        expect(mat.colCount).to.be.equal(2);

        const mat2 = new Matrix({ data: [1, 2] });

        expect(mat2.rowCount).to.be.equal(2);
        expect(mat2.colCount).to.be.equal(1);

        try {
            expect(new Matrix({ data: "hola!" })).to.throw();
        } catch (err) {
            expect(err).to.be.eql(new Error("Invalid data to construct a Matrix"));
        }
    });

    describe("get method", () => {
        it("should get value of given location", () => {
            const mat = new Matrix({ dimX: 3, dimY: 4 });
            expect(mat.get(1, 1)).to.be.equal(0);
        });
    });

    describe("getRow method", () => {
        it("should get data of given row", () => {
            const mat0 = new Matrix({ dimX: 3, dimY: 4 });
            expect(mat0.getRow(0)).to.be.eql(new Float64Array([0, 0, 0]));

            const mat1 = new Matrix({ dimX: 2, dimY: 2 });
            mat1.set(0, 0, 1);
            mat1.set(1, 0, 2);
            mat1.set(0, 1, 3);
            mat1.set(1, 1, 4);

            expect(mat1.getRow(0)).to.be.eql(new Float64Array([1, 2]));
            expect(mat1.getRow(1)).to.be.eql(new Float64Array([3, 4]));
        });
    });

    describe("set method", () => {
        it("should set value of given location", () => {
            const mat = new Matrix({ dimX: 3, dimY: 4 });

            mat.set(1, 1, 20);

            expect(mat.get(1, 1)).to.be.equal(20);
        });

        it("should update value of given location", () => {
            const mat = new Matrix({ dimX: 3, dimY: 4 });

            mat.set(1, 1, 20);
            expect(mat.get(1, 1)).to.be.equal(20);

            mat.set(1, 1, 30);
            expect(mat.get(1, 1)).to.be.equal(30);
        });
    });

    describe("t (transpose) method", () => {
        it("should transpose a portrait matrix correctly", () => {
            const mat = new Matrix({ dimX: 3, dimY: 4 });
            mat.set(1, 1, 101);

            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(4);
            expect(transposed.rowCount).to.be.equal(3);
            expect(transposed.get(1, 1)).to.be.equal(101);
            expect(transposed.get(2, 1)).not.to.be.equal(101);
        });

        it("should transpose a landscape matrix correctly", () => {
            const mat = new Matrix({ dimX: 5, dimY: 4 });
            mat.set(2, 1, 101);

            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(4);
            expect(transposed.rowCount).to.be.equal(5);
            expect(transposed.get(1, 2)).to.be.equal(101);
            expect(transposed.get(2, 1)).not.to.be.equal(101);
        });

        it("should transpose a square matrix correctly", () => {
            const mat = new Matrix({ dimX: 5, dimY: 5 });
            mat.set(2, 1, 101);

            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(5);
            expect(transposed.rowCount).to.be.equal(5);
            expect(transposed.get(1, 2)).to.be.equal(101);
            expect(transposed.get(2, 1)).not.to.be.equal(101);
        });

        it("should transpose a col vector correctly", () => {
            const mat = new Matrix({ data: [1, 3] });
            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(2);
            expect(transposed.rowCount).to.be.equal(1);
            expect(transposed.get(0, 0)).to.be.equal(1);
            expect(transposed.get(1, 0)).not.to.be.equal(1);
        });

        it("should transpose a row vector correctly", () => {
            const mat = new Matrix({ data: [[1, 3]] });
            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(1);
            expect(transposed.rowCount).to.be.equal(2);
            expect(transposed.get(0, 0)).to.be.equal(1);
            expect(transposed.get(1, 0)).not.to.be.equal(1);
        });

        it("should leave a scalar as it is", () => {
            const mat = new Matrix({ data: [1] });
            const transposed = mat.t();

            expect(transposed.colCount).to.be.equal(1);
            expect(transposed.rowCount).to.be.equal(1);
            expect(transposed.get(0, 0)).to.be.equal(1);
            expect(transposed).to.be.eql(mat);
        });
    });


    describe("dot method", () => {
        it("should make dot product with another matrix", () => {
            const mat1 = new Matrix({ data: [[1, 2], [3, 4]] });
            const mat2 = new Matrix({ data: [[9, 8], [7, 6]] });
            const mat3 = new Matrix({ data: [[11], [12]] });
            const mat4 = new Matrix({ data: [5] });
            const mat5 = new Matrix({ data: [[9, 8], [2, 1]] });
            const mat6 = new Matrix({ data: [10] });

            expect(mat1.dot(mat2)).to.be.eql(new Matrix({ data: [[23, 55], [20, 48]] }));
            expect(mat1.dot(mat5)).to.be.eql(new Matrix({ data: [[13, 35], [10, 28]] }));
            expect(mat2.dot(mat5)).to.be.eql(new Matrix({ data: [[97, 75], [80, 62]] }));
            expect(mat3.dot(mat4)).to.be.eql(new Matrix({ data: [55, 60] }));
            expect(mat4.dot(mat6)).to.be.eql(new Matrix({ data: [50] }));
        });

        it("should not make dot product with a matrix with incompatible dimensions", () => {
            const mat = new Matrix({ dimX: 3, dimY: 4 });
            mat.set(0, 0, 101);

            const mat2 = new Matrix({ dimX: 4, dimY: 4 });
            mat2.set(0, 0, 10);

            expect(mat.dot.bind(this, mat2)).to.throw();
        });
    });

    describe("isVector method", () => {
        it("should return true if the Matrix is 1 dimensional", () => {
            const matrix = new Matrix({ data: [2, 3] });

            expect(matrix.isVector()).to.be.equal(true);
        });

        it("should return false if the Matrix is 2 dimensional", () => {
            const matrix = new Matrix({ data: [[2, 3], [4, 5]] });

            expect(matrix.isVector()).to.be.equal(false);
        });
    });

    describe("isScalar method", () => {
        it("should return true if the Matrix is 1x1", () => {
            const matrix = new Matrix({ data: [2] });

            expect(matrix.isScalar()).to.be.equal(true);
        });

        it("should return false if the Matrix is 1 dimensional", () => {
            const matrix = new Matrix({ data: [[2, 5]] });

            expect(matrix.isScalar()).to.be.equal(false);
        });

        it("should return false if the Matrix is 2 dimensional", () => {
            const matrix = new Matrix({ data: [[2, 3], [4, 5]] });

            expect(matrix.isScalar()).to.be.equal(false);
        });
    });
});

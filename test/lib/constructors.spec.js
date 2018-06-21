const { expect } = require("chai");
const {
    full,
    ones,
    zeros,
    identity,
    fromArray,
} = require("../../lib/core/constructors");

describe("Matrix / Vector Constructors", () => {
    describe("`full` constructor", () => {
        it("should create a filled matrix correctly", () => {
            const mat = full(2, 3, 3);

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data.every(value => value === 3)).to.be.true;
            expect(mat.data).to.be.instanceOf(Float64Array);
        });


        it("should create a filled and typed matrix correctly", () => {
            const mat = full(2, 4, 9, "uint8_t");

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(4);
            expect(mat.data.every(value => value === 9)).to.be.true;
            expect(mat.isVector()).to.be.false;
            expect(mat.data).to.be.instanceOf(Uint8Array);
        });


        it("should create a filled and typed vector correctly", () => {
            const mat = full(1, 4, 5, "uint16_t");

            expect(mat.colCount).to.be.equal(1);
            expect(mat.rowCount).to.be.equal(4);
            expect(mat.data.every(value => value === 5)).to.be.true;
            expect(mat.isVector()).to.be.true;
            expect(mat.data).to.be.instanceOf(Uint16Array);
        });
    });

    describe("`ones` constructor", () => {
        it("should create a filled ones matrix correctly", () => {
            const mat = ones(2, 3);

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data.every(value => value === 1)).to.be.true;
            expect(mat.data).to.be.instanceOf(Float64Array);
        });

        it("should create a filled and typed ones matrix correctly", () => {
            const mat = ones(2, 3, "uint8_t");

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data.every(value => value === 1)).to.be.true;
            expect(mat.data).to.be.instanceOf(Uint8Array);
        });

        it("should create a filled and typed ones vector correctly", () => {
            const mat = ones(1, 3, "uint16_t");

            expect(mat.colCount).to.be.equal(1);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.true;
            expect(mat.data.every(value => value === 1)).to.be.true;
            expect(mat.data).to.be.instanceOf(Uint16Array);
        });

    });

    describe("`zeros` constructor", () => {
        it("should create a filled zeros matrix correctly", () => {
            const mat = zeros(2, 3);

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data.every(value => value === 0)).to.be.true;
            expect(mat.data).to.be.instanceOf(Float64Array);
        });

        it("should create a filled and typed zeros matrix correctly", () => {
            const mat = zeros(2, 3, "uint8_t");

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data.every(value => value === 0)).to.be.true;
            expect(mat.data).to.be.instanceOf(Uint8Array);
        });

        it("should create a filled and typed zeros vector correctly", () => {
            const mat = zeros(1, 3, "uint16_t");

            expect(mat.colCount).to.be.equal(1);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.true;
            expect(mat.data.every(value => value === 0)).to.be.true;
            expect(mat.data).to.be.instanceOf(Uint16Array);
        });
    });

    describe("`identity` constructor", () => {
        it("should create an identity matrix correctly", () => {
            const mat = identity(3);

            expect(mat.colCount).to.be.equal(3);
            expect(mat.rowCount).to.be.equal(3);
            expect(mat.isVector()).to.be.false;
            expect(mat.data).to.be.instanceof(Float64Array);

            expect(mat.getRow(0).indexOf(1)).to.be.equal(0);
            expect(mat.getRow(1).indexOf(1)).to.be.equal(1);
            expect(mat.getRow(2).indexOf(1)).to.be.equal(2);
        });

        it("should create a typed identity matrix correctly", () => {
            const mat = identity(2, "uint8_t");

            expect(mat.colCount).to.be.equal(2);
            expect(mat.rowCount).to.be.equal(2);
            expect(mat.isVector()).to.be.false;
            expect(mat.data).to.be.instanceof(Uint8Array);

            expect(mat.getRow(0).indexOf(1)).to.be.equal(0);
            expect(mat.getRow(1).indexOf(1)).to.be.equal(1);
        });
    });

    describe("`fromArray` constructor", () => {
        it("should create an array from given JavaScript array", () => {
            const mat = fromArray([[1, 2], [3, 4]]);

            expect(mat.get(0, 0)).to.be.equal(1);
            expect(mat.get(1, 0)).to.be.equal(2);
            expect(mat.get(0, 1)).to.be.equal(3);
            expect(mat.get(1, 1)).to.be.equal(4);
        });
    });
});

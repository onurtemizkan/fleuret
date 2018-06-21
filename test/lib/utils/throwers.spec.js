const { expect } = require("chai");
const {
    throwIfDimensionsMismatch,
    throwIfNotSquare,
} = require("../../../lib/utils/throwers");
const Matrix = require("../../../lib/core/matrix");

describe("Thrower functions", () => {
    describe("`throwIfDimensionsMismatch` function", () => {
        it("should throw error when one of the matrices is scalar", () => {
            const mat1 = new Matrix({ data: [1] });
            const mat2 = new Matrix({ data: [[1, 2], [3, 4]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).to.throw();
        });

        it("should throw error when one of the matrices is a vector, one is not", () => {
            const mat1 = new Matrix({ data: [1, 2] });
            const mat2 = new Matrix({ data: [[1, 2], [3, 4]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).to.throw();
        });

        it("should throw error when both matrices are multidimensional but incompatible - 1", () => {
            const mat1 = new Matrix({ data: [[1, 2, 3], [3, 4, 5], [5, 6, 7]] });
            const mat2 = new Matrix({ data: [[1, 2], [3, 4]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).to.throw();
        });


        it("should throw error when both matrices are multidimensional but incompatible - 2", () => {
            const mat1 = new Matrix({ data: [[1, 3], [3, 5], [5, 7]] });
            const mat2 = new Matrix({ data: [[1, 2, 3], [3, 4, 5], [6, 7, 8]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).to.throw();
        });

        it("should not throw error when both matrices are scalar", () => {
            const mat1 = new Matrix({ data: [1] });
            const mat2 = new Matrix({ data: [8] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).not.to.throw();
        });

        it("should not throw error when matrices are compatible vectors", () => {
            const mat1 = new Matrix({ data: [[1, 2]] });
            const mat2 = new Matrix({ data: [[1], [4]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).not.to.throw();
        });

        it("should not throw error when both matrices are multidimensional and compatible - 1", () => {
            const mat1 = new Matrix({ data: [[1, 3], [3, 5], [5, 7]] });
            const mat2 = new Matrix({ data: [[1, 2, 3], [3, 4, 5]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).not.to.throw();
        });

        it("should not throw error when both matrices are multidimensional and compatible - 2", () => {
            const mat1 = new Matrix({ data: [[1, 3], [3, 5], [5, 7]] });
            const mat2 = new Matrix({ data: [[2, 3], [4, 5]] });

            expect(throwIfDimensionsMismatch.bind(null, mat1, mat2)).not.to.throw();
        });

    });

    describe("`throwIfNotSquare` function", () => {
        it("should not throw error when the matrix is scalar", () => {
            const mat = new Matrix({ data: [1] });

            expect(throwIfNotSquare.bind(null, mat)).not.to.throw();
        });

        it("should not throw error when the matrix is 2x2", () => {
            const mat = new Matrix({ data: [[1, 2], [3, 4]] });

            expect(throwIfNotSquare.bind(null, mat)).not.to.throw();
        });

        it("should not throw error when the matrix is 3x3", () => {
            const mat = new Matrix({ data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] });

            expect(throwIfNotSquare.bind(null, mat)).not.to.throw();
        });

        it("should not throw error when the matrix is a vector", () => {
            const mat = new Matrix({ data: [1, 2] });

            expect(throwIfNotSquare.bind(null, mat)).to.throw();
        });
    });
});
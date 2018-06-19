const { expect } = require("chai");
const { matrixFactory } = require("../../../lib/utils/factory");

describe("matrixFactory", () => {
    it("should return correct TypedArray for given C-type string argument", () => {
        expect(matrixFactory("int8_t")).to.be.eql(Int8Array);
        expect(matrixFactory("uint8_t")).to.be.eql(Uint8Array);
        expect(matrixFactory("int16_t")).to.be.eql(Int16Array);
        expect(matrixFactory("uint16_t")).to.be.eql(Uint16Array);
        expect(matrixFactory("int32_t")).to.be.eql(Int32Array);
        expect(matrixFactory("uint32_t")).to.be.eql(Uint32Array);
        expect(matrixFactory("float")).to.be.eql(Float32Array);
        expect(matrixFactory("double")).to.be.eql(Float64Array);
    });

    it("should return Float64Array when C-type string argument is not given", () => {
        expect(matrixFactory()).to.be.eql(Float64Array);
    });

    it("should return Float64Array when C-type string argument is not valid", () => {
        expect(matrixFactory("holaaaaa")).to.be.eql(Float64Array);
        expect(matrixFactory("123")).to.be.eql(Float64Array);
    });
});
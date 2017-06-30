/* eslint-disable no-magic-numbers */

const BYTE_SIZE = {
    int8_t: 1,
    uint8_t: 1,
    int16_t: 2,
    uint16_t: 2,
    int32_t: 4,
    uint32_t: 4,
    float: 4,
    double: 8,
};


const matrixFactory = (dimX, dimY, type="double") => { // eslint-disable-line space-infix-ops
    const buffer = new ArrayBuffer(dimX * dimY * (BYTE_SIZE[type] || 8));

    let array;

    switch (type) {
    case "int8_t": array = new Int8Array(buffer); break;
    case "uint8_t": array = new Uint8Array(buffer); break;
    case "int16_t": array = new Int16Array(buffer); break;
    case "uint16_t": array = new Uint16Array(buffer); break;
    case "int32_t": array = new Int32Array(buffer); break;
    case "uint32_t": array = new Uint32Array(buffer); break;
    case "float": array = new Float32Array(buffer); break;
    case "double": array = new Float64Array(buffer); break;
    default: array = new Float64Array(buffer);
    }

    return array;
};

module.exports = {
    matrixFactory,
};
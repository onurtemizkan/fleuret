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


const matrixFactory = type => {
    switch (type) {
    case "int8_t": return Int8Array;
    case "uint8_t": return Uint8Array;
    case "int16_t": return Int16Array;
    case "uint16_t": return Uint16Array;
    case "int32_t": return Int32Array;
    case "uint32_t": return Uint32Array;
    case "float": return Float32Array;
    case "double": return Float64Array;
    default: return Float64Array;
    }
};

module.exports = {
    matrixFactory,
    BYTE_SIZE,
};
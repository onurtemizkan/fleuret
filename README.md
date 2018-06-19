# fleuret 🤺

[![Build Status](https://travis-ci.com/onurtemizkan/fleuret.svg?token=ePsbwFqUWWxFFqAzXqqt&branch=master)](https://travis-ci.com/onurtemizkan/fleuret)

`fleuret` is a simple Matrix class for JavaScript.

## Usage

```javascript
import Matrix from "fleuret";

// This will create a new 2x3 matrix of zeros
const mat = new Matrix({ dimX: 2, dimY: 3 });

// Matrix information
console.log(mat.rowCount)  // -> 3
console.log(mat.colCount) // -> 2

// Getter/Setter
console.log(mat.get(1, 1)) // -> 0
mat.set(1, 1, 2) // This will set 2 into matrix's (1, 1)th element
console.log(mat.get(1, 1)) // -> 2
```

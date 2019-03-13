## Modules

<dl>
<dt><a href="#module_constructors">constructors</a></dt>
<dd><p>A module to construct specific Matrices</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Matrix">Matrix</a></dt>
<dd></dd>
</dl>

<a name="module_constructors"></a>

## constructors
A module to construct specific Matrices


* [constructors](#module_constructors)
    * [full(dimX, dimY, value, type)](#exp_module_constructors--full) ⇒ [<code>Matrix</code>](#Matrix) ⏏
    * [ones(dimX, dimY, type)](#exp_module_constructors--ones) ⇒ [<code>Matrix</code>](#Matrix) ⏏
    * [zeros(dimX, dimY, type)](#exp_module_constructors--zeros) ⇒ [<code>Matrix</code>](#Matrix) ⏏
    * [identity(size, type)](#exp_module_constructors--identity) ⇒ [<code>Matrix</code>](#Matrix) ⏏
    * [fromArray(array)](#exp_module_constructors--fromArray) ⇒ [<code>Matrix</code>](#Matrix) ⏏


* * *

<a name="exp_module_constructors--full"></a>

### full(dimX, dimY, value, type) ⇒ [<code>Matrix</code>](#Matrix) ⏏
Creates a matrix filled with given value

**Kind**: Exported function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| value | <code>Number</code> | Value to give all elements of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="exp_module_constructors--ones"></a>

### ones(dimX, dimY, type) ⇒ [<code>Matrix</code>](#Matrix) ⏏
Creates a matrix filled with `1`s

**Kind**: Exported function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="exp_module_constructors--zeros"></a>

### zeros(dimX, dimY, type) ⇒ [<code>Matrix</code>](#Matrix) ⏏
Creates a matrix filled with `0`s

**Kind**: Exported function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="exp_module_constructors--identity"></a>

### identity(size, type) ⇒ [<code>Matrix</code>](#Matrix) ⏏
Creates an identity matrix of given size

**Kind**: Exported function
**Returns**: [<code>Matrix</code>](#Matrix) - Created identity matrix

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Number</code> | Edge size of the square identity matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="exp_module_constructors--fromArray"></a>

### fromArray(array) ⇒ [<code>Matrix</code>](#Matrix) ⏏
Creates a vector or a matrix from given JavaScript array

**Kind**: Exported function
**Returns**: [<code>Matrix</code>](#Matrix) - Created identity matrix

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | JavaScript array to be converted into a matrix or vector |


* * *

<a name="Matrix"></a>

## Matrix
**Kind**: global class

* [Matrix](#Matrix)
    * [new Matrix(dimX, dimY, type)](#new_Matrix_new)
    * [.get(x, y)](#Matrix+get) ⇒ <code>any</code>
    * [.getRow(x)](#Matrix+getRow) ⇒ <code>Float64Array</code>
    * [.set(x, y, entry)](#Matrix+set) ⇒ <code>void</code>
    * [.t()](#Matrix+t) ⇒ [<code>Matrix</code>](#Matrix)
    * [.flatten()](#Matrix+flatten) ⇒ [<code>Matrix</code>](#Matrix)
    * [.dot(other)](#Matrix+dot) ⇒ <code>Number</code>
    * [.shape()](#Matrix+shape) ⇒ <code>array</code>
    * [.tril()](#Matrix+tril) ⇒ [<code>Matrix</code>](#Matrix)
    * [.triu()](#Matrix+triu) ⇒ [<code>Matrix</code>](#Matrix)
    * [.diag()](#Matrix+diag) ⇒ <code>array</code>
    * [.print()](#Matrix+print) ⇒ <code>void</code>
    * [.isVector(mat)](#Matrix+isVector) ⇒ <code>boolean</code>
    * [.is3dVector(mat)](#Matrix+is3dVector) ⇒ <code>boolean</code>
    * [.isScalar(mat)](#Matrix+isScalar) ⇒ <code>boolean</code>
    * [.isSquare(mat)](#Matrix+isSquare) ⇒ <code>boolean</code>
    * [.isIdentity(mat)](#Matrix+isIdentity) ⇒ <code>boolean</code>


* * *

<a name="new_Matrix_new"></a>

### new Matrix(dimX, dimY, type)
Creates an instance of Matrix.


| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements (Defaults to `double`) |


* * *

<a name="Matrix+get"></a>

### matrix.get(x, y) ⇒ <code>any</code>
Returns the value of given location

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>any</code> - value of given index

| Param | Type | Description |
| --- | --- | --- |
| x | <code>any</code> | column index |
| y | <code>any</code> | row index |


* * *

<a name="Matrix+getRow"></a>

### matrix.getRow(x) ⇒ <code>Float64Array</code>
Returns values of given row

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Float64Array</code> - A TypedArray containing the values of given row

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Row index |


* * *

<a name="Matrix+set"></a>

### matrix.set(x, y, entry) ⇒ <code>void</code>
Sets the value of given location

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| x | <code>any</code> | column index |
| y | <code>any</code> | row index |
| entry | <code>any</code> | value to set given index |


* * *

<a name="Matrix+t"></a>

### matrix.t() ⇒ [<code>Matrix</code>](#Matrix)
Returns transposed copy of self

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: [<code>Matrix</code>](#Matrix) - Transposed self

* * *

<a name="Matrix+flatten"></a>

### matrix.flatten() ⇒ [<code>Matrix</code>](#Matrix)
Returns row-major flattened version of self

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: [<code>Matrix</code>](#Matrix) - row-major flattened copy of self

* * *

<a name="Matrix+dot"></a>

### matrix.dot(other) ⇒ <code>Number</code>
Returns dot product of self with given matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>Number</code> - Dot product with `other`

| Param | Type | Description |
| --- | --- | --- |
| other | [<code>Matrix</code>](#Matrix) | The second matrix |


* * *

<a name="Matrix+shape"></a>

### matrix.shape() ⇒ <code>array</code>
Returns the shape of the array as an array of dimensions

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>array</code> - Tuple of rowCount and colCount

* * *

<a name="Matrix+tril"></a>

### matrix.tril() ⇒ [<code>Matrix</code>](#Matrix)
Returns lower triangle of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: [<code>Matrix</code>](#Matrix) - Lower triangle of self

* * *

<a name="Matrix+triu"></a>

### matrix.triu() ⇒ [<code>Matrix</code>](#Matrix)
Returns upper triangle of the matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: [<code>Matrix</code>](#Matrix) - Lower triangle of self

* * *

<a name="Matrix+diag"></a>

### matrix.diag() ⇒ <code>array</code>
Extract diagonal of self

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>array</code> - Diagonal array of self

* * *

<a name="Matrix+print"></a>

### matrix.print() ⇒ <code>void</code>
Prints the text representation of self to console

**Kind**: instance method of [<code>Matrix</code>](#Matrix)

* * *

<a name="Matrix+isVector"></a>

### matrix.isVector(mat) ⇒ <code>boolean</code>
Returns whether the matrix is a Vector

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if the matrix is 1D

| Param | Type | Description |
| --- | --- | --- |
| mat | [<code>Matrix</code>](#Matrix) | Matrix to be checked |


* * *

<a name="Matrix+is3dVector"></a>

### matrix.is3dVector(mat) ⇒ <code>boolean</code>
Returns whether the matrix is a 3D Vector

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if the matrix is a 3D Vector

| Param | Type | Description |
| --- | --- | --- |
| mat | [<code>Matrix</code>](#Matrix) | Matrix to be checked |


* * *

<a name="Matrix+isScalar"></a>

### matrix.isScalar(mat) ⇒ <code>boolean</code>
Returns whether the matrix is 1x1

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if matrix is 1x1

| Param | Type | Description |
| --- | --- | --- |
| mat | [<code>Matrix</code>](#Matrix) | Matrix to be checked |


* * *

<a name="Matrix+isSquare"></a>

### matrix.isSquare(mat) ⇒ <code>boolean</code>
Returns whether the matrix is a square matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if matrix is square

| Param | Type | Description |
| --- | --- | --- |
| mat | [<code>Matrix</code>](#Matrix) | Matrix to be checked |


* * *

<a name="Matrix+isIdentity"></a>

### matrix.isIdentity(mat) ⇒ <code>boolean</code>
Returns whether the matrix is an identity matrix

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if the matrix is an identity matrix

| Param | Type | Description |
| --- | --- | --- |
| mat | [<code>Matrix</code>](#Matrix) | Matrix to be checked |


* * *


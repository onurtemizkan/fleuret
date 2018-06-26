## Classes

<dl>
<dt><a href="#Matrix">Matrix</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#full">full(dimX, dimY, value, type)</a> ⇒ <code><a href="#Matrix">Matrix</a></code></dt>
<dd><p>Creates a matrix filled with given value</p>
</dd>
<dt><a href="#ones">ones(dimX, dimY, type)</a> ⇒ <code><a href="#Matrix">Matrix</a></code></dt>
<dd><p>Creates a matrix filled with <code>1</code>s</p>
</dd>
<dt><a href="#zeros">zeros(dimX, dimY, type)</a> ⇒ <code><a href="#Matrix">Matrix</a></code></dt>
<dd><p>Creates a matrix filled with <code>0</code>s</p>
</dd>
<dt><a href="#identity">identity(size, type)</a> ⇒ <code><a href="#Matrix">Matrix</a></code></dt>
<dd><p>Creates an identity matrix of given size</p>
</dd>
<dt><a href="#fromArray">fromArray(array)</a> ⇒ <code><a href="#Matrix">Matrix</a></code></dt>
<dd><p>Creates a vector or a matrix from given JavaScript array</p>
</dd>
</dl>

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
Returns whether the matrix is 1D

**Kind**: instance method of [<code>Matrix</code>](#Matrix)
**Returns**: <code>boolean</code> - True if the matrix is 1D

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

<a name="full"></a>

## full(dimX, dimY, value, type) ⇒ [<code>Matrix</code>](#Matrix)
Creates a matrix filled with given value

**Kind**: global function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| value | <code>Number</code> | Value to give all elements of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="ones"></a>

## ones(dimX, dimY, type) ⇒ [<code>Matrix</code>](#Matrix)
Creates a matrix filled with `1`s

**Kind**: global function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="zeros"></a>

## zeros(dimX, dimY, type) ⇒ [<code>Matrix</code>](#Matrix)
Creates a matrix filled with `0`s

**Kind**: global function
**Returns**: [<code>Matrix</code>](#Matrix) - Created matrix

| Param | Type | Description |
| --- | --- | --- |
| dimX | <code>Number</code> | Row size of the matrix |
| dimY | <code>Number</code> | Column size of the matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="identity"></a>

## identity(size, type) ⇒ [<code>Matrix</code>](#Matrix)
Creates an identity matrix of given size

**Kind**: global function
**Returns**: [<code>Matrix</code>](#Matrix) - Created identity matrix

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Number</code> | Edge size of the square identity matrix |
| type | <code>String</code> | Expected C-type of the matrix elements |


* * *

<a name="fromArray"></a>

## fromArray(array) ⇒ [<code>Matrix</code>](#Matrix)
Creates a vector or a matrix from given JavaScript array

**Kind**: global function
**Returns**: [<code>Matrix</code>](#Matrix) - Created identity matrix

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | JavaScript array to be converted into a matrix or vector |


* * *


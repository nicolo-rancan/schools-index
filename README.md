# Schools Index

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM](https://nodei.co/npm/schools-index.png?compact=true)](https://npmjs.org/package/schools-index)

##### You can use this package to access to the italian school index.

###### Unofficial package

## Installation

```js
npm i schools-index --save
```

## Usage

### Importing

```js
const Index = require("school-index").SchoolIndex;
```

or

```js
const { SchoolIndex } = require("school-index");
```

### Available functions

#### Get schools without any filter

<br />

##### All schools

```js
const ... = await Index.getAllSchools();
```

#### Fixed amount

```js
const ... = await Index.getAllSchools(number);
```

<br />

#### Get school by his code

```js
const ... = await Index.getSchoolByCode(code);
```

<br />

#### Get schools by his country

##### All schools

```js
const ... = await Index.getSchoolsByRegion(region);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByRegion(region, number);
```

<br />

#### Get schools by his district

##### All schools

```js
const ... = await Index.getSchoolsByDistrict(district);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByDistrict(district, number);
```

<br />

#### Get schools by his city

##### All schools

```js
const ... = await Index.getSchoolsByCity(city);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByCity(city, number);
```

<br />

#### Get schools by his cap

##### All schools

```js
const ... = await Index.getSchoolsByCap(cap);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByCap(cap, number);
```

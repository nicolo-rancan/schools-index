# Schools Index

[![GitHub license](https://img.shields.io/github/license/nicolo-rancan/schools-index)](https://github.com/nicolo-rancan/schools-index/blob/master/LICENSE.md)

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

##### All schools

```js
const ... = await Index.getAllSchools();
```

#### Fixed amount

```js
const ... = await Index.getAllSchools(number);
```

#### Get school by his code

```js
const ... = await Index.getSchoolByCode(code);
```

#### Get schools by his country

##### All schools

```js
const ... = await Index.getSchoolsByRegion(region);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByRegion(region, number);
```

#### Get schools by his district

##### All schools

```js
const ... = await Index.getSchoolsByDistrict(district);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByDistrict(district, number);
```

#### Get schools by his city

##### All schools

```js
const ... = await Index.getSchoolsByCity(city);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByCity(city, number);
```

#### Get schools by his cap

##### All schools

```js
const ... = await Index.getSchoolsByCap(cap);
```

##### Fixed amount

```js
const ... = await Index.getSchoolsByCap(cap, number);
```

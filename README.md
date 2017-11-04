# Roughly.js

[![Greenkeeper badge](https://badges.greenkeeper.io/johnrees/roughly.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/johnrees/roughly.svg?branch=master)](https://travis-ci.org/johnrees/roughly)

Approximate/Fuzzy variable stuff

## API Concept

`npm install roughly`

```javascript

const Roughly = require("roughly")

const x = new Roughly.number({ greaterThan: 10, lessThan: 20 })

x.lessThan(20) // true
x.lessThan(21) // true
x.lt(21) // true

x.greaterThan(15) // undefined
x.gt(10) // true

const y = new Roughly.number({ greaterThan: 3 })

y.gt(2) // true
y.gt(3.1) // undefined
y.lt(3.1) // undefined
y.lt(2) // false

```

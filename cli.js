#!/usr/bin/env node

var ic = require('./App')
ic(process.argv[2])
.then(exif => console.log(exif.image.Model))
.catch(err => console.error(err));

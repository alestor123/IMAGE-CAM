var pify = require('pify'),
exif = require('exif');
module.exports = (image) => pify(exif)({image});
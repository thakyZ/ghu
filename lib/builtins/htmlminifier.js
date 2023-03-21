const minify = require('htmlnano');
const safe = require('htmlnano').presets.ampSafe;
const each = require('../actions/each');

module.exports = options => {
    const settings = Object.assign({}, options);

    return each(obj => {
        obj.content = htmlnano(obj.content, settings, safe)
    });
};

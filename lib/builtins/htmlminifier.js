const htmlnano = require('htmlnano');
const safe = require('htmlnano').presets.ampSafe;
const eachAsync = require('../actions/eachAsync');

module.exports = options => {
    const settings = Object.assign({}, options);

    return eachAsync(async obj => {
        console.log({soup1: obj});
        obj.content = await htmlnano.process(obj.content, settings, safe);
    });
};

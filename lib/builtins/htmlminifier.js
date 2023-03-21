const htmlnano = require('htmlnano');
const safe = require('htmlnano').presets.none;
const {is_string} = require('../util');

module.exports = async (objs, options) => {
    const settings = Object.assign({}, options);

    for (const index in objs) {
        if (Reflect.has(objs, index)) {
            if (objs[index] && is_string(objs[index].content)) {
                objs[index].content = (await htmlnano.process(objs[index].content, settings, safe)).html;
            } else {
                objs[index].content = null;
            }
        }
    }
    return objs;
};

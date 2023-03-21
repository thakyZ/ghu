const {test, assert} = require('scar');
const {htmlminifier} = require('../../../lib/ghu');

test('lib.htmlminifier()', () => {
    assert.equal(typeof htmlminifier, 'function');
    assert.equal(typeof htmlminifier(), 'object');
});

test('lib.htmlminifier() - no objects', async () => {
    const objs = [];

    const val = await htmlminifier(objs);
    console.log({soup4: val});
    assert.deep_equal(val, []);
});

test('lib.htmlminifier() - empty', async () => {
    const content = '';
    const expected = '';
    const objs = [{source: 'a.html', content}];

    const val = await htmlminifier(objs);
    console.log({soup4: val});
    assert.deep_equal(val, [{source: 'a.html', content: expected}]);
});

test('lib.htmlminifier() - whitespace', async () => {
    const content = '<p  >   </p >';
    const expected = '<p> </p>';
    const objs = [{source: 'a.html', content}];

    const val = await htmlminifier(objs);
    console.log({soup4: val});
    assert.deep_equal(val, [{source: 'a.html', content: expected}]);
});

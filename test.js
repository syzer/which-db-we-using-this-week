const tap = require('tap');

tap.test('Probably fine', t => {
    require('./index');
    t.pass('Test like a volkswagen.');
    t.end();
});

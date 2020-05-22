const jqdash = require('../dist/main').default;
const expect = require('chai').expect;


describe('test jq', function () {
    _module = jqdash();

    it('jq is 1.6', async () => {
        const { jq } = await _module
        const p = jq('', '', ['--version']).stdout
        expect(p).to.contains('1.6');
    });

    it('.name is "test"', async () => {
        const { jq } = await _module
        const p = jq('{"name":"test"}', '.name', ['-M']).stdout
        expect(p).to.contains('test');
    });


    it('input is invalid"', async () => {
        const { jq } = await _module
        const p = jq('{"name":', '.name', ['-M']).stderr
        expect(p).to.contains('parse error');
    });
})
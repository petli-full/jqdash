const jq = require('../src/jq').jq;
const expect = require('chai').expect;

async function add(a, b) {
    return Promise.resolve(a + b);
}

describe('test jq', function () {
    it('jq is 1.6', async () => {
        const p = await jq('', '', ['--version'])
        expect(p).to.contains('1.6');
    });

    it('.name is "test"', async () => {
        const p = await jq('{"name":"test"}', '.name', ['-M'])
        expect(p).to.contains('test');
    });


    it('input is invalid"', async () => {
        let error = ''
        try {
            await jq('{"name":', '.name', ['-M'])
        }
        catch (err) {
            error = err
        }
        expect(error).to.contains('parse error');
    });
})
# jqdash

### description
This is a porting of [jq](https://stedolan.github.io/jq/) to javascript+WebAssembly using [emscripten](https://emscripten.org/). The steps on how to do it can be found at [here](https://opensource.com/article/19/4/command-line-playgrounds-webassembly). The goal is to provide jq as a library for javascript applications.

### install
```
npm install jqdash --save
```

### usage
The package exposes the [Module](https://emscripten.org/docs/api_reference/module.html) object of emscripten API. A `jq` method is added to it, and expected to be the only method user will ever need to use.
```
function jq(input: string, query: string, options: string[] | null): Promise<string>;
```
A Promise is returned because the lib loads the `wasm` file asynchronously. After that, the Promise is resolved immediately.

### examples
```
import { jq } from 'jqdash';

// jq --version
jq('', '', ['--version']).then(result => {});

// jq -n now
jq('', 'now', ['-n']).then(result => {});

// echo '{"name":"test"}' | jq .name
jq('{"name":"test"}', '.name').then(result => {});
```

### jq version
1.6
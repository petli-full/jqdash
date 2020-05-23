# jqdash

### description
This is a porting of [jq](https://stedolan.github.io/jq/) to javascript+WebAssembly using [emscripten](https://emscripten.org/). The steps on how to do it can be found at [here](https://opensource.com/article/19/4/command-line-playgrounds-webassembly). The goal is to provide jq as a library for javascript applications.

### install
```
npm install jqdash --save
```

### usage
The package exposes a function that asynchronously load the [Module](https://emscripten.org/docs/api_reference/module.html) object of emscripten API. After loaded, a `jq` method is added to it, and expected to be the only method user will ever need to use.
```
function jq(input: string, query: string, options: string[] | null): {stdout: string, stderr: string};
```

### examples
```
import jqdash from 'jqdash';

// jq --version
jqdash().then((module: any) => {
    const { jq } = module;
    result = jq('', '', ['--version']);
    console.log(result.stdout);
});

// jq -n now
jqdash().then((module: any) => {
    const { jq } = module;
    result = jq('', 'now', ['-n']);
    console.log(result.stdout);
});

// echo '{"name":"test"}' | jq .name
jqdash().then((module: any) => {
    const { jq } = module;
    result = jq('{"name":"test"}', '.name');
    console.log(result.stdout);
});

// load by require
const jqdash = require('jqdash').default;

jqdash.then((module) => {
    const jq = module.jq;
    const jqoutput = jq('null', 'now', ['-M']).stdout;
    ......
}
```

### jq version
1.6
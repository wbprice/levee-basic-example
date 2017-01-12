# levee-basic-example

When running the [Levee Basic Example](https://github.com/krakenjs/levee#basic-usage), the following error gets thrown.

```bash
node index.js
```

Results in:

```bash
Williams-MacBook-Pro:levee-basic-example blaine$ node index.js
/Users/blaine/Documents/node_modules/wreck/lib/index.js:474
    return this._shortcutWrap('GET', uri, options, callback);
                ^

TypeError: this._shortcutWrap is not a function
    at Object.internals.Client.get [as execute] (/Users/blaine/Documents/node_modules/wreck/lib/index.js:474:17)
    at zalgo (/Users/blaine/Documents/node_modules/levee/lib/zalgo.js:28:12)
    at Breaker._run (/Users/blaine/Documents/node_modules/levee/lib/breaker.js:125:13)
    at Breaker.run (/Users/blaine/Documents/node_modules/levee/lib/breaker.js:60:15)
    at Object.<anonymous> (/Users/blaine/Documents/levee-basic-example/index.js:21:9)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
```

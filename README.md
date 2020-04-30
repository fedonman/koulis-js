# koulis.js

Replace your boring console.log with the awesome koulis.log

## Installing

The easiest way to install koulis.js is through npm

```bash
npm install --save koulis-js
```

## Usage

Import koulis.js in your project

```js
import { koulis } from 'koulis-js';
```

Use `koulis.log` for all your logging needs.

```js
koulis.log("Hello world!");
```

Get awesomeness

![](assets/koulis-01.gif)

It has built-in support for logging objects and functions. Running this code

```js
const answer = 42;
const me = {
    name: "fedonman",
    job: "dev",
    github: "https://github.com/fedonman"
};
const add = (a, b) => {
    return a + b
};

koulis.log("This is a number:", answer, ", this is an object:", me, "and this is a function:", add.toString());
```

will result to this

![](assets/koulis-02.gif)

## Author

* **Vyron Vasileiadis** - *fedonman* - [github](https://github.com/fedonman) [website](https://fedonman.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
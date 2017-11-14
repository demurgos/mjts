# Michael Jackson Typescript

Example repo showcasing hybrid module with ESM support (`.mjs`) using Node and Typescript.

The main issue is that it uses the experimental `ESMInterop` TS options.
Other issues can be easily fixed by tooling until properly supported by TS (extension rename,
dual builds, error de-duplication, etc.)

Clone this repo recursively, install the dependencies and use `npm run start:mjs` or `npm run start:cjs`.

**Checkout the package.json scripts**

```
git clone --recursive git://github.com/demurgos/mjts.git
cd mjts
# If you forgot the recursive option:
# git submodule update --init --recursive
npm install
npm run start:mjs
npm run start:cjs
```

## License

[MIT License](./LICENSE.md)

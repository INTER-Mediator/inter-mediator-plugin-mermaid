/*
 node ../node_modules/.bin/jest
 */
let IMParts_Catalog = {}

// Thanks to https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
const fs = require('fs');
eval(fs.readFileSync('./index.js').toString());

test('Object exists, and has fundamental methods.', () => {
  expect(typeof IMParts_Catalog.mermaid).toBe('object')
  expect(typeof IMParts_Catalog.mermaid.instantiate).toBe('function')
  expect(typeof IMParts_Catalog.mermaid.finish).toBe('function')
  }
)

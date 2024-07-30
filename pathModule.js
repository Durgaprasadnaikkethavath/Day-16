console.log(`welcome to "path module" of core module`);

const path = require("path");

let a = path.extname("c\\newFolder\\git\\index.html");
let b = path.basename("c\\newFolder\\git\\index.js");
let c = path.dirname("c\\newFolder\\git\\index.css");

console.log(a, b, c);

console.log(__dirname);
console.log(__filename);
console.log(__dirname, __filename);

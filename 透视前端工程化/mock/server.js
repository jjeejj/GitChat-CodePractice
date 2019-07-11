const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = 8081;
process.argv.forEach((arg, index, arr) => {
    if (arg === '--port') {
        port = arr[index+1];
        return;
    };
});

module.exports = app.listen(port, () => {
    console.log("Mock Server listening on http://localhost:" + port);
});
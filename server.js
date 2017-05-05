let express = require('express');
let app = express();
let path = require('path');
let staticPath = path.resolve(__dirname, 'dist');


app.use(express.static(staticPath));

console.log(process.env.PORT);

app.listen(process.env.PORT || 12345);

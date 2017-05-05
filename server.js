let express = require('express');
let app = express();
let path = require('path');
let staticPath = path.resolve(__dirname, 'dist');

app.use(express.static(staticPath));
app.listen(process.env.PORT || 12345);

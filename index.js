const express = require('express');
const helmet = require('helmet')

const app = express();

app.use(helmet());

app.use('', express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});

const express = require('express');
const path = require('path');

const routes = require('./routes');
const confing = require('./config/config.json')[process.env.NODE_ENV || 'development'];
const initDataBase = require('./config/database');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);


initDataBase(confing.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(confing.PORT, console.log.bind(console, `Application is running on http://localhost:${confing.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed:', err);
    })

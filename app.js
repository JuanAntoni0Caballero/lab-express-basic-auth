require('dotenv/config');

require('./db');

const express = require('express');

const hbs = require('hbs');

const app = express();

require('./config')(app);
require('./config/session-config')(app)



app.locals.title = `Generated with Ironlauncher`




const index = require('./routes/index.routes')
app.use('/', index);



const auth = require('./routes/auth.routes')
app.use('/', auth)

const user = require('./routes/user.routes')
app.use('/', user)





require('./error-handling')(app)

module.exports = app;


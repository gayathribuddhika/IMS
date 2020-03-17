const express = require('express');
const app= express ();
const cors = require('cors');

app.use(express.json());

require('./models/db');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const port = 8085;
app.listen(port, () => {
    console.log('server started on port ' + port);
});
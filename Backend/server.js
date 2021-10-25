const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/db');

const contact = require('./routes/contact');
const login = require('./routes/login');
const user = require('./routes/user');
const aboutus = require('./routes/department_list');
const store = require('./routes/stock');
const labItem1 = require('./routes/lab1_item');

app.use('/', contact);
app.use('/', login);
app.use('/', user);
app.use('/', aboutus);
app.use('/', store);
app.use('/lab', labItem1);

// const labItem1 = require('./routes/lab_items');
// const labItem2 = require('./routes/lab_items');
// const labItem3 = require('./routes/lab_items');
// const labItem4 = require('./routes/lab_items');
// const labItem5 = require('./routes/lab_items');

// app.use('/lab', labItem1);
// app.use('/lab', labItem2);
// app.use('/lab', labItem3);
// app.use('/lab', labItem4);
// app.use('/lab', labItem5);

const port = 8085;
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});
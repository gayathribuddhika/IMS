const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./config/db');

const contactRouter = require('./routes/contact');
app.use('/', contactRouter);

const loginRouter = require('./routes/login');
app.use('/', loginRouter);

const userRouter = require('./routes/user');
app.use('/', userRouter);

const labItem1 = require('./routes/lab_items');
const labItem2 = require('./routes/lab_items');
const labItem3 = require('./routes/lab_items');
const labItem4 = require('./routes/lab_items');
const labItem5 = require('./routes/lab_items');

app.use('/lab', labItem1);
app.use('/lab', labItem2);
app.use('/lab', labItem3);
app.use('/lab', labItem4);
app.use('/lab', labItem5);

const store = require('./routes/stock');
app.use('/', store);

const aboutusRouter = require('./routes/department_list');
app.use('/', aboutusRouter);

const port = 8085;
app.listen(port, () => {
    console.log('Server started on http://localhost:' + port);
});
const express = require('express');
const app = express();
app.use(express.json());

const router = require('./Routes/student.routes');

app.use('/api', router);

app.listen(5000, () => { console.log('running...'); });



#commit

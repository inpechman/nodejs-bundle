const express = require('express');
const path = require('path');
const teamRouter = require('./routes/members');
const bodyParser = require('body-parser');

const app = express();
let data = {
    list:['item1','item2','item3','item4'],
    moreData: {
        a:'AA',
        b: 'BB'
    }
};

// const apiRouter = express.Router();
// app.use('/api/v1',apiRouter);
// apiRouter.get('/', (req, res)=>{
//     res.send(data);
//     console.log('data sent ', data)
// });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/v1/team', teamRouter);

const port = process.env.PORT || 5000;
app.listen(port);

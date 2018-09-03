const express = require('express');
const path = require('path');

const app = express();
let data = {
    list:['item1','item2','item3','item4'],
    moreData: {
        a:'AA',
        b: 'BB'
    }
};

const apiRouter = express.Router();
app.use('/api/v1',apiRouter);
apiRouter.get('/', (req, res)=>{
    res.send(data);
    console.log('data sent ', data)
});

const port = process.env.PORT || 5000;
app.listen(port);

/**
 * Created by ks on 18/08/17.
 */

import express from 'express';
import morgan from 'morgan';

const server = express();

server.use(morgan('combined'));


server.all('/', (req,res) => {
    res.send('Hello');
});


server.listen(9000);

export default server;




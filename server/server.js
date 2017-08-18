/**
 * Created by ks on 18/08/17.
 */

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.all('/', (req,res) => {
    console.log(req.body);
    res.status(200).send('');
});


server.listen(9000);

export default server;




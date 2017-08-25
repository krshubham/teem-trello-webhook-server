/**
 * Created by ks on 18/08/17.
 */

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import webhookHandler from '../services/webhook-handler';
import path from 'path';

const server = express();

server.use(express.static(path.join(__dirname,'../../public')));
server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/test/:id', (req,res) => {
    res.sendFile(path.join(__dirname,'../../public/test.html'));
});
server.use('/', webhookHandler);


server.listen(9000);

export default server;




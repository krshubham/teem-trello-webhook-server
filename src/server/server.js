/**
 * Created by ks on 18/08/17.
 */

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import webhookHandler from '../services/webhook-handler';

const server = express();

server.use(morgan('combined'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use('/', webhookHandler);


server.listen(9000);

export default server;




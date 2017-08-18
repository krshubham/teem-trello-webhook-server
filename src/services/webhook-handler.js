/**
 * Created by ks on 18/08/17.
 */

import express from 'express';

const router = express.Router();

router.head('/',sendBlankString);
router.post('/',getWebhookType);

/**
 * This method hndles the request when the first time a webhook is created.
 * The webhook sends a HEAD method request and if receives 200 then the webhook is created successfully.
 * @param {HTTPRequest} req
 * @param {HTTPResponse} res
 */
function sendBlankString(req,res){
    res.status(200).send('');
}

function getWebhookType(req,res){
    let webhookData = req.body;
    console.log(webhookData);
};


export  default router;

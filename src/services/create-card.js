/**
 * Created by ks on 18/08/17.
 */
import request from 'request';
const phantom = require('phantom');

/**
 * This method opens the swellRT model and then adds the new card in the model
 * @param {HTMLpostbody} requestBody
 * @param {HTTPResponseObject} res
 */

request.defaults({jar: true});

// async function createCard(requestBody, res) {
//     const instance = await phantom.create();
//     const page = await instance.createPage();
//     const status = await page.open('https://app.teem.works/teems/cHJvdG90eXBlLnAycHZhbHVlLmV1L3MrTDlFdnBUV0FUWUE');
//     console.log(status)
// }

function createCard(requestBody, res){
    console.log('Hello');
}


export default createCard;

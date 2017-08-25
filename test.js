// const webpage = require('webpage');
//
// const page = webpage.create();
//
//
// page.onConsoleMessage = function (msg) {
//     console.log(msg);
// };
//
//
// page.open('http://localhost:9000/test', function (status) {
//     console.log(status);
//     page.evaluate(function () {
//         setTimeout(runFunction,5000);
//         function runFunction() {
//             SwellRT.ready(function () {
//                 console.log('SwellRT is ready now');
//                 SwellRT.startSession("https://swellrt.teem.works", SwellRT.user.ANONYMOUS, "",
//                     function (session) {
//                         SwellRT.open({id:"prototype.p2pvalue.eu/s+L9EvpTWATYA"}, function(model){
//                             console.log('hello');
// 	                        console.log(model.error);
//                         });
//                     });
//             });
//         }
//     });
//
// });


var webdriver = require('selenium-webdriver');
By = webdriver.By;

until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://localhost:9000/test');

var a = driver.wait(until.titleIs('Ready'));

a.then(runScript)
    .catch(err => console.log(err));
function runScript() {
    return driver.executeScript(function () {
        SwellRT.open({
            id: 'prototype.p2pvalue.eu/s+L9EvpTWATYA'
        }, function (model) {
            return model;
        });
    })
        .then(data => {console.log(data)})
        .catch(err => console.log(err));
}

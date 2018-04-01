// const scraber = require('../help/scraber');
const jsdom = require('jsdom')
const { JSDOM } = jsdom  
const request = require('request')
const twilio = require('twilio');
const sid = 'ACfc64229b1f785fcab95e4d97c05f07a2';
const authToken = 'e72bb59749a2d8c7668cd1d44372ebca';
const phonenumber = '+12672456091';


/**
* A basic Hello World function
* @param {string} url Who you're saying hello to
* @param {any} price
* @returns {any}
*/
module.exports = (url, price, context, callback) => {
    request(url, function (error, response, body) {
    const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
    let prices = []
    let underPrices = []
    for (let tag of tags) {
        prices.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
        if (parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')) <= parseInt(price)) {
            underPrices.push(tag.childNodes)  
        }

    }
    
    const average = prices.reduce((sum, num) => sum + num, 0) / prices.length;
    callback(null, {average, price, underPrices})
});
}

let smsclient = new twilio(sid,authToken);
function sendmsg (body,to){
	    smsclient.messages.create({
		        body: 'Are you coming to school today',
		        to: '+16095800390',
		        from: phonenumber
	    },function(message){
		        console.log(message);
		        }); 
}

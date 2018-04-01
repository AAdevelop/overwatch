// const scraber = require('../help/scraber');
const jsdom = require('jsdom')
const { JSDOM } = jsdom  
const request = require('request')
// const twilio = require('twilio');
// const sid = 'ACfc64229b1f785fcab95e4d97c05f07a2';
// const authToken = 'e72bb59749a2d8c7668cd1d44372ebca';
// const phonenumber = '+12672456091';


/**
* A basic Hello World function
* @param {string} itemString Who you're saying hello to
* @param {any} price
* @returns {any}
*/
module.exports = (itemString, price, context, callback) => {

    request(url, function (error, response, body) {
    const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
    const items = new JSDOM(body).window.document.getElementById('ListViewInner')
    console.log(items);
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
let itemString = 'Nintendo Switch Console'
let min = 300;
let max = 800
request({ headers: {
	'Authorization':'Bearer v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVXf2wTVRxf222G4FATGIxssdz8FfCu7653be+kNWXdskXYStstsgXm69277bb2rt67spX4x5iRGCFOAROEQBpj4jSaOIkICTEBMfoHCREUfxDjr4AkEhMCcZka9O5aRjcJTJhAYv9p3vd93/d9Pp/v9/vePTBUOWfppuZN41WOu5z5ITDkdDjouWBOZcWyeS7n4ooyUOLgyA89MFQ+7Dq7HMN0KiPEEM5oKkbuwXRKxYJtDBJZXRU0iBUsqDCNsGCIQjy8aqXAUEDI6JqhiVqKcLdEggQHeE4KyJKPQYzMMJJpVS/HTGhBAoo8En0+L6JRgEe0OY1xFrWo2ICqESQYQAdIwJKATgBWYHkBsBTH8Z2EuwPpWNFU04UCRMhGK9hr9RKo10YKMUa6YQYhQi3hpnhbuCXS2JpY7imJFSrKEDegkcVTRw2ahNwdMJVF194G295CPCuKCGPCEyrsMDWoEL4M5gbg20qLYjIpI46W/Kws8155VqRs0vQ0NK6Nw7IoEinbrgJSDcXIXU9RU41kHxKN4qjVDNEScVt/q7MwpcgK0oNE44rwmnA0SoRiitQ7AKFKNkOxP9pORmMRkvcH/H4aQkTyTIDhkAiK2xRiFUWetk+DpkqKJRl2t2rGCmRiRtOV8ZYoYzq1qW16WDYsPKV+vkkFuU4rpYUcZo1e1coqSpsyuO3h9fWfXG0YupLMGmgywvQJWyCzZzIZRSKmT9qVWCyeQRwkeg0jI3g8AwMD1ICX0vQeDwMA7Xly1cq42IvSkCj4Wr1u+ivXX0AqNhURmSuxIhi5jIll0KxUE4DaQ4QYv4/3c0Xdp8IKTbf+w1DC2TO1H2arPzivn0WA8fkYBoo0z81Gf4SKJeqxcKAkzJFpqPcjI5OCIiJFs86yaaQrkuDlZMYbkBEp+XiZZHlZJpOc5CNpGSGAUDIp8oH/T5vMtNDjopZBUS2liLnZKvfZKXWvLkWhbuTiKJUyDTOt+auSxBbJW0PP6vWZUrRiYDMIzCiUVdmUqKU9GjSPNMvUbaO+Kd6KeRfeUUk1CRaYKlLhEqNsuhReL1I6wlpWN+9vqs061RNaP1LNLjF0LZVCegd9U0rM6nl+O87yq7ISU4opY/edxuxfHZI3WNnQuP2cy4cdiVLeNMcwHBegWfamuDXYWU3kbtWRNdO0NmvYQNJ/8PHhmfoOCpXZP3rY8T4YdoyZTyngAQ/S9WBJpau93HX3YqwYiFKgTGGlRzW/73VE9aNcBiq6s9LRVfvum90lL6/8WrBo8u01x0XPLXmIgdorMxX0PQur6ABgAQ1YlgdsJ6i/MltOV5fP3/EHxe06UeHfzdQczB88exYuUl8HVZNODkdFmVkSZf1dj4/s25LfKquemnUNuYmaU1/UXIz9yY6eqVjY992e/bXBnZd+73pkXsfR9ILvR1o/2Rce9UQWDE6cofKHR5Tq40vrt7/QfezRyrBr/xv7Ry8d2Z56tXf3y3UTzgtPHXNu/AVsPefMr+9z/TV67ujDGyKN7Wt3/vRB18H6bRePnf6h/cvDI+fGvk4rKw5tPL4hOt7zYnWkLrl691uHjtY+duC+C/eef+WJyJKP3nbt/VYOVJ1ec7L1wETnz4d2tCQj1eMXx8Z7t75zfmzZqcOxb15qOvn52s2xxEODe7d1ts+79Gzf5rm/3f/r8qZnat/7+KsPGz6bHziybgu35/nVr1X9WFf99NLnPo017tpyYk1dIX1/A2lKcgoTDwAA',
    'Content-Type':'application/json',
    'X-EBAY-C-ENDUSERCTX':'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>',
    }, url: `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${itemString}&limit=20&filter=price:[${min}..${max}],priceCurrency:USD`, 
      method:'GET'}, function(err,res,body){
       console.log(body);
    });

// let smsclient = new twilio(sid,authToken);
// function sendmsg (body,to){
// 	    smsclient.messages.create({
// 		        body: 'Are you coming to school today',
// 		        to: '+16095800390',
// 		        from: phonenumber
// 	    },function(message){
// 		        console.log(message);
// 		        }); 
// }

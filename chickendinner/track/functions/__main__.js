// const scraber = require('../help/scraber');
const jsdom = require('jsdom')
const { JSDOM } = jsdom  
const request = require('request')

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

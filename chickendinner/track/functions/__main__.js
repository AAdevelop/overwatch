// const scraber = require('../help/scraber');
const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom  
const request = require('request')

/**
* A basic Hello World function
* @param {string} url Who you're saying hello to
* @returns {string}
*/
module.exports = (url, context, callback) => {
    // request(url, function (error, response, body) {
    // const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
    // let newArr = []
    // for (let tag of tags) {
    //     newArr.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
    // }
    console.log(typeof url)
    // callback(null, url)
// });
}

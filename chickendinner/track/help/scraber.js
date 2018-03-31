var request = require('request')
const jsdom = require('jsdom')
const { JSDOM } = jsdom  

// module.exports = url => {
    // const html = await axios.get(url)
    // const dom = new JSDOM(html.data)
    // const tags = dom.window.document.getElementsByClassName("lvprice")
    // let newArr = []
    // for (let tag of tags) {
    //     newArr.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
    // }
//     request('url', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body.data); // Print the HTML for the Google homepage.
//     });
// }
request('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR12.TRC2.A0.H0.Xxps+13.TRS0&_nkw=xps+13&_sacat=0', function (error, response, body) {
    console.log('error:', error);
    const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
    let newArr = []
    for (let tag of tags) {
        newArr.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
    }
    return newArr[0]
    });
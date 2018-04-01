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
// module.exports = (itemString, price, context, callback) => {
    // get ebay item:
 

//     request(url, function (error, response, body) {
//     const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
//     const items = new JSDOM(body).window.document.getElementById('ListViewInner')
//     console.log(items);
//     let prices = []
//     let underPrices = []
//     for (let tag of tags) {
//         prices.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
//         if (parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')) <= parseInt(price)) {
//             underPrices.push(tag.childNodes)  
//         }

//     }
    
//     const average = prices.reduce((sum, num) => sum + num, 0) / prices.length;

//     callback(null, {average, price, underPrices})
// });
// }


request({ headers: {
    'Authorization':'Bearer v^1.1#i^1#f^0#p^3#r^0#I^3#t^H4sIAAAAAAAAAOVXe2wURRzu9QFpgAKBIAqSY2lAafZudu/29nblTq8t0Aq0pddSqCF1dne23bK3e9nZbXskmHJR1PBI1cRESbQhSgJihCgIiQ+MVKIh/gESfOADHwHRGFATjYBx9vq61gBtIaaJ989mZn6v7/t9MzcDOicULt5SseWPKZ6Jud2doDPX42EmgcIJBSVFebl3FeSALANPd2dxZ34678ISDBN6UqxFOGkaGHk7ErqBxcxkhHIsQzQh1rBowATCoi2L8diqlSLrA2LSMm1TNnXKW1keoYICw6qqygcELsCxPEdmjf6YdWaEYkFYCMtQ5mFIDcjIXcfYQZUGtqFhu+tMmAZBGjB1gBVZTmQYX4gJNlLeNcjCmmkQEx+goplyxYyvlVXrjUuFGCPLJkGoaGVsWbw6Vlm+tKpuiT8rVrSPh7gNbQcPHZWZCvKugbqDbpwGZ6zFuCPLCGPKH+3NMDSoGOsvZgzl91ItS0owJISkYIhXUIC5LVQuM60EtG9chzujKbSaMRWRYWt26maMEjakViTbfaMqEqKy3Ot+VjtQ11QNWRFqaWlsXX18aS3ljdfUWGabpiDFRcowXDAYZkEoREUJo8iQkakmoQUVDaO+ZL0R+6gelq3MNBTNJQ57q0y7FJHK0XB+mCx+iFG1UW3FVNutKtsu2M8jCDW6je3tpGO3GG5vUYKQ4c0Mb96FflkMCuF2CYOVWaiEQrwMEODVkDpEGO5eH6M4om5/YjU1frcWJMEUnYDWBmQndSgjWib0OglkaYoY4FQ2EFYRrYQElQ4KqkpLnBKiGRUhgJAkyUL4/6YR27Y0ybHRgE6GL2SARqi4bCZRjalrcooabpI5e/pU0YEjVIttJ0W/v7293dce8JlWs58FgPGvXbUyLregBKQGbLWbG9NaRh8yIl5YE+1UklTTQeRHkhvNVDRgKTXQslOlToqM40jXyadfwkMqjA6fvQ5U7EIdXyBdf0wCwKTmcxXuk82E34RkR7tTTZmKvSMx8ktOiuRXkOWzEFRMQ0+N3K/ZQdju9R6ZEybd8PVuRgJjIKO718cSYBQ+mtFGtGxaqVHCHOo8Ch8oy6Zj2GNJ1+c6Cg/V0VVN193tOpaEWe6jKdOAesrWZDyWlFknMqEXa80t9mjjkDlyjBN/GdpQNwfldEubPZZMVirja7PXakpLO4QGXQHlDTX1dLx0La3yYT7ACKxKI44PhIWBP6qxoS5Hbf8R6vx07iMjRs7JPCsJgkSHWImngxLP0pBjWRohgedVDnIMG7gl3GW6RkRflxpv53uFiW2k3Bo0ctUaX6Bc3fbLVpWgQIdVoNDBMKPQUAjwtIxCwkgh+697W/nXZdU/9MUYzcn8mLTnbZD2HCGPTsADmikB907Iq8/Pm0xhzUY+DA1FMjt8GlR95HQyyIPIQr4NKJWEmpU7wfPQnIv3X816q3avB7MHXquFecykrKcrmDu4UsBMvWMKEwZBwACW5RimESwYXM1nZuXPPNujvzNn67U3YEPXqdPhqyvYyTN/A1MGjDyegpz8tCen1ZN4f/eBM/P8pVveO/fSjG+n4ctTS7kVm546eWLR4fPfr57W8MHDC/aWn8Nfvzn3UknPzoaDF/cveKDs6Uf3VBznP3tlWSP3zAtfrW2av2J99Rnn2i/7ZhjFqWffagXar/OPzIx/voPfuHHd8vWHjoLOLw6kn191+lTX63sO/ri7+uwx/67pjxUVPXc8Ii16fM/df6nbO3Z/M6t4ZcOnL27fvHzTydf2X410bq3ozn2VPr/th5O7tk3yLJz34Yljwp2/P/nl4q7Cn70/LdzcdL7p3Y89rfnpy8e471KXug7tqO2p7il+eWd91YUrRXtrC/+ceoWd2DF351FdK4kvOTv9wcO77rvn77bZH+37JEd7wkqbvW38B6Ly7d5FEAAA',
    'Content-Type':'application/json',
    'X-EBAY-C-ENDUSERCTX':'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
    }, url: `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=nintendo+switch&filter=buyingOptions:{FIXED_PRICE}&filter=price:[100]&limit=50`, 
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

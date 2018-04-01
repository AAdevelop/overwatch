// const scraber = require('../help/scraber');
const jsdom = require('jsdom')
const { JSDOM } = jsdom  
const request = require('request')
const sms = require('../help/scraber');

/**
* A basic Hello World function
* @param {string} itemString Who you're saying hello to
* @param {any} price
* @returns {any}
*/

module.exports = (itemString, price, context, callback) => {
    request({ headers: {
        'Authorization':'Bearer v^1.1#i^1#r^0#I^3#p^1#f^0#t^H4sIAAAAAAAAAOVXf2wURRTu9ZdpoNVEBWwgHltNFLJ7s3u7e3crd+mVFqlCW7grQkXq3O4cXbq3e9mZpb0QpDbakCgYDcRGE4GIMUDUtqAhBiUNEogWf8YgxD+0YoK0IdFANGrQ3e1RrpVAhQok3j+XefPmzfd9782bHdBRXDKna2HXr6We2/K3d4COfI+HnQJKiovmlhXklxflgRwHz/aO+zoKOwtOz8MwpaWlpQinDR0jb3tK07HkGsOUZeqSAbGKJR2mEJaILMWiixdJHAOktGkQQzY0yltbHaZCMCgIiaDi50MChBxrW/WLMeNGmBIA8PMBGUDE+1leFux5jC1Uq2MCdRKmOMAGacDTgI0DURL8EicyXJBvorzLkIlVQ7ddGEBFXLiSu9bMwXplqBBjZBI7CBWpjS6I1Udrq2vq4vN8ObEiWR1iBBILjx3NNxTkXQY1C115G+x6SzFLlhHGlC8yssPYoFL0IphrgO9KLSoBkVf4BIIBkORkeVKkXGCYKUiujMOxqAqddF0lpBOVZK6mqK1GYg2SSXZUZ4eorfY6f0ssqKlJFZlhqqYquiLa0EBFlqpKSxuEOr0Qyq0NjXTD0mo6FAgGAiyEiA5xQU5AMshuMxIrK/K4feYbuqI6kmFvnUGqkI0ZjVeGz1HGdqrX681okjh4cv2CFxUMiE1OSkdyaJEW3ckqStkyeN3h1fUfXU2IqSYsgkYjjJ9wBQpTMJ1WFWr8pFuJ2eJpx2GqhZC05PO1tbUxbX7GMFf7OABY3/LFi2JyC0pByvV1zrrjr159Aa26VGRkr8SqRDJpG0u7Xak2AH01FbGlCAWErO5jYUXGW/9hyOHsG3seJut8oCTwy6wQSMqQAygwKa0mki1Rn4MDJWCGTkGzFZG0BmVEy3adWSlkqorkF5KcP5hEtCKGkjQfSibphKCINJtECCCUSMih4P/nmEy00GOykUYNhqbKmUkq90kqdb+pNECTZGJI02zDRGv+siSxQ/KG0HPO+oQpOjGwHQSmVcapbEY2Uj4D2i3NMTW7qK+Lt2rfhbdUUm2CI0xVZeQSY1y6DF4rMybChmXa9zdT73T1uNGKdPuUENPQNGQuY69Licns5zell1+WlayptozNtxqzf9Ukr7GyIbnpnAs7PY1jeLMCxwmiIALxurjNd7Maz9ygljXhtC40MEHKf/Dx4Rv7EIrkuT+20/Mu6PT02m8p4AP3sxVgdnFBY2HB1HKsEsSoMMlgdbVuf9+biGlFmTRUzfxiz+Mze3Y15zy9tj8BZow+vkoK2Ck5LzEw89JMEXv79FI2CHjAAlHwc2ITqLg0W8hOK7zLP7Rt7+nnmvrfqAk3V8Z+ea+y58BKUDrq5PEU5dk1kbegb/AMP+2lj83hksc+mtr3W5X46cFZsHDnowNF/XP/ahr07L634rWS56nO6PqT+Zv3zHj4kYG64uoNr3w/4+WdlXvBxuoTnd90f/dQKvK67+jG+MFNlW+2r9u//sTJvC2JE8+sOxa/sOn4Fy/O1raueJY7e/7H8ubKLu7buwf6dxzbJqtak/rq2qHfVz0wxHR3fbJv99tlp46XWW/dcXTKV18aPy8/c7h086ED5V0buvih81rPobJ7nhTfGR6Y9dMHRwf+3Loy/8Kq4f6K7nPx/VW9R44/9X4ftAI7rMXUscPTy+ciy/tCzZk7HxxuPDvnh8+4r/ue7l3yx8E1g4PTi8+dGjp3ZN+HjSs/37Vny+mR9P0NaJDjWxQPAAA=',
        'Content-Type':'application/json',
        'X-EBAY-C-ENDUSERCTX':'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>',
        }, url: `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${itemString}&limit=70`, 
          method:'GET'}, function(err,res,body){
            const json = JSON.parse(body).itemSummaries
             let items = [];
              for(let i = 0; i < json.length;i++){
                  let price = json[i].price.value;
                  let url = json[i].itemWebUrl;
                  let temp = {
                      'price':price,
                      'url':url
                  }
                  items.push(temp);
              }
            
            const average = items.reduce((sum, item) => {
                return sum + parseInt(item.price)
            }, 0) / items.length;
            let underPrice = [];

            for (let item of items) {
                if (parseInt(item.price) <= price) {
                    underPrice.push(item);
                }
            }

           	   sms.sendmsg("itemString" + " " underPrice.url + "  " + "for" + " " underPrice.price)

              callback(null, {average, underPrice, itemString});
        });


    // request(url, function (error, response, body) {
    // const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice")
    // const items = new JSDOM(body).window.document.getElementById('ListViewInner')
    // console.log(items);
    // let prices = []
    // let underPrices = []
    // for (let tag of tags) {
    //     prices.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
    //     if (parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')) <= parseInt(price)) {
    //         underPrices.push(tag.cshildNodes)  
    //     }
    // }
    
    // const average = prices.reduce((sum, num) => sum + num, 0) / prices.length;
    // console.log("hello test");
    // let min = 300;
    // request({ headers: {
	// 'Authorization':'Bearer v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVXf2wTVRxf222G4FATGIxssdz8FfCu7653be+kNWXdskXYStstsgXm69277bb2rt67spX4x5iRGCFOAROEQBpj4jSaOIkICTEBMfoHCREUfxDjr4AkEhMCcZka9O5aRjcJTJhAYv9p3vd93/d9Pp/v9/vePTBUOWfppuZN41WOu5z5ITDkdDjouWBOZcWyeS7n4ooyUOLgyA89MFQ+7Dq7HMN0KiPEEM5oKkbuwXRKxYJtDBJZXRU0iBUsqDCNsGCIQjy8aqXAUEDI6JqhiVqKcLdEggQHeE4KyJKPQYzMMJJpVS/HTGhBAoo8En0+L6JRgEe0OY1xFrWo2ICqESQYQAdIwJKATgBWYHkBsBTH8Z2EuwPpWNFU04UCRMhGK9hr9RKo10YKMUa6YQYhQi3hpnhbuCXS2JpY7imJFSrKEDegkcVTRw2ahNwdMJVF194G295CPCuKCGPCEyrsMDWoEL4M5gbg20qLYjIpI46W/Kws8155VqRs0vQ0NK6Nw7IoEinbrgJSDcXIXU9RU41kHxKN4qjVDNEScVt/q7MwpcgK0oNE44rwmnA0SoRiitQ7AKFKNkOxP9pORmMRkvcH/H4aQkTyTIDhkAiK2xRiFUWetk+DpkqKJRl2t2rGCmRiRtOV8ZYoYzq1qW16WDYsPKV+vkkFuU4rpYUcZo1e1coqSpsyuO3h9fWfXG0YupLMGmgywvQJWyCzZzIZRSKmT9qVWCyeQRwkeg0jI3g8AwMD1ICX0vQeDwMA7Xly1cq42IvSkCj4Wr1u+ivXX0AqNhURmSuxIhi5jIll0KxUE4DaQ4QYv4/3c0Xdp8IKTbf+w1DC2TO1H2arPzivn0WA8fkYBoo0z81Gf4SKJeqxcKAkzJFpqPcjI5OCIiJFs86yaaQrkuDlZMYbkBEp+XiZZHlZJpOc5CNpGSGAUDIp8oH/T5vMtNDjopZBUS2liLnZKvfZKXWvLkWhbuTiKJUyDTOt+auSxBbJW0PP6vWZUrRiYDMIzCiUVdmUqKU9GjSPNMvUbaO+Kd6KeRfeUUk1CRaYKlLhEqNsuhReL1I6wlpWN+9vqs061RNaP1LNLjF0LZVCegd9U0rM6nl+O87yq7ISU4opY/edxuxfHZI3WNnQuP2cy4cdiVLeNMcwHBegWfamuDXYWU3kbtWRNdO0NmvYQNJ/8PHhmfoOCpXZP3rY8T4YdoyZTyngAQ/S9WBJpau93HX3YqwYiFKgTGGlRzW/73VE9aNcBiq6s9LRVfvum90lL6/8WrBo8u01x0XPLXmIgdorMxX0PQur6ABgAQ1YlgdsJ6i/MltOV5fP3/EHxe06UeHfzdQczB88exYuUl8HVZNODkdFmVkSZf1dj4/s25LfKquemnUNuYmaU1/UXIz9yY6eqVjY992e/bXBnZd+73pkXsfR9ILvR1o/2Rce9UQWDE6cofKHR5Tq40vrt7/QfezRyrBr/xv7Ry8d2Z56tXf3y3UTzgtPHXNu/AVsPefMr+9z/TV67ujDGyKN7Wt3/vRB18H6bRePnf6h/cvDI+fGvk4rKw5tPL4hOt7zYnWkLrl691uHjtY+duC+C/eef+WJyJKP3nbt/VYOVJ1ec7L1wETnz4d2tCQj1eMXx8Z7t75zfmzZqcOxb15qOvn52s2xxEODe7d1ts+79Gzf5rm/3f/r8qZnat/7+KsPGz6bHziybgu35/nVr1X9WFf99NLnPo017tpyYk1dIX1/A2lKcgoTDwAA',
    // 'Content-Type':'application/json',
    // 'X-EBAY-C-ENDUSERCTX':'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>',
    // }, url: `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${itemString}&limit=20&filter=price:[${min}],priceCurrency:USD`, 
    //   method:'GET'}, function(err,res,body){
    //       console.log(body);
    // });
   // callback(null, [json])    
}








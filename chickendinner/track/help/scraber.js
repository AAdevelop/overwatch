var request = require('request')
const jsdom = require('jsdom')
const { JSDOM } = jsdom  

request('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR12.TRC2.A0.H0.Xxps+13.TRS0&_nkw=xps+13&_sacat=0', function (error, response, body) {
    console.log('error:', error);
    const tags = new JSDOM(body).window.document.getElementsByClassName("lvprice");
    const items = new JSDOM(body).window.document.getElementById('ListViewInner');
    for(let item of items){
	    console.log(item.children[0]);
    }
    let newArr = []
    for (let tag of tags) {
        newArr.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')))
    }
	//console.log(newArr);
    });

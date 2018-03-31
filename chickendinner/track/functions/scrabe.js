const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const url = 'https://www.ebay.com/sch/i.html?_odkw=switch&_osacat=0&_from=R40&_trksid=p2045573.m570.l1313.TR12.TRC2.A0.H0.Xdell+xps+13.TRS0&_nkw=dell+xps+13&_sacat=0';

async function renderHTML() { 
    const html = await axios.get(url)
    const dom = new JSDOM(html.data)
    const tags = dom.window.document.getElementsByClassName("lvprice");
    let newArr = [];
    for (let tag of tags) {
        newArr.push(parseInt(tag.children[0].innerHTML.replace(/[^0-9.]|/g, '')));
    }
    console.log(newArr);
}


// window.document.getElementsByClassName("lvprice")[0]
// window.document.getElementsByClassName("lvprice")[0].children[0].innerHTML
renderHTML();
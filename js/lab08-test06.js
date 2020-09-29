/* add code below this */

let comp = JSON.parse(companies);
// console.log(c);

function acctCalculations(company) {
    this.mCap50 = function () {
        return currency(company.stats.day50MovingAvg * company.stats.sharesOutstanding);
    };
    this.mCap200 = function () {
        return currency(company.stats.day200MovingAvg * company.stats.sharesOutstanding);
    }
    this.netRev = function () {
        return currency(company.stats.operatingRevenue - company.stats.costOfRevenue);
    }
    this.sheq = function () {
        return currency(company.stats.totalAssets - company.stats.totalLiabilities);
    }

    const currency = function (num) {
        return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(num);
    }
}

function outputCard(company) {
    const outputTag = function (company) {
        for (let tag of company.tags) {
            document.write(`<small>${tag}</small>`);
        }
    };

    const newCompany = new acctCalculations(company);

    document.write(`<article class="card">`);
    document.write(`<h2>${company.symbol} - ${company.companyName}</h2>`);
    document.write(`<div>`);
    document.write(`<p>Market Cap (50day avg): <span>${newCompany.mCap50()}</span></p>`);
    document.write(`<p>Market Cap (200day avg): <span>${newCompany.mCap200()}</span></p>`);
    document.write(`<p>Net Revenue: <span>${newCompany.netRev()}</span></p>`);
    document.write(`<p>Shareholder Equity: <span>${newCompany.sheq()}</span></p>`);
    document.write(`</div>`);
    document.write(`<footer>`);
    outputTag(company);
    document.write(`</footer>`);
    document.write(`</article>`);
}

for (let c of comp) {
    outputCard(c);
}
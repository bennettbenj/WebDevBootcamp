let faker = require("faker");

let introStr = "====================\nWELCOME TO MY SHOP====================\n";

function generateProducts(number){
    let products = [];
    products.push(introStr);
    for (let i = 0; i < number; i++) {
        products[i] = faker.fake("{{company.companyName}} - {{commerce.price}}");
    }
    return products;
}

console.log(generateProducts(10));
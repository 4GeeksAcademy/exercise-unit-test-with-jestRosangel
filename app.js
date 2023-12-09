
const fromEuroToDollar = function(valueInEuro) {
   
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenToPound = function(valueInDollar) {
    let valueInPound = valueInDollar * 0.87;
    return valueInPound;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound}
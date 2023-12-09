// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

module.exports = { fromEuroToDollar }



const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valuenInDollar * 156.5;
    return valuenInYen;
}
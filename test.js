
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dolar should be 156.5 Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2.5);
    const expected = 2.5 * 156.5;
    expect(fromDollarToYen(2.5)).toBe(391.25); 
})

test("One dolar should be 0.87 Pound", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(4.5);
    const expected = 4.5 * 0.87;
    expect(fromYenToPound(4.5)).toBe(3.915); 
})

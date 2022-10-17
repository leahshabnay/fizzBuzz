const fizzbuzz = require("./fizzbuzz.js");


const testMEthods = [
    fizzbuzz.obviousSolution,
    fizzbuzz.twoIfsSolution
];

describe.each(testMEthods)('With params for %s', (methodUnderTest) => {
    it(`${methodUnderTest.name} test`, () => {
        expectBehavior(methodUnderTest);
    });
});

var expectedResult = [1, 2, "fizz", 4, "buzz", "fizz"]

function expectBehavior(f) {
    expect(f(6)).toEqual(expect.arrayContaining(expectedResult));
}
const fizzbuzz = require("./fizzbuzz.js");


const testMethods = [
    fizzbuzz.obviousSolution,
    fizzbuzz.usingDictionary,
    fizzbuzz.arrayMapAndTwoLoopsSolution,
    fizzbuzz.shorthandIf,
    fizzbuzz.selectFromArray,
    fizzbuzz.arrayMapAndShorthandExpression,
    fizzbuzz.usingSwitchClause

];

describe.each(testMethods)('With params for %s', (methodUnderTest) => {
    it(`${methodUnderTest.name} test`, () => {
        expectBehavior(methodUnderTest);
    });
});

var expectedResult = [1, 2, "fizz", 4, "buzz", "fizz"]

function expectBehavior(f) {
    expect(f(6)).toEqual(expect.arrayContaining(expectedResult));
}
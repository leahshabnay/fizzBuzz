var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const fizzbuzz = require("./fizzbuzz.js");


// add tests
suite.add(fizzbuzz.obviousSolution.name, () => {
        expectBehavior(fizzbuzz.obviousSolution);
    })
    .add(fizzbuzz.usingDictionary.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    .add(fizzbuzz.arrayMapAndTwoLoopsSolution.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    .add(fizzbuzz.shorthandIf.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    .add(fizzbuzz.selectFromArray.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    .add(fizzbuzz.arrayMapAndShorthandExpression.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    .add(fizzbuzz.usingSwitchClause.name, () => {
        expectBehavior(fizzbuzz.usingDictionary);
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        var report = [];
        for (var i = 0; i < this.length; i++) {
            //console.log(this[i]);
            var item = {};
            item.name = this[i].name;
            item.hz = this[i].hz;
            item.deviation = this[i].deviation;
            //console.log(this[i].stats);
            report.push(item);
        }

        report.sort((a, b) => (b.hz - a.hz));
        report.forEach(r => console.log(r.name + " - " + r.hz));
        console.log('Fastest is ' + this.filter('fastest').map('name'));

        console.log('Slowest is ' + this.filter('slowest').map('name'));
    })
    // run async
    .run({ 'async': true });

function expectBehavior(f) {
    for (var i = 0; i < 1000; i++) {
        f(100);
    }
}
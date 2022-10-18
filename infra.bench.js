// spread ==> [ ...Array(N).keys() ].map( n => n+1);;
// fill/map ==> ;
// Array.from ==>
// Array.from and { length: N } hack ==> Array.from({ length: N }, (_, i) => i+1)

var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
const n = 500;
suite
    .add("FillNumbers#spread", () => [...Array(n).keys()].map((n) => n + 1))
    .add("FillNumbers#fillAndMap", () =>
        Array(N)
        .fill()
        .map((_, i) => i + 1)
    )
    .add("FillNumbers#arrayFrom", () => Array.from(Array(n), (_, i) => i + 1))
    .add("FillNumbers#arrayFromHack", () =>
        Array.from({ length: n }, (_, i) => i + 1)
    )
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .on("complete", function() {
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

        report.sort((a, b) => b.hz - a.hz);
        report.forEach((r) => console.log(r.name + " - " + r.hz));
        console.log("Fastest is " + this.filter("fastest").map("name"));

        console.log("Slowest is " + this.filter("slowest").map("name"));
    })
    // run async
    .run({ async: true });
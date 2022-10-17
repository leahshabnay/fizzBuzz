module.exports = class fizzbuzz {
    constructor() {}

    static obviousSolution(n) {
        var result = [];
        for (let i = 1; i < n + 1; i++) {
            var dividedBy3 = i % 3 == 0;
            var dividedBy5 = i % 5 == 0;

            if (dividedBy3 && dividedBy5) result.push("fizzbuzz");
            else if (dividedBy3) result.push("fizz");
            else if (dividedBy5) result.push("buzz");
            else result.push(i);
        }
        return result;
    }

    static usingDictionary(n) {
        var result = [];

        var dic = {
            3: "fizz",
            5: "buzz",
        };

        for (let i = 1; i < n + 1; i++) {
            var currentItem = "";
            for (var key in dic) {
                if (i % key == 0) currentItem = currentItem + dic[key];
            }
            if (currentItem == "") currentItem = i;

            result.push(currentItem);
        }

        return result;
    }

    static shorthandIf(n) {
        var result = [];
        for (let i = 1; i < n + 1; i++) {
            let currentItem = (i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i;
            result.push(currentItem);
        }
        return result;
    }

    static selectFromArray(n) {
        var result = [];
        for (let i = 1; i < n + 1; i++) {
            let currentItem = [i, "fizz", "buzz", "fizzbuzz"][
                (i % 3 === 0) + 2 * (i % 5 === 0)
            ];
            result.push(currentItem);
        }
        return result;
    }

    static arrayMapAndTwoLoopsSolution(n) {
        var result = [...Array(n).keys()].map((n) => n + 1);

        for (let i = 2; i < n; i = i + 3) {
            result[i] = "fizz";
        }

        for (let i = 4; i < n; i = i + 5) {
            if (result[i] == "fizz") result[i] = "fizzbuzz";
            else result[i] = "buzz";
        }

        return result;
    }

    static arrayMapAndShorthandExpression(n) {
        return [...Array(n).keys()].map((i) =>
            ((i) =>
                (!(i % 15) && "fizzbuzz") ||
                (!(i % 3) && "fizz") ||
                (!(i % 5) && "buzz") ||
                i)(i + 1)
        );
    }

    static usingSwitchClause(n) {
        var result = [];
        for (let i = 1; i < n + 1; i++) {
            switch (true) {
                case i % 5 == 0 && i % 3 == 0:
                    result.push("fizzbuzz");
                    break;
                case i % 5 == 0 && i % 3 != 0:
                    result.push("buzz");
                    break;
                case i % 3 == 0 && i % 5 != 0:
                    result.push("fizz");
                    break;
                default:
                    result.push(i);
                    break;
            }
        }
        return result;
    }
};
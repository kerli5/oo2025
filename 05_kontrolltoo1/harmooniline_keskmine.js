"use strict";
var HarmoonilineKeskmine = /** @class */ (function () {
    function HarmoonilineKeskmine() {
        this.kiirused = [];
    }
    // Kahe lõigu keskmise arvutamine
    HarmoonilineKeskmine.prototype.kaheLõiguKeskmine = function (k1, k2) {
        return 2 * k1 * k2 / (k1 + k2);
    };
    HarmoonilineKeskmine.prototype.koguTeeKeskmine = function () {
        if (this.kiirused.length == 0)
            return 0;
        var sum = this.kiirused.reduce(function (acc, num) { return acc + 1 / num; }, 0);
        //console.log(sum);
        //[30, 60]:
        //acc = 0 + 1/30 = 0.3
        // acc = 0.5 + 1/60 = 0.025
        //acc = 0.025 + 1/90 = 0.013
        return this.kiirused.length / sum;
    };
    HarmoonilineKeskmine.prototype.lisakiirus = function (kiirus) {
        this.kiirused.push(kiirus);
        console.log("Lisatud kiirus", kiirus);
    };
    return HarmoonilineKeskmine;
}());
var harm = new HarmoonilineKeskmine();
var tulemus = harm.kaheLõiguKeskmine(30, 60);
console.log("Harmooniline keskmine", tulemus);
harm.lisakiirus(30);
harm.lisakiirus(60);
harm.lisakiirus(90);
//harm.lisakiirus(0);
var kogutulemus = harm.koguTeeKeskmine();
console.log("Kogu tee läbimise keskmine kiirus", kogutulemus);

"use strict";

class HarmoonilineKeskmine {
    constructor() {}
    kiirused: number[] = [];

    // Kahe lõigu keskmise arvutamine
    kaheLõiguKeskmine(k1: number, k2: number): number {
        return 2 * k1 * k2 / (k1 + k2);
    }

    koguTeeKeskmine(): number {
        if(this.kiirused.length == 0) return 0;

        const sum = this.kiirused.reduce((acc, num) => acc + 1 / num, 0);
        //console.log(sum);

        //[30, 60]:
            //acc = 0 + 1/30 = 0.3
            // acc = 0.5 + 1/60 = 0.025
            //acc = 0.025 + 1/90 = 0.013

        return this.kiirused.length / sum;
    }

    lisakiirus(kiirus: number): void {
        this.kiirused.push(kiirus);
        console.log("Lisatud kiirus", kiirus);
    }

}

const harm = new HarmoonilineKeskmine();

const tulemus = harm.kaheLõiguKeskmine(30, 60);
console.log("Harmooniline keskmine", tulemus);

harm.lisakiirus(30);
harm.lisakiirus(60);
harm.lisakiirus(90);
//harm.lisakiirus(0);

const kogutulemus = harm.koguTeeKeskmine();
console.log("Kogu tee läbimise keskmine kiirus", kogutulemus);

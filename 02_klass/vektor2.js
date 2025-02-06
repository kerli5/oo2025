var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    //Loo käsklus vektori korrutamiseks arvuga
    Vektor.prototype.korruta = function (koef) {
        return new Vektor(this.x * koef, this.y * koef);
    };
    Vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //Leia kahe vektori skaalakorrutis
    Vektor.prototype.skaalakorrutis = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    return Vektor;
}());
//Loo massiiv neljast vektorist
//Leia nende kõigi summa
var vektorid = [
    new Vektor(1, 3),
    new Vektor(1, 5),
    new Vektor(3, 3),
    new Vektor(2, 1),
];
var asukoht = vektorid[0];
for (var i = 1; i < vektorid.length; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
var v1 = new Vektor(3, 5);
var vagun = new Vektor(9, 0);
var energia = v1.skaalakorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.korruta(4).kuva();
v1.kuva();
console.log(v1.pikkus());
var v3 = v1.liida(new Vektor(1, 2));
v3.kuva();

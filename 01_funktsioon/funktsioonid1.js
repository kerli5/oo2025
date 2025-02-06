"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(181, 110));
var massid = [80, 90, 100, 110, 115];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(181, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
//Looge teine valem kehamassiindeksi arvutamiseks:
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
//aitab käsklus Math.pow
function kehamassiindeks2(cm, kg) {
    var m = cm / 100;
    return kg * 1.3 / Math.pow(m, 2.5);
}
//Arvutage kehamassiindeks mitmesugustega massidega sama pikkuse juures
//näidake, kuidas väärtused erinevad
var indeksid2 = massid.map(function (mass) { return kehamassiindeks2(181, mass); });
console.log(indeksid2);
//arvutage mõlema valemiga sama massi ja eri pikkuste juures
var vastus = [];
for (var pikkus = void 0; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);

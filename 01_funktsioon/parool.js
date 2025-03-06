"use strict";

function juhuslikParool(pikkus, kasSisaldabSümboleid = true) {
    const tähed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbrid = "0123456789";
    const sümbolid = "!@#$%^&*";
    
    let tähemärgid = tähed + numbrid;
    if (kasSisaldabSümboleid) {
        tähemärgid += sümbolid;
    }
    
    let parool = "";
    for (let i = 0; i < pikkus; i++) {
        parool += tähemärgid[Math.floor(Math.random() * tähemärgid.length)];
    }
    return parool;
}

function genereeriParoolid(kogus, pikkus, kasSisaldabSümboleid = true) {
    let paroolid = [];
    for (let i = 0; i < kogus; i++) {
        paroolid.push(juhuslikParool(pikkus, kasSisaldabSümboleid));
    }
    return paroolid;
}

console.log("Juhuslikud paroolid:");
console.log(genereeriParoolid(5, 12));
console.log("Juhuslikud paroolid ilma sümboliteta:");
console.log(genereeriParoolid(5, 12, false));

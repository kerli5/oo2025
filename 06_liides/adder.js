"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharCounter = /** @class */ (function () {
    //consturctor that takes and adder object as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    //add the number of characters in a given to the Adder
    //method which designed to take a word (a string)
    CharCounter.prototype.addWordCharacters = function (word) {
        //word.lenght gives the number of characters in the word
        this.adder.add(word.length);
    };
    //retreive the total character count stored in the adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); //call the get sum () from the adder to get the total count
    };
    return CharCounter;
}());
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //initial sum is 0. Witout the initial sum would be undefined
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; }; //add the given number to sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//adder1.add(8);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());

var roll, document;

roll = function () {
    "use strict";
    var d1, d2, dtotal;
    d1 = (1 + Math.floor(6 * Math.random()));
    d2 = (1 + Math.floor(6 * Math.random()));
    dtotal = d1 + d2;
    document.getElementById("message").innerHTML = "You rolled a " + String(d1) + " + " + String(d2) + " = " + String(dtotal) + ".";
};
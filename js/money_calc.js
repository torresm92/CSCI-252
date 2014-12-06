/*global alert:false, confirm:false, console: false, Debug: false, opera: false, prompt: false, WSH: false*/
function s(num, val) {
    "use strict";
    var amount, sum, one = 1;
    amount = num * one; // amount is the num or NaN
    sum = (!num ? 0 : num) * val; // the sum for that bill or coin

    if (isNaN(amount)) { // if the entire is not a number
        alert("' " + num + " ' is not a valid entry and that field will " + "not be included in the total money calculation.");

        return 0;
    }
    return sum; // if it is OK, send sum back
}

function money(form) {
    "use strict";
    var hun = s(form.hun.value, 100), // Each amount is the returned value
        fif = s(form.fif.value, 50), // for the amount in the s() function
        twe = s(form.twe.value, 20),
        ten = s(form.ten.value, 10),
        fiv = s(form.fiv.value, 5),
        one = s(form.one.value, 1),
        hlf = s(form.hlf.value, 0.5),
        qtr = s(form.qtr.value, 0.25),
        dme = s(form.dme.value, 0.1),
        nck = s(form.nck.value, 0.05),
        pny = s(form.pny.value, 0.01),
        dec1,
        dec2,
        ttl = hun + fif + twe + ten + fiv + one + hlf + qtr + dme + nck + pny; // add up all the amounts

    // rounds total to two decimal places
    ttl = String(((Math.round(ttl * 100)) / 100));

    dec1 = ttl.substring(ttl.length - 3, ttl.length - 2);
    dec2 = ttl.substring(ttl.length - 2, ttl.length - 1);

    if (dec1 !== '.') { // adds trailing zeroes if necessary
        if (dec2 === '.') {
            ttl += "0";
        } else {
            ttl += ".00";
        }
    }
    form.total.value = "$ " + ttl; // display total amount
}
/**
 * Created by david on 10/30/16.
 */

function ranNum(usrLow, usrHigh) {
    if (isNaN(usrLow) || isNaN(usrHigh) ) {
        throw new Error("Sorry " + usrLow + " or " + usrHigh + " is not a number.");
    }
    return Math.floor(Math.random() * (usrHigh - usrLow) + 1) + usrLow;
}

alert(ranNum(
    parseInt(prompt("Please select the low number")),
    parseInt(prompt("Please select the high number"))
));
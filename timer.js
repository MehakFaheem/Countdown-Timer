"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var date_fns_1 = require("date-fns");
var res = await inquirer_1.default.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of seconds: ",
    validate: function (input) {
        if (isNaN(input)) {
            console.log("Please enter valid number.");
        }
        else if (input >= 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
var input = res.userInput;
function startTimer(val) {
    var intTime = new Date().setSeconds(new Date().getSeconds() + val);
    var intervalTime = new Date(intTime);
    setInterval((function () {
        var currTime = new Date();
        var timeDiff = (0, date_fns_1.differenceInSeconds)(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer Has Expired!");
            process.exit();
        }
        var min = Math.floor((timeDiff % (36000 * 24)) / 3600);
        var sec = Math.floor(timeDiff % 60);
        console.log("".concat(min.toString().padStart(2, "0"), ":").concat(sec.toString().padStart(2, "0")));
    }), 1000);
}
startTimer(input);

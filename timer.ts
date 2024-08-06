#! /usr/bin/env node
import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns"

const res = await inquirer.prompt(
    {
        name: "userInput",
        type: "number",
        message: "Please enter the amount of seconds: ",
        validate: (input) => {
            if(isNaN(input)){
                console.log("Please enter valid number.");
            }else if(input >=60 ){
                return"Seconds must be in 60";
            }else{
                return true;
            }
        }
    });

let input = res.userInput;

function startTimer(val: number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime)
    setInterval((()=> {
        const currTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currTime);

        if(timeDiff <= 0){
            console.log("Timer Has Expired!");   
            process.exit();
        }
        const min = Math.floor((timeDiff%(36000*24))/3600);
        const sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);
    }),1000)
}
startTimer(input)
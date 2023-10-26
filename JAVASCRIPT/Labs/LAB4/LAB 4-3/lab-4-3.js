//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 
var message = ""


//################## CREATE YOUR checkTemp FUNCTION
/*This function will return either TRUE when the temperature is <=30 and >=-10 or FALSE when is >30 or <-10 once the user 
provide the current temperature*/

//It expects to receive a NUMBER type variable called currentTemp that is the value that the user provides
/*It will return TRUE when the temperature is <=30, >=-10, additionally, I implemented the operator (OR) which will modify the 
variable message, inside of the if I checked if the weater is freater than 30 or lower to -10 in order to show the correct output*/
function checkTemp(currentTemp){
    if(currentTemp > 30 || currentTemp < -10){
        if(currentTemp > 30){
            message = "HOT"
        } else{
            message = "COLD"
        }
        return false;
    }
    return true;
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var userInput = prompt("What's the current temperature?", "Please provide de current temperature");

if(userInput === "" || userInput === "Please provide de current temperature" || userInput === null || isNaN(userInput)){
    alert("INVALID DATA TYPE")
} else{
    if(checkTemp(userInput) === false){
        alert("Yikes! Too " + message + " for dog walking! \nThis is no weather for dog walking")
    } else{
        alert("You're good, have a nice walk!")
    }
}

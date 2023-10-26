//variables
var numGroup = prompt("Which team number do you belong to?"); //A popup box that asks the user which team number they belong to
var firstName;
var numTeam;
var welcomeMsg = "Hi!, Welcome - ";
var correctTeam = 5;

if(isNaN(numGroup) === true || numGroup === "" || numGroup === null){ //check if the input is a letter, empty string or null
    alert("Access denied!, you didn't provide a number type");
} 
//if the input can be casted to the data type number as well as it is not a empty string or null del code of else will be run
else{
    var numGroupParse = parseInt(numGroup); //convert the string to a number
    if(numGroupParse === correctTeam){ //check if the user provided the number 5, if so, the code will ask for the first name, otherwise it will popoup an error message

        firstName = prompt("What's your First Name?"); //A popup box that asks the user for their first name once they provide the correct Team number (5)

        if(firstName === "" || firstName === null){ //check if the input is a empty string or null
            alert("Access denied!, you didn't provide a valid First Name");
        } else{
            switch(firstName.toLowerCase()){ //check the name submitted in lowercase, if it find any name of the team it will popoup the welcome message
                case "arnulfo":
                    alert(welcomeMsg + "Arnulfo David Sánchez Peña");
                    break;

                case "jiabao":
                    alert(welcomeMsg + "Jiabao Ding");
                    break;
    
                case "naomi":
                    alert(welcomeMsg + "Naomi Truong");
                    break;
    
                case "deep":
                    alert(welcomeMsg + "Deep Kalpeshkumar Patel");
                    break;
    
                case "hanna":
                    alert(welcomeMsg + "Hanna Elsa Reni George");
                    break;
    
                default : //when the user's name is not part of the team will popup an alert which says Access denied!
                    alert("Access denied!, you are not part of our Team");
                    break;           
            }
        }
    } else{ //when they user doesn't provide the correct team number (5), a popoup will be displayed saying Access denied!
        alert("Access denied!, this is not the correct Team");
    } 
}
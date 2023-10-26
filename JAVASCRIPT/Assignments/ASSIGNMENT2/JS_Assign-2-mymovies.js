//variables

var movie_1 = "Harry Potter";
var movie_2 = "The Greatest Showman";
var movie_3 = "Star Wars";
var movie_4 = "Fast & Furious";
var movie_5 = "The Lord of the Rings";
var movie_6 = "Jurassic World";
var movie_7 = "Inception";

var minNum = 1;
var maxNum = 7;

var flag = false; //this flag is used for the while loop

//array that holds my movies
var movieList = [movie_1, movie_2, movie_3, movie_4, movie_5, movie_6, movie_7];

while(flag === false){ //as long as the flag is FALSE, keep asking for the user input
    
    //popup box asks the user which movie number they want to choose
    var userInput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");

    //validate data of the string that the user provides (check empty string, null and default text)
    if(userInput === "" || userInput === null || userInput === "Pick a number: 1-7"){
        alert("ERROR!, Please enter a number between 1 and 7!");
    } 
    else{ 

        var userNum = parseInt(userInput); //convert the string to a number
        
        if(isNaN(userNum) === true || userNum < minNum || userNum > maxNum){ //if the value is NOT a number or is less than 1 or greater than 7, it will send an error message
            alert("ERROR!, Please enter a number between 1 and 7!");
        } 
        else{ // the value is a number and is between 1 and 7

            flag = true; // once that the user provided the correct data change the flag to TRUE, in this way the while will not run anymore

            alert("Number " + userNum + " on the list is: " + movieList[userNum-1]);

            for(var i = 1; i <= movieList.length ; i++){ //for loop that displays the movies, the loop will run from i to the length of the movies (i starts in 1 and will run as long it is less or equal to movieList.length)
                console.log("Movie " + i + ": " + movieList[i-1]); //display on the console, the reason for subtracting one [i-1] is to get the correct index 
            }
        }
    }
}
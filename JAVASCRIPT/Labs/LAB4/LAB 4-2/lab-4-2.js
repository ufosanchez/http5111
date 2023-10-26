//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
var IXD5106 = 8;
var HTTP5110 = 8;
var HTTP5111 = 100;
var HTTP5112 = 98;
var HTTP5114 = 93;


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function average(num1, num2, num3, num4, num5){
    var averageNum = (num1 + num2 + num3 + num4 + num5)/5;
    //console.log(averageNum.toFixed(1))
    return averageNum;
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
//average(5,10,15,20,25)

var result = average(IXD5106, HTTP5110, HTTP5111, HTTP5112, HTTP5114);

if(result >= 70){
    alert("CONGRATS your GPA is greater or equal to 70! - your GPA is : " + result.toFixed(1));
} else{
    alert("Review required - your GPA is : " + result.toFixed(1));
}
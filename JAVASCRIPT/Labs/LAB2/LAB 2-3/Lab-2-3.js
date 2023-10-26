//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var joinCheck
var emailInput



//==== LOGIC =============
joinCheck = confirm("Would you like to join your mailing list?")

if(joinCheck === true){
    emailInput = prompt("What's your email?", "me@example.com")

    if(emailInput === "" || emailInput === "me@example.com" || emailInput === null){
        alert("Thank you, but your email was not valid")
    }
    else{
        alert("Thank you, our next newsletter will be sent to " + emailInput)
    }
}
else{
    alert("Thank you, we will not bother you again")
}


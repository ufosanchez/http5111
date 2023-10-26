//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username = "dart"
		// Correct password
		var password = "vader"
		// user name input
		var userNameInput
		// password input
		var userPasswordInput



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userNameInput = prompt("What's your username?")

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("The username of the user is : " + userNameInput)

//5. CREATE POPUP BOX FOR PASSWORD
userPasswordInput = prompt("What's your password?")

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("The password of the user is : " + userPasswordInput)

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE

if(userNameInput === username && userPasswordInput === password){
	alert("Welcome back " + userNameInput)
	console.log("Login successful")
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("Invalid username/password")
	console.log("Login Fail")
}
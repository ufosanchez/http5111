//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var shoppingCart = [];
var total = 0;
var threshold = 35;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(total <= threshold){

	//GET ITEM COST FROM USER
	var price = prompt("What's the value of this item ($)?");
	
	//CONVERT USER INPUT TO A NUMBER
	var numPrice = parseInt(price);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total = total + numPrice;
	
	//PUSH ITEM COST TO CART ARRAY
	shoppingCart.push(numPrice);
}

//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!, you paid $" + total);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + shoppingCart.join("| "));

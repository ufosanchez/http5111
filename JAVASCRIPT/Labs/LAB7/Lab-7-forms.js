/* LAB 7 - SHIPPING FORM */
window.onload = function(){

	var shipInfo = {
		cid: 0,
		name: "",
		pc: "",
		speed: "",
		cost: 0
	};

	var formHandle = document.forms.form_ship;
	var msgThanks = document.getElementById("thanks_msg");
	var spanMsgCustomer = document.getElementById("thanksCustomer");
	var spanPostal = document.getElementById("thanksPC");

	var selectDelivery = document.getElementById("in_Speed");
	var spanSpeed = document.getElementById("thanksSpeed");
	var spanCost = document.getElementById("thanksCost");

	var slctBox = formHandle.f_speed;
		slctBox.onchange = delivery;

	formHandle.onsubmit = processForm;

	function processForm(){

		var name = formHandle.f_Name;
		var nameValue = name.value;

		shipInfo.name = nameValue;

		var idCustomer = formHandle.f_Id;
		var idCustomer_Value = idCustomer.value;

		shipInfo.cid = idCustomer_Value;

		var postalCode = formHandle.f_pc;
		var postalCode_Value = postalCode.value;

		shipInfo.pc = postalCode_Value;

		if(slctBox.value === "0"){
			selectDelivery.style.background= "red";
			name.style.background= "white";
			idCustomer.style.background= "white";
			postalCode.style.background= "white";
			selectDelivery.focus();
		}
		else if(shipInfo.name === ""){
			name.style.background= "red";
			selectDelivery.style.background= "white";
			idCustomer.style.background= "white";
			postalCode.style.background= "white";
			name.focus();
		}
		else if(shipInfo.cid === ""){
			idCustomer.style.background= "red";
			selectDelivery.style.background= "white";
			name.style.background= "white";
			postalCode.style.background= "white";
			idCustomer.focus();
		}
		else if(shipInfo.pc === ""){
			postalCode.style.background= "red";
			selectDelivery.style.background= "white";
			name.style.background= "white";
			idCustomer.style.background= "white";
			postalCode.focus();
		}
		else{
			formHandle.style.display = "none";

			spanMsgCustomer.innerHTML = shipInfo.name + " (Customer # " + shipInfo.cid +")";
			spanPostal.innerHTML = shipInfo.pc;
			spanSpeed.innerHTML = shipInfo.speed;
			spanCost.innerHTML = shipInfo.cost;

			spanSpeed.style.fontWeight = "bold";
			spanCost.style.fontWeight = "bold";
			spanMsgCustomer.style.textTransform = "uppercase";
			spanPostal.style.textTransform = "uppercase";

			msgThanks.style.display = "inline";
		}

		return false
	}

	function delivery(){
		console.log(slctBox.value)
		console.log(slctBox.options[slctBox.selectedIndex].text)
		shipInfo.cost = slctBox.value
		shipInfo.speed = slctBox.options[slctBox.selectedIndex].text
	}
}
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)





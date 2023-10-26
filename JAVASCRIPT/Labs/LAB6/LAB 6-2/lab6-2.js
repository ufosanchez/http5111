//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady(){
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	var h2Tag = document.getElementsByTagName("h2")[1];	

	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function askSeeSomething(){
		var response = confirm("Do you want to see something?");
		if(response == true){
			mysteryBox.style.display = "none";
			buttonBox.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox
	function styleBtnChange(){
		buttonBox.style.width = "600px";
		h2Tag.innerHTML = "SURPRISE!!!"
		buttonBox.style.backgroundColor = "orange"
	}


	//SETUP LISTENERS
	mysteryBox.onmouseover = askSeeSomething;
	buttonBox.onclick = styleBtnChange;
}
//END onload FUNCTION
//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name : "Arnulfo Sánchez",
    profession: "FullStack Developer & Mechatronics Engineer",
    country : "Colombia",
    age: 25,
    popUp: function(){
        alert("My name is " + meObject.name + " and I am a " + meObject.profession)
    }
}

console.log("Hi my name is: " + meObject.name);
/* alert("My name is " + meObject.name + " and I am a " + meObject.profession) */
meObject.popUp();


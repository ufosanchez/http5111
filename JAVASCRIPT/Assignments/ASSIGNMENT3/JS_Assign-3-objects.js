/* declare my soccer team object */
var soccerTeam = {
    /* declare 4 properties */
    team: "Manchester City F.C.", 
    league: "Premier League",
    pointsLeague: 89,
    goals: 94,
    /* declare the method of the object that update the goals property */
    goalMatch: function(){
        soccerTeam.goals = soccerTeam.goals + 2;
        alert("The new total of goals is: " + soccerTeam.goals)
    }
}

/* output the declared object to the console */
console.log(soccerTeam);

/* poputp that asks for the new Team */
var newTeam = prompt("What's your new favorite soccer Team?", soccerTeam.team);
/* update the team name of the object */
soccerTeam.team = newTeam;

/* poput that asks for the points of the team  in the 22/23 season */
var newPoints = prompt("What is the number of points in the 22/23 season?", soccerTeam.pointsLeague);
/* update the points of the object */
soccerTeam.pointsLeague = parseInt(newPoints);

/* calling the method of the custom object taht will add 2 goals to the goals property and 
show the total goals (updated value) in a popup*/
soccerTeam.goalMatch();

/* output the updated object to the console */
console.log(soccerTeam);
/* CHARACTER OBJECTS */
var player = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
}
var fighter = {
    class: "fighter",
    healthPoints: 20,
    attackPower: 20,
    counterAttackPower: 20,
}
var wizard = {
    class: "wizard",
    healthPoints: 15,
    attackPower: 15,
    counterAttackPower: 15,
}
var cleric = {
    class: "cleric",
    healthPoints: 5,
    attackPower: 5,
    counterAttackPower: 5,
}
var rogue = {
    class: "rogue",
    healthPoints: 10,
    attackPower: 10,
    counterAttackPower: 10,
}


/* CONSOLE LOG STATS */
var playerStats = function() {
    console.log(player.class);
    console.log(player.healthPoints);
    console.log(player.attackPower);
    console.log(player.counterAttackPower);
}
var fighterStats = function() {
    console.log(fighter.class);
    console.log(fighter.healthPoints);
    console.log(fighter.attackPower);
    console.log(fighter.counterAttackPower);
}
var wizardStats = function() {
    console.log(wizard.class);
    console.log(wizard.healthPoints);
    console.log(wizard.attackPower);
    console.log(wizard.counterAttackPower);
}
var clericStats = function() {
    console.log(cleric.class);
    console.log(cleric.healthPoints);
    console.log(cleric.attackPower);
    console.log(cleric.counterAttackPower);
}
var rogueStats = function() {
    console.log(rogue.class);
    console.log(rogue.healthPoints);
    console.log(rogue.attackPower);
    console.log(rogue.counterAttackPower);
}


/* CHOOSE CHARACTER/REPLACE STATS */
var chooseFighter = function() {
    if (player.class === "none") {     
        player.class = fighter.class;
        player.healthPoints = fighter.healthPoints;
        player.attackPower = fighter.attackPower;
        player.counterAttackPower = fighter.counterAttackPower;
        $(".characterChosen").append($(".fighterCard"));
    }
    else {
        alert("you already have a class")
    }
}

var chooseWizard = function() {
    if (player.class === "none") {    
        player.class = wizard.class;
        player.healthPoints = wizard.healthPoints;
        player.attackPower = wizard.attackPower;
        player.counterAttackPower = wizard.counterAttackPower;
        $(".characterChosen").append($(".wizardCard"));
    }
    else {
        alert("you already have a class")
    }
}

var chooseCleric = function() {
    if (player.class === "none") {
        player.class = cleric.class;
        player.healthPoints = cleric.healthPoints;
        player.attackPower = cleric.attackPower;
        player.counterAttackPower = cleric.counterAttackPower;
        $(".characterChosen").append($(".clericCard"));
    }
    else {
        alert("you already have a class")
    }
    }

var chooseRogue = function() {
    if (player.class === "none") {
        player.class = rogue.class;
        player.healthPoints = rogue.healthPoints;
        player.attackPower = rogue.attackPower;
        player.counterAttackPower = rogue.counterAttackPower;
        $(".characterChosen").append($(".rogueCard"));
    }
    else {
        alert("you already have a class")
    }
}


$(document).ready(function() {

    /* APPLY STATS */
    $(".fighterCard").on("click", function() {
        chooseFighter();
    });

    $(".wizardCard").on("click", function() {
        chooseWizard();
    });

    $(".clericCard").on("click", function() {
        chooseCleric();
    });
    
    $(".rogueCard").on("click", function() {
        chooseRogue();
    });




    $(".test").on("click", function() {
        playerStats();
    });




});
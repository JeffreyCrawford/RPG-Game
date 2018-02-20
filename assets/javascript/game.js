/* CHARACTER OBJECTS */
var player = {
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
}
var fighter = {
    healthPoints: 20,
    attackPower: 20,
    counterAttackPower: 20,
}
var wizard = {
    healthPoints: 15,
    attackPower: 15,
    counterAttackPower: 15,
}
var cleric = {
    healthPoints: 5,
    attackPower: 5,
    counterAttackPower: 5,
}
var rogue = {
    healthPoints: 10,
    attackPower: 10,
    counterAttackPower: 10,
}


/* CONSOLE LOG STATS */
var playerStats = function() {
    console.log(player.healthPoints);
    console.log(player.attackPower);
    console.log(player.counterAttackPower);
}
var fighterStats = function() {
    console.log(fighter.healthPoints);
    console.log(fighter.attackPower);
    console.log(fighter.counterAttackPower);
}
var wizardStats = function() {
    console.log(wizard.healthPoints);
    console.log(wizard.attackPower);
    console.log(wizard.counterAttackPower);
}
var clericStats = function() {
    console.log(cleric.healthPoints);
    console.log(cleric.attackPower);
    console.log(cleric.counterAttackPower);
}
var rogueStats = function() {
    console.log(rogue.healthPoints);
    console.log(rogue.attackPower);
    console.log(rogue.counterAttackPower);
}


/* CHOOSE CHARACTER/REPLACE STATS */
var chooseFighter = function() {
    player.healthPoints = fighter.healthPoints;
    player.attackPower = fighter.attackPower;
    player.counterAttackPower = fighter.counterAttackPower;
}

var chooseWizard = function() {
    player.healthPoints = wizard.healthPoints;
    player.attackPower = wizard.attackPower;
    player.counterAttackPower = wizard.counterAttackPower;
}

var chooseCleric = function() {
    player.healthPoints = cleric.healthPoints;
    player.attackPower = cleric.attackPower;
    player.counterAttackPower = cleric.counterAttackPower;
}

var chooseRogue = function() {
    player.healthPoints = rogue.healthPoints;
    player.attackPower = rogue.attackPower;
    player.counterAttackPower = rogue.counterAttackPower;
}


$(document).ready(function() {
    /* CONSOLE LOG STATS */
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
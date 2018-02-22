/* CHARACTER OBJECTS */
var player = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    baseAttackPower: 0,
    active: true,
}
var enemy = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    baseAttackPower: 0,
    active: false,
}
var resetObject = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    baseAttackPower: 0,
    active: false,
}
var fighter = {
    class: "fighter",
    healthPoints: 90,
    attackPower: 10,
    counterAttackPower: 10,
    baseAttackPower: 10,
    active: false,
}
var wizard = {
    class: "wizard",
    healthPoints: 70,
    attackPower: 20,
    counterAttackPower: 20,
    baseAttackPower: 20,
    active: false,
}
var cleric = {
    class: "cleric",
    healthPoints: 150,
    attackPower: 5,
    counterAttackPower: 5,
    baseAttackPower: 5,
    active: false,
}
var rogue = {
    class: "rogue",
    healthPoints: 80,
    attackPower: 15,
    counterAttackPower: 15,
    baseAttackPower: 15,
    active: false,
}



/* CONSOLE LOG STATS */
var playerStats = function() {
    console.log(player.class);
    console.log(player.healthPoints);
    console.log(player.attackPower);
    console.log(player.counterAttackPower);
    console.log(player.baseAttackPower);
}
var enemyStats = function() {
    console.log(enemy.class);
    console.log(enemy.healthPoints);
    console.log(enemy.attackPower);
    console.log(enemy.counterAttackPower);
    console.log(enemy.baseAttackPower);
}
var fighterStats = function() {
    console.log(fighter.class);
    console.log(fighter.healthPoints);
    console.log(fighter.attackPower);
    console.log(fighter.counterAttackPower);
    console.log(fighter.baseAttackPower);
}
var wizardStats = function() {
    console.log(wizard.class);
    console.log(wizard.healthPoints);
    console.log(wizard.attackPower);
    console.log(wizard.counterAttackPower);
    console.log(wizard.baseAttackPower);
}
var clericStats = function() {
    console.log(cleric.class);
    console.log(cleric.healthPoints);
    console.log(cleric.attackPower);
    console.log(cleric.counterAttackPower);
    console.log(cleric.baseAttackPower);
}
var rogueStats = function() {
    console.log(rogue.class);
    console.log(rogue.healthPoints);
    console.log(rogue.attackPower);
    console.log(rogue.counterAttackPower);
    console.log(rogue.baseAttackPower);
}


/* CHOOSE CHARACTER EFFECTS */
var chooseFighter = function() {
    fighter.active = true;
    /* IF THE PLAYER HAS NOT CHOSEN THEIR CHARACTER (CHOOSE PLAYER CHARACTER) */
    if (player.class === "none") {     
        player = fighter;
        /* MOVES CHOSEN CHARACTER TO COMBAT ZONE AND CHANGES COLORS */
        $(".characterChosen").append($(".fighterCard"));
        $(".characterChosen").addClass("character");
        $(".characterFighter").removeClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    /* IF THE PLAYER HAS CHOSEN A CHARACTER (CHOOSE ENEMY) */
    else {
        enemy = fighter;
        /* MOVES ENEMY CHARACTER TO COMBAT ZONE AND CHANGES COLORS */
        $(".enemyChosen").empty().append($(".fighterCard"));
        $(".enemyChosen").addClass("character");
        $(".enemyChosen").css("background-color", "#990000");
        $(".characterFighter").removeClass("character");
        $(".characterFighter").css("background-color", "");
        $(".vsText").text("VS");
    }
}
var chooseWizard = function() {
    /* SEE VAR CHOOSEFIGHTER */
    wizard.active = true;
    if (player.class === "none") {    
        player = wizard;
        $(".characterChosen").append($(".wizardCard"));
        $(".characterChosen").addClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    else {
        enemy = wizard;
        $(".enemyChosen").empty().append($(".wizardCard"));
        $(".enemyChosen").addClass("character");
        $(".enemyChosen").css("background-color", "#990000");
        $(".characterWizard").removeClass("character");
        $(".characterWizard").css("background-color", "");
        $(".vsText").text("VS");
    }
}
var chooseCleric = function() {
    /* SEE VAR CHOOSEFIGHTER */
    cleric.active = true;
    if (player.class === "none") {
        player = cleric;
        $(".characterChosen").append($(".clericCard"));
        $(".characterChosen").addClass("character");
        $(".characterCleric").removeClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    else {
        enemy = cleric;
        $(".enemyChosen").empty().append($(".clericCard"));
        $(".enemyChosen").addClass("character");
        $(".enemyChosen").css("background-color", "#990000");
        $(".characterCleric").removeClass("character");
        $(".characterCleric").css("background-color", "");
        $(".vsText").text("VS");
    }
}
var chooseRogue = function() {
    /* SEE VAR CHOOSEFIGHTER */
    rogue.active = true;
    if (player.class === "none") {
        player = rogue;
        $(".characterChosen").append($(".rogueCard"));
        $(".characterChosen").addClass("character");
        $(".characterRogue").removeClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    else {
        enemy = rogue;
        $(".enemyChosen").empty().append($(".rogueCard"));
        $(".enemyChosen").addClass("character");
        $(".enemyChosen").css("background-color", "#990000");
        $(".characterRogue").removeClass("character");
        $(".characterRogue").css("background-color", "");
        $(".vsText").text("VS");
    }
}


/* COMBAT FUNCTIONS */
var attack = function() {
    if((enemy.active === true) && (player.active === true)){
        counterAttack();
        dealDamage();
        player.attackPower = (player.attackPower + player.baseAttackPower);
        if(fighter.active == true && wizard.active == true && cleric.active == true && rogue.active == true && player.healthPoints !== 0 && enemy.healthPoints === 0) {
            $(".vsText").text("YOU WIN");
        }
    }
    else {}   
}
var counterAttack = function() {
    player.healthPoints = (player.healthPoints - enemy.counterAttackPower)
    /* IF PLAYER IS STILL ALIVE, ADJUST THEIR HP */
    if(player.healthPoints > 0) {
        if(player.class === "fighter") {
            $(".fighterHP").empty().append(player.healthPoints);
        }
        else if(player.class === "wizard") {
            $(".wizardHP").empty().append(player.healthPoints);
        }
        else if(player.class === "cleric") {
            $(".clericHP").empty().append(player.healthPoints);
        }
        else if(player.class === "rogue") {
            $(".rogueHP").empty().append(player.healthPoints);
        }
    }
    /* IF PLAYER IS DEAD, REMOVE THEIR CARD, CHANGE THE COLORS, AND SAY THEY LOSE */
    else {
        player.healthPoints = 0;
        if(player.class === "fighter") {
            $(".fighterGraveyard").css("background-color", "#009933");
            $(".fighterGraveyard").append($(".fighterCard"));
            $(".fighterGraveyard").addClass("character");
            $(".fighterHP").empty().append(player.healthPoints);
        }
        else if(player.class === "wizard") {
            $(".wizardGraveyard").css("background-color", "#009933");
            $(".wizardGraveyard").append($(".wizardCard"));
            $(".wizardGraveyard").addClass("character");
            $(".wizardHP").empty().append(player.healthPoints);
        }
        else if(player.class === "cleric") {
            $(".clericGraveyard").css("background-color", "#009933");
            $(".clericGraveyard").append($(".clericCard"));
            $(".clericGraveyard").addClass("character");
            $(".clericHP").empty().append(player.healthPoints);
        }
        else if(player.class === "rogue") {
            $(".rogueGraveyard").css("background-color", "#009933");
            $(".rogueGraveyard").append($(".rogueCard"));
            $(".rogueGraveyard").addClass("character");
            $(".rogueHP").empty().append(player.healthPoints);
        }  
        player = resetObject;
        $(".characterChosen").empty();
        $(".characterChosen").css("background-color", "");
        $(".characterChosen").removeClass("character");
        $(".vsText").text("YOU LOSE");
    }
}
var dealDamage = function() {
    enemy.healthPoints = (enemy.healthPoints - player.attackPower);
    if(enemy.healthPoints > 0) {
        if(enemy.class === "fighter") {
            $(".fighterHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "wizard") {
            $(".wizardHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "cleric") {
            $(".clericHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "rogue") {
            $(".rogueHP").empty().append(enemy.healthPoints);
        }
    }
    else {
        enemy.healthPoints = 0;
        if(enemy.class === "fighter") {
            $(".fighterGraveyard").css("background-color", "#990000");
            $(".fighterGraveyard").append($(".fighterCard"));
            $(".fighterGraveyard").addClass("character");
            $(".fighterHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "wizard") {
            $(".wizardGraveyard").css("background-color", "#990000");
            $(".wizardGraveyard").append($(".wizardCard"));
            $(".wizardGraveyard").addClass("character");
            $(".wizardHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "cleric") {
            $(".clericGraveyard").css("background-color", "#990000");
            $(".clericGraveyard").append($(".clericCard"));
            $(".clericGraveyard").addClass("character");
            $(".clericHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "rogue") {
            $(".rogueGraveyard").css("background-color", "#990000");
            $(".rogueGraveyard").append($(".rogueCard"));
            $(".rogueGraveyard").addClass("character");
            $(".rogueHP").empty().append(enemy.healthPoints);
        }
        enemy = resetObject;
        enemy.active = true;
        $(".enemyChosen").empty();
        $(".enemyChosen").css("background-color", "");
        $(".enemyChosen").removeClass("character");
        $(".vsText").text("CHOOSE YOUR NEXT OPPONENT");
    }
}


/* RESETS */
var playerReset = function() {
    player = resetObject;    
}
var enemyReset = function() {
    enemy = resetObject;
}
var gameReset = function() {
    playerReset();
    enemyReset();
}


$(document).ready(function() {

    $(".vsText").text("CHOOSE YOUR CHARACTER");

    /* APPEND CURRENT HP TO CARD */
    $(".fighterHP").append(fighter.healthPoints);
    $(".wizardHP").append(wizard.healthPoints);
    $(".clericHP").append(cleric.healthPoints);
    $(".rogueHP").append(rogue.healthPoints);

    /* CHOOSE CHARACTER ON CLICK EVENTS */
    $(".fighterCard").on("click", function() {
        if (fighter.active === false && enemy.class === "none" && player.active === true) {
        chooseFighter();
        }
        else {}
    });
    $(".wizardCard").on("click", function() {
        if (wizard.active === false && enemy.class === "none" && player.active === true) {
        chooseWizard();
        }
        else {}
    });
    $(".clericCard").on("click", function() {
        if (cleric.active === false && enemy.class === "none" && player.active === true) {
        chooseCleric();
        }
        else {}
    });
    $(".rogueCard").on("click", function() {
        if (rogue.active === false && enemy.class === "none" && player.active === true) {
        chooseRogue();
        }
        else {}
    });

    $(".attackButton").on("click", function() {
        attack();
    });




    $(".chooseText").on("click", function() {
        playerStats();
        enemyStats();
        console.log(player.active);
        console.log(enemy.active);
    });
});
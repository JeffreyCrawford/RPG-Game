/* CHARACTER OBJECTS */
var player = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    active: true,
}
var enemy = {
    class: "none",
    healthPoints: 0,
    attackPower: 0,
    counterAttackPower: 0,
    active: true,
}
var fighter = {
    class: "fighter",
    healthPoints: 20,
    attackPower: 20,
    counterAttackPower: 20,
    active: false,
}
var wizard = {
    class: "wizard",
    healthPoints: 15,
    attackPower: 15,
    counterAttackPower: 15,
    active: false,
}
var cleric = {
    class: "cleric",
    healthPoints: 5,
    attackPower: 5,
    counterAttackPower: 5,
    active: false,
}
var rogue = {
    class: "rogue",
    healthPoints: 10,
    attackPower: 10,
    counterAttackPower: 10,
    active: false,
}


/* CONSOLE LOG STATS */
var playerStats = function() {
    console.log(player.class);
    console.log(player.healthPoints);
    console.log(player.attackPower);
    console.log(player.counterAttackPower);
}
var enemyStats = function() {
    console.log(enemy.class);
    console.log(enemy.healthPoints);
    console.log(enemy.attackPower);
    console.log(enemy.counterAttackPower);
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


/* CHOOSE CHARACTER EFFECTS */
var chooseFighter = function() {
    fighter.active = true;
    /* IF THE PLAYER HAS NOT CHOSEN THEIR CHARACTER (CHOOSE PLAYER CHARACTER) */
    if (player.class === "none") {     
        /* APPLY DEFAULT STATS FOR CHOSEN CHARACTER TO PLAYER */
        player.class = fighter.class;
        player.healthPoints = fighter.healthPoints;
        player.attackPower = fighter.attackPower;
        player.counterAttackPower = fighter.counterAttackPower;
        /* MOVES CHOSEN CHARACTER TO COMBAT ZONE AND CHANGES COLORS */
        $(".characterChosen").append($(".fighterCard"));
        $(".characterChosen").css("background-color", "#009933");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
    }
    /* IF THE PLAYER HAS CHOSEN A CHARACTER (CHOOSE ENEMY) */
    else {
        /* APPLY DEFAULT STATS FOR CHOSEN CHARACTER TO ENEMY */
        enemy.class = fighter.class;
        enemy.healthPoints = fighter.healthPoints;
        enemy.attackPower = fighter.attackPower;
        enemy.counterAttackPower = fighter.counterAttackPower;
        /* MOVES ENEMY CHARACTER TO COMBAT ZONE AND CHANGES COLORS */
        $(".characterFighter").css("background-color", "rgb(66, 66, 66)");
        $(".enemyChosen").css("background-color", "#990000");
        $(".enemyChosen").empty().append($(".fighterCard"));
    }
}
var chooseWizard = function() {
    /* SEE VAR CHOOSEFIGHTER */
    wizard.active = true;
    if (player.class === "none") {    
        player.class = wizard.class;
        player.healthPoints = wizard.healthPoints;
        player.attackPower = wizard.attackPower;
        player.counterAttackPower = wizard.counterAttackPower;
        $(".characterChosen").append($(".wizardCard"));
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
    }
    else {
        enemy.class = wizard.class;
        enemy.healthPoints = wizard.healthPoints;
        enemy.attackPower = wizard.attackPower;
        enemy.counterAttackPower = wizard.counterAttackPower;
        $(".characterWizard").css("background-color", "rgb(66, 66, 66)");
        $(".enemyChosen").css("background-color", "#990000");
        $(".enemyChosen").empty().append($(".wizardCard"));
    }
}
var chooseCleric = function() {
    /* SEE VAR CHOOSEFIGHTER */
    cleric.active = true;
    if (player.class === "none") {
        player.class = cleric.class;
        player.healthPoints = cleric.healthPoints;
        player.attackPower = cleric.attackPower;
        player.counterAttackPower = cleric.counterAttackPower;
        $(".characterChosen").append($(".clericCard"));
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
    }
    else {
        enemy.class = cleric.class;
        enemy.healthPoints = cleric.healthPoints;
        enemy.attackPower = cleric.attackPower;
        enemy.counterAttackPower = cleric.counterAttackPower;
        $(".characterCleric").css("background-color", "rgb(66, 66, 66)");
        $(".enemyChosen").css("background-color", "#990000");
        $(".enemyChosen").empty().append($(".clericCard"));
    }
}
var chooseRogue = function() {
    /* SEE VAR CHOOSEFIGHTER */
    rogue.active = true;
    if (player.class === "none") {
        player.class = rogue.class;
        player.healthPoints = rogue.healthPoints;
        player.attackPower = rogue.attackPower;
        player.counterAttackPower = rogue.counterAttackPower;
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterChosen").append($(".rogueCard"));
    }
    else {
        enemy.class = rogue.class;
        enemy.healthPoints = rogue.healthPoints;
        enemy.attackPower = rogue.attackPower;
        enemy.counterAttackPower = rogue.counterAttackPower;
        $(".characterRogue").css("background-color", "rgb(66, 66, 66)");
        $(".enemyChosen").css("background-color", "#990000");
        $(".enemyChosen").empty().append($(".rogueCard"));
    }
}


/* COMBAT FUNCTIONS */
var attack = function() {
    counterAttack();
    dealDamage();
}
var counterAttack = function() {
    player.healthPoints = (player.healthPoints - enemy.counterAttackPower)
    /* IF PLAYER IS STILL ALLIVE, ADJUST THEIR HP */
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
        $(".characterChosen").empty();
        $(".characterChosen").css("background-color", "rgb(66, 66, 66)");
        alert("YOU LOSE!");
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
        $(".enemyChosen").empty();
        $(".enemyChosen").css("background-color", "rgb(66, 66, 66)");
        enemyReset();
    }
}


/* RESETS */
var playerReset = function() {
    player.class = "none";
    player.healthPoints = 0;
    player.attackPower = 0;
    player.counterAttackPower = 0;    
}
var enemyReset = function() {
    enemy.class = "none";
    enemy.healthPoints = 0;
    enemy.attackPower = 0;
    enemy.counterAttackPower = 0;
}
var gameReset = function() {
    playerReset();
    enemyReset();
}


$(document).ready(function() {

    /* APPEND CURRENT HP TO CARD */
    $(".fighterHP").append(fighter.healthPoints);
    $(".wizardHP").append(wizard.healthPoints);
    $(".clericHP").append(cleric.healthPoints);
    $(".rogueHP").append(rogue.healthPoints);

    /* CHOOSE YOUR CHARACTER ON CLICK EVENTS */
    $(".fighterCard").on("click", function() {
        if (fighter.active === false) {
        chooseFighter();
        }
        else {}
    });
    $(".wizardCard").on("click", function() {
        if (wizard.active === false) {
        chooseWizard();
        }
        else {}
    });
    $(".clericCard").on("click", function() {
        if (cleric.active === false) {
        chooseCleric();
        }
        else {}
    });
    $(".rogueCard").on("click", function() {
        if (rogue.active === false) {
        chooseRogue();
        }
        else {}
    });

    $(".attackButton").on("click", function() {
        attack();
    });


    $(".test").on("click", function() {
        playerStats();
        enemyStats();
    });






});
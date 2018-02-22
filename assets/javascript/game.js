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
    active: true,
}
var fighter = {
    class: "fighter",
    healthPoints: 110,
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
    healthPoints: 145,
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

/* CHOOSE CHARACTER EFFECTS */
var chooseFighter = function() {
    /* CLEARS DAMAGE MESSAGES */
    $(".enemyDamage").empty();
    $(".playerDamage").empty();
    fighter.active = true;
    /* CHOOSE PLAYER CHARACTER */
    if (player.class === "none" && enemy.class === "none") {     
        /* ASSIGNS CLASS PROPERTIES TO PLAYER */
        Object.assign(player, fighter);
        /* MOVES CHOSEN CHARACTER TO COMBAT ZONE AND CHANGES COLORS AND CENTER TEXT */
        $(".characterChosen").append($(".fighterCard"));
        $(".characterChosen").addClass("character");
        $(".characterFighter").removeClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterWizard").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    /* CHOOSE ENEMY */
    else {
        /* ASSIGNS CLASS PROPERTIES TO ENEMY */
        Object.assign(enemy, fighter);
        /* MOVES ENEMY CHARACTER TO COMBAT ZONE AND CHANGES COLORS AND CENTER TEXT*/
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
    $(".enemyDamage").empty();
    $(".playerDamage").empty();
    wizard.active = true;
    if (player.class === "none" && enemy.class === "none") {    
        Object.assign(player, wizard);
        $(".characterChosen").append($(".wizardCard"));
        $(".characterChosen").addClass("character");
        $(".characterWizard").removeClass("character");
        $(".characterChosen").css("background-color", "#009933");
        $(".characterFighter").css("background-color", "#990000");
        $(".characterCleric").css("background-color", "#990000");
        $(".characterRogue").css("background-color", "#990000");
        $(".vsText").text("CHOOSE YOUR OPPONENT");
    }
    else {
        Object.assign(enemy, wizard);
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
    $(".enemyDamage").empty();
    $(".playerDamage").empty();
    cleric.active = true;
    if (player.class === "none" && enemy.class === "none") {
        Object.assign(player, cleric);
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
        Object.assign(enemy, cleric);
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
    $(".enemyDamage").empty();
    $(".playerDamage").empty();
    rogue.active = true;
    if (player.class === "none" && enemy.class === "none") {
        Object.assign(player, rogue);
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
        Object.assign(enemy, rogue);
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
    /* ONLY RUN COUNTERATTACK AND DEALDAMAGE IF THERE IS A PLAYER AND AN ENEMY */
    if(enemy.active === true && player.active === true){
        counterAttack();
        dealDamage();
        /* IF ALL CHARACTERS HAVE BEEN PICKED, PLAYER IS ALIVE AND ENEMIES ARE DEAD, SAY YOU WIN */
        if(fighter.active == true && wizard.active == true && cleric.active == true && rogue.active == true && player.healthPoints !== 0 && enemy.healthPoints == 0) {
            $(".vsText").text("YOU WIN");
        }
    }
    else {}   
}
var counterAttack = function() {
    /* REDUCE PLAYER HP  */
    player.healthPoints = (player.healthPoints - enemy.counterAttackPower);
    
    /* IF PLAYER IS STILL ALIVE */
    if(player.healthPoints > 0) {
        /* IF ENEMY IS STILL ALIVE, SAY ENEMY DAMAGE MESSAGE */
        if(enemy.class === "none") {}
        else {
            $(".enemyDamage").text("The enemy " + enemy.class + " dealt " + enemy.counterAttackPower + " points of damage!");
        }

        /* CHECK FOR PLAYER CLASS AND CHANGE RESPECTIVE DISPLAYED HP */
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
    /* IF PLAYER IS DEAD */
    else {
        player.healthPoints = 0;
        /* CHECK FOR PLAYER CLASS */
        if(player.class === "fighter") {
            /* CHANGE COLORS, MOVE CARD TO GRAVEYARD CHANGE HP TO 0 */
            $(".fighterGraveyard").css("background-color", "#009933");
            $(".fighterGraveyard").append($(".fighterCard"));
            $(".fighterCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".fighterGraveyard").addClass("character");
            $(".fighterHP").empty().append(player.healthPoints);
        }
        else if(player.class === "wizard") {
            $(".wizardGraveyard").css("background-color", "#009933");
            $(".wizardGraveyard").append($(".wizardCard"));
            $(".wizardCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".wizardGraveyard").addClass("character");
            $(".wizardHP").empty().append(player.healthPoints);
        }
        else if(player.class === "cleric") {
            $(".clericGraveyard").css("background-color", "#009933");
            $(".clericGraveyard").append($(".clericCard"));
            $(".clericCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".clericGraveyard").addClass("character");
            $(".clericHP").empty().append(player.healthPoints);
        }
        else if(player.class === "rogue") {
            $(".rogueGraveyard").css("background-color", "#009933");
            $(".rogueGraveyard").append($(".rogueCard"));
            $(".rogueCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".rogueGraveyard").addClass("character");
            $(".rogueHP").empty().append(player.healthPoints);
        }  
        /* CHANGE PLAYER COMBAT ZONE COLORS, REMOVE CARD, SAY YOU LOSE */
        player.active = false;
        $(".playerDamage").empty();
        $(".enemyDamage").empty();
        $(".characterChosen").empty();
        $(".characterChosen").css("background-color", "");
        $(".characterChosen").removeClass("character");
        $(".vsText").text("YOU LOSE");
    }
}
var dealDamage = function() {
    /* REDUCE ENEMY HP */
    enemy.healthPoints = (enemy.healthPoints - player.attackPower);
    /* IF PLAYER IS DEAD, CLEAR DAMAGE MESSAGE */
    if(player.class === "none") {
        $(".playerDamage").empty();
    }
    /* IF PLAYER IS ALIVE AND ENEMY IS ALIVE, SAY PLAYER DAMAGE MESSAGE AND APPLY DAMAGE */
    else if(enemy.class !== "none") {
        $(".playerDamage").text(" You dealt " + player.attackPower + " points of damage!")
        player.attackPower = (player.attackPower + player.baseAttackPower);
    }
    else {}
    /* IF ENEMY IS ALIVE */
    if(enemy.healthPoints > 0) {
        /* CHECK FOR ENEMY CLASS AND CHANGE RESPECTIVE DISPLAYED HP */
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
    /* IF ENEMY IS DEAD */
    else {
        enemy.active = false;
        enemy.healthPoints = 0;
        /* CHECK FOR ENEMY CLASS */
        if(enemy.class === "fighter") {
            /* CHANGE COLORS, MOVE CARD TO GRAVEYARD CHANGE HP TO 0 */
            $(".fighterGraveyard").css("background-color", "#990000");
            $(".fighterGraveyard").append($(".fighterCard"));
            $(".fighterCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".fighterGraveyard").addClass("character");
            $(".fighterHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "wizard") {
            $(".wizardGraveyard").css("background-color", "#990000");
            $(".wizardGraveyard").append($(".wizardCard"));
            $(".wizardCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".wizardGraveyard").addClass("character");
            $(".wizardHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "cleric") {
            $(".clericGraveyard").css("background-color", "#990000");
            $(".clericGraveyard").append($(".clericCard"));
            $(".clericCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".clericGraveyard").addClass("character");
            $(".clericHP").empty().append(enemy.healthPoints);
        }
        else if(enemy.class === "rogue") {
            $(".rogueGraveyard").css("background-color", "#990000");
            $(".rogueGraveyard").append($(".rogueCard"));
            $(".rogueCard").append($("<img class='skull' src='assets/images/skull.png' />"));
            $(".rogueGraveyard").addClass("character");
            $(".rogueHP").empty().append(enemy.healthPoints);
        }
        /* RESET ENEMY STATS, CHANGE ENEMY COMBAT ZONE COLORS, REMOVE CARD */
        Object.assign(enemy, resetObject);
        $(".enemyChosen").empty();
        $(".enemyChosen").css("background-color", "");
        $(".enemyChosen").removeClass("character");
        /* IF PLAYER IS DEAD, SAY YOU LOSE, OTHERWISE SAY CHOOSE NEXT OPPONENT */
        if(player.healthPoints === 0) {
            $(".vsText").text("YOU LOSE");
            $(".playerDamage").empty();
        }
        else {
            $(".vsText").text("CHOOSE YOUR NEXT OPPONENT")
        }
    }
}


/* RESET */
var reset = function() {
    /* RESET HP */
    $(".fighterHP").empty().append(fighter.healthPoints);
    $(".wizardHP").empty().append(wizard.healthPoints);
    $(".clericHP").empty().append(cleric.healthPoints);
    $(".rogueHP").empty().append(rogue.healthPoints);

    /* RESET COLORS */
    /* CHARACTER PANEL */
    $(".characterFighter").addClass("character");
    $(".characterFighter").css("background-color", "");
    $(".characterWizard").addClass("character");
    $(".characterWizard").css("background-color", "");
    $(".characterCleric").addClass("character");
    $(".characterCleric").css("background-color", "");
    $(".characterRogue").addClass("character");
    $(".characterRogue").css("background-color", "");
    /* COMBAT ZONE */
    $(".characterChosen").removeClass("character");
    $(".characterChosen").css("background-color", "");
    $(".enemyChosen").removeClass("character");
    $(".enemyChosen").css("background-color", "");
    /* GRAVEYARD */
    $(".fighterGraveyard").removeClass("character");
    $(".fighterGraveyard").css("background-color", "");
    $(".wizardGraveyard").removeClass("character");
    $(".wizardGraveyard").css("background-color", "");
    $(".clericGraveyard").removeClass("character");
    $(".clericGraveyard").css("background-color", "");
    $(".rogueGraveyard").removeClass("character");
    $(".rogueGraveyard").css("background-color", "");

    /* MOVE CARDS */
    $(".characterFighter").append($(".fighterCard"));
    $(".characterWizard").append($(".wizardCard"));
    $(".characterCleric").append($(".clericCard"));
    $(".characterRogue").append($(".rogueCard"));
    
    /* RESET OBJECTS */
    Object.assign(player, resetObject);
    Object.assign(enemy, resetObject);
    $(".playerDamage").empty();
    $(".enemyDamage").empty();
    $(".skull").remove();
    fighter.active = false;
    wizard.active = false;
    cleric.active = false;
    rogue.active = false;
    enemy.active = false;
    $(".vsText").text("CHOOSE YOUR CHARACTER");
}


$(document).ready(function() {

    $(".vsText").text("CHOOSE YOUR CHARACTER");

    /* APPEND HP TO CARD */
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

    /* BUTTONS */
    $(".attackButton").on("click", function() {
        attack();
    });
    $(".resetButton").on("click", function() {
        reset();
    });

});
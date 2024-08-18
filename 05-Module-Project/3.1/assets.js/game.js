// var playerName = 'Clank McKranK';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemHealth = 50;
var enemAttack = 12;

// fight function
var fight = function() {
    // Alert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators!");

    // ask platyer if they'd like to fight or run 
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this gattle? Enter "GIGHT" or "to choose.');

    if(promptFight === "fight" || promptFight === "FIGHT") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemHealth - playerAttack;
      console.log(
        playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemHealth + "health remaining"
      );

    //   check enemy's health
    if (enemHealth <= 0) {
        window.alert(enemyName + "has died!");
    }else {
        window.alert(enemyName + " still has " + enemHealth + "health left.");
    }

    // rmove players's health by subtracting the amount set in the enemyAttacm varkable
    playerHealth = playerHealth - enemAttack;
    console.log(
        enemyName + "attackex " + playerName + "." + playerName + "now has" + "health remining."
    );

    // check player's health 
    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");
    }else {
        windowwl.alert(playerName + "still has" + playerHealth +  "health left.");
    }
    // if player choses to skip
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip 
        var confirmSKIP = window.confirm("Are you sure you'd to quits?");

        // if yes (true), leave fight
        if(confirmSKIP) {
            window.alert(playerName + "has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        // if player did not chose 1 or 2 in prompt
    } else {
        window.alert("you need to pick a valid option. Try again!");
    }
}; // end of fight function

// fun fight function to start game
fight();

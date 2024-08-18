var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble' ];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter  for enemy's name)
var fight = function(enemyNames) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battl? Enter "FIGHT" or "SKIP" to choose.');

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skips thes fight. Goodbye!');
                // subtract money form playerMoney for dipping
                playerMoney = playerMoney - 10;
                console.log("playerMonney", playerMoney)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyNames + '. ' + enemyNames + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyNames + ' has died!');

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop sinve enemy is dead 
            break;
        } else {
            window.alert(enemyNames + ' still has ' + enemyHealth + ' health lefr.');
        }

        // remove players's health by subtracting the amount set in teh enemyAtttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        // check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            // leave while() loop if player is dead 
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    } // end of while loop
}; // end of fight function

// function to start a new game 
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time
   for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fightting
    if (playerHealth > 0) {
     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
     window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

     // pick new enemy to fight based on the index of the enemyNames array
     var pickedEnemyName = enemyNames[i];

     // reset enemyHealth before starting new fight
     enemyHealth = 50;

       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

         // if player is still alive and we're not at the last enemy in the array  
         if (playerHealth > 0 && i < enemyNames - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the stor before the next round?");

            // if yes, take them to the store() function
            if (storeConfirm) {
                shop();
            }
         }   
    }
    // if player is not alive, braeak out of fht loop and let endGame function run
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
   }

   // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
   endGame();
}

// function to end the entire game 
var endGame = function() {
    window.alert("The game has now ended. let's see how you did!");
     
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! you now have a score of " + playerMoney + '.');
    } else {
        window.alert("You've lost your robot in battle!");
    }

    // ask player if they'd like to play again
    var playerAgainConfirm = window.confirm('Would you like to play again?');

    if (playerAgainConfirm) {
        startGame();
    } else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }
};

// go to shop between function 
var shop = function() {
    // ask player what they'd like to do
    var shoopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
    );

    // use switch case to carry out action
    switch (shoopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money 
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
            case 'UPGRADE':
            case 'upgrade':
               if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
            case 'LEAVE':
            case 'leave':
                window.alert('Leaving the store.');

                //do nothing, so function will end 
                break;
            default:
              window.alert('You did not pick a valid option. Try again.');

            //  call shop() again to force player to pick a valid Option
            shop();
            break;   
    }
};

// start first game when page loads
startGame();

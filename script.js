// Run Escape
const enter = "Please enter one of the numarical options for your answer (ex \"1\" )";

const gameOver = "The adventure ends here. re-start to try again";

const start = `Welcome to Run Escape the worlds #1 Text Adventure Game. Click 'OK' to start the game.`;

const q1 = ` the goddess Lara Chiba has requested your aid in retriving the valum rose , an ancient potion. As you set off on your adventure into the mysterious land of Run you think to yourself \" maybe i could use some help.\" but other adventurers could be dangerous. would you like to ask for help?

1- Yes, I could use some help

2-No, I'm stronger than chuck noris, I don't need help.
${enter}`;

const gameOver1 = ` Your request for help was met by a man by the name of durial321. you realize quickly trusting another human was a mistake. the last thing you see is his green crown. you have died.

${gameOver}`;

const q2 = ` As you adventure alone , you find a cave. as you enter you see it is very very dark. what would you like to do?

1- Light the torch

2- Don't light a torch, I'm scared of fire!
${enter}`;

const gameOver2 = ` Good news! the fire didnt hurt you, but falling down the 60 foot hole did :/ you are dead.
 ${gameOver}`;

const q3 = ` As the torch begins to glow you see into the cave , a massive land bridge is revealed to you, 60 foot holes on either side. thank goodness you were smart enough to light the torch right? whats next?

1- Run across the bridge, im in a rush

2- W A L K
${enter}`;

const gameOver3 = ` Running was not the best idea, your rapid movements cause the weak land bridge to crumble sending you into the dark abyss. you died.

${gameOver}`;

const q4 = `as soon as you complete your walk across the land bridge you can tell its not sturdy, running across would not have been a great idea. sadly you're not out of trouble yet. as you enter the back rooms of the cave you spot some cave goblins before they spot you. what will you do?

1- ATTACK!!!

2- let's try to talk it out
${enter}`;

const gameOver4 = ` As you begin conversation with the goblins the beauty of one of the females catches your eye. you are so enamored you completely forget about the goddesses quest. You may live out the rest of your life with your goblin wife but you have failed the goddess. ${gameOver}`;

const q5 = `the goblins are quickly slain, who would want to talk to those ugly things anyway? you can see they were gaurding a box, would you like to open it?

1- no, that's stealing

2- yes! free loot!


${enter}`;

const gameOver5 = ` you decide to not open the box adventuring deeper into the cave, quickly becoming lost. maybe looting isnt such a bad idea.  ${gameOver}`;

const q6 = ` YOU FOUND IT! the potion the godess was looking for... and many others. your inventory can only hold 1 item, this is an old game after all. which potion should you take?


1- chiba
2- ralum rose
3- varal rune
4- valum rose
5- wait... I was supposed to remember that???
${enter}`;

const gameOver6 = `You exit the cave potion in hand, worried it may be the wrong one.

Your fears are suddenly realized as you hand the liquid back to the goddess. you have failed Lara, and the memory test.

${gameOver}`;

const win = `You exit the cave potion in hand, worried it may be the wrong one.

your fears are eased as lara takes the potion and begins to spray it upon herself. \" a goddess needs her perfume you know?\". perfume? this was all for perfume???? you will be rewarded handsomly for retrieving the \"potion\" , even if you really didn\'t know what you were retrieving in the first place.

YOU WIN`;


// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1ST Conditional Statement
// NOTE: Prompts returns the value entered as a string. That is why double equals is used instead of triple equals (AKA Strict Equality)
if (userInput == 2){
    userInput = prompt(q2);

    // 2ND Conditional Statement
    if (userInput == 1){
        userInput = prompt(q3);

        // 3RD Conditional Statement
        if (userInput == 2){
            userInput = prompt(q4);

            // 4TH Conditional Statement
            if (userInput == 1){
                userInput = prompt(q5);
                // 5
                if (userInput == 2){
                    userInput = prompt(q6);

                    // 6
                    if (userInput == 4){
                     alert(win);



                    } else {
                     alert(gameOver6);
                    }

                } else {
                alert(gameOver5);
                }

            } else {
                alert(gameOver4);
            }
        } else {
            alert(gameOver3);
        }
    } else {
        alert(gameOver2);
    }
} else {
    alert(gameOver1);
}
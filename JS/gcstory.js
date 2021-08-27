var printComplete = false;
var choiceOne = false;
var choiceTwo = false;
var storySequence = 0;
function sleep(ms) {
    return new Promise (
        resolve => setTimeout(resolve, ms)
    );
}
var gcStory = {
    printText: async function(arr) {
        if (arr.length === 0) {
            storySequence++;
            gcStory.storyLine();
        }
        var delayTime;
        //Search array for choices
        for (i = 0; i < arr.length; i++) {
            var choices = arr[i].includes("C2");
            //If there are choices
            if (choices === true) {
                //Remove C2 indicator from array text
                arr[i] = arr[i].slice(0, arr[i].lastIndexOf("_"));
            }
        }
        //If array has choices, print to game console & add choices in buttons
        if (choices === true) {
            //Iterate through array of strings, printing all but the choices
            for (i = 0; i < (arr.length - 2); i++) {
                //Set delay time adequate to read dependant on length
                if (arr[i].length <= 60) {delayTime = 5000; }
                if (arr[i].length > 60) { delayTime = 5500; }
                if (arr[i].length > 100) { delayTime = 6000; }
                if (arr[i].length > 150) { delayTime = 8000; }
                if (arr[i].length > 200) { delayTime = 9000; }
                GameConsole.printText(arr[i]);
                await sleep(delayTime);
            }
            ConsoleButtons.changeOption(arr[arr.length - 2], arr[arr.length - 1]);
        } else {
            //If there are no choices
            for (i = 0; i < (arr.length); i++) {
                //Set delay time adequate to read dependant on length
                if (arr[i].length <= 60) {delayTime = 5000; }
                if (arr[i].length > 60) { delayTime = 6000; }
                if (arr[i].length > 100) { delayTime = 7000; }
                if (arr[i].length > 150) { delayTime = 9000; }
                if (arr[i].length > 200) { delayTime = 10000; }
                GameConsole.printText(arr[i]);
                await sleep(delayTime);
            }
        }
        if (arr === storyIntroP2C1S1) {
            Player.death();
        }
        printComplete = true;
        if (storySequence > 0) { storySequence++; }
        gcStory.storyLine();    //Call to know what next step in story is
    },
    waitForChoice: function() {
        //If needs a choice from buttons, repeats here reading status
        if (choiceOne === false && choiceTwo === false) {
            setTimeout(gcStory.waitForChoice, 500);
        } else {
            //If choice is made, go to next story step
            gcStory.storyLine();
        }
    },
    choicePrint: function(choice1, choice2) {
        if (choiceOne === true) {
            choiceOne = false;
            printComplete = false;
            gcStory.printText(choice1);
        }
        if (choiceTwo === true) {
            choiceTwo = false;
            printComplete = false;
            gcStory.printText(choice2);
        }
    },
    checkPrintComplete: function(toPrint) {
        if (printComplete === true) {
            printComplete = false;
            gcStory.printText(toPrint);
        }
    },
    storyLine: function() {
        //IntroP1
        if (storySequence === 0) {
            if (printComplete === true) {
                storySequence++; //Called here as the first time it doesn't call in printText
            } else {
                //If not done printing, call this before creating buttons and moving on
                gcStory.printText(storyIntroP1);
            }
        }
            //IntroP1C1 & C2
            if (storySequence === 1) {
                PlayerLocation.setLocation("Space");
                gcStory.choicePrint(storyIntroP1C1, storyIntroP1C2);
            }
        //IntroP2
        if (storySequence === 2) {
            gcStory.checkPrintComplete(storyIntroP2);
        }
            //IntroP2C1 & C2
            if (storySequence === 3) {
                gcStory.choicePrint(storyIntroP2C1, storyIntroP2C2);
            }
                //IntroP2C1S1 & S2
                if (storySequence === 4) {
                    gcStory.choicePrint(storyIntroP2C1S1, storyIntroP2C1S2);
                }
        //IntroP3
        if (storySequence === 5) {
            gcStory.checkPrintComplete(storyIntroP3);
        }
        //IntroP4
        if (storySequence === 6) {
            PlayerLocation.setLocation("Earth");
            gcStory.checkPrintComplete(storyIntroP4);
        }
        //IntroP4C1 & C2
        if (storySequence === 7) {
            PlayerLocation.setLocation("The Lonely Island");
            gcStory.choicePrint(storyIntroP4C1, storyIntroP4C2);
        }
        if (storySequence === 8) {
            gcStory.checkPrintComplete(storyIntroP5);
            menuOps.initActions();
            Actions.addButton('Forage', Actions.goForaging);
            Actions.addButton('Collect Water', Actions.collectWater);
            Player.initialize();
            Environment.initialize();
            document.getElementById('gcButtonOne').remove();
            document.getElementById('gcButtonTwo').remove();
            introComp = true;
            Engine.saveGame();
        }
        
      

    }

}
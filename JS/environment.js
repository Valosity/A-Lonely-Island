function Condition(condName) {
    this.name = condName;
    this.value = 0;
    this.notifyMessage = 'Message not found';
    this.lowest = 1;
    this.low = 2;
    this.medium = 3;
    this.high = 4;
    this.highest = 5;
    this.currentCond = 3;
}

var Environment = {
    initialize: function() {
        //Create environmental conditions temp, hunger, & thirst
        //Fire created when its crafted
        //Temp created when gctext first time says its cold
        hunger = new Condition('hunger');
        thirst = new Condition('thirst');
        Environment.coldWorld();
    },
    coldWorld: function() {
        //Simulates environment, changing conditions with time
        setInterval(function() {
            if (typeof hunger !== "undefined") {
                Environment.ctrlWorld(hunger, -0.5);
                Environment.checkWorld(hunger);
            }
            if (typeof thirst !== "undefined") {
                if (typeof fire !== "undefined" && fire.value > 5) {
                    //More thirsty the higher the fire is
                    if (fire.value > 10) {
                        Environment.ctrlWorld(thirst, -3);
                    } else { Environment.ctrlWorld(thirst, -1); }
                    } 
                else { Environment.ctrlWorld(thirst, -0.5); }
                Environment.checkWorld(thirst);
            }
            if (typeof fire !== "undefined") {
            Environment.ctrlWorld(fire, -0.9);
            Environment.checkWorld(fire);
            } else {
                if (typeof temp !== "undefined") {
                GameConsole.printText("The cold is getting to you. Build a fire to survive");
                }
            }
            if (typeof temp !== "undefined") {
                if (typeof fire !== "undefined") {
                if (fire.value < -5) { Environment.ctrlWorld(temp, -1); }
                if (fire.value < 0 && fire.value >= -5) { Environment.ctrlWorld(temp, -0.5); }
                if (temp.value < 0) {
                if (fire.value < 5 && fire.value >= 0) { Environment.ctrlWorld(temp, 0.5); }
                } else {
                    //Do nothing
                }
                if (fire.value < 10 && fire.value >= 5) { Environment.ctrlWorld(temp, 1); }
                if (fire.value >= 10) { Environment.ctrlWorld(temp, 3); }
                } else {
                    Environment.ctrlWorld(temp, -1);
                }
                Environment.checkWorld(temp);
            }
        }, 10000);
    },
    ctrlWorld: function(condition, amount) {
        //Alter condition values
        condition.value += amount;
    },
    checkWorld: function(condition) {
        //Called by cold world to check if value reflects a different condition
        if (condition.value < -12) {
            Player.death(condition, 'low');
        }
        if (condition.value <= -10) {
            if (condition.currentCond !== condition.lowest) {
                let prevCond = condition.currentCond;
                condition.currentCond = condition.lowest;
                Environment.notify(condition, prevCond);
            }
        }
        if (condition.value <= -5 && condition.value > -10) {
            if (condition.currentCond !== condition.low) {
                let prevCond = condition.currentCond;
                condition.currentCond = condition.low;
                Environment.notify(condition, prevCond);
            }
        }
        if (condition.value <= 5 && condition.value > -5) {
            if (condition.currentCond !== condition.medium) {
                let prevCond = condition.currentCond;
                condition.currentCond = condition.medium;
                Environment.notify(condition, prevCond);
            }
        }
        if (condition.value < 10 && condition.value > 5) {
            if (condition.currentCond !== condition.high) {
                let prevCond = condition.currentCond;
                condition.currentCond = condition.high;
                Environment.notify(condition, prevCond);
            }
        }
        if (condition.value >= 10) {
            if (condition.currentCond !== condition.highest) {
                let prevCond = condition.currentCond;
                condition.currentCond = condition.highest;
                Environment.notify(condition, prevCond);
            }
        }
        if (condition.value > 12) {
            Player.death(condition, 'high');
        }
    },
    notify: function(condition, prevCond) {
        //Called when condition has changed
        //Notify messages:
        var fireUp = [  "The fire sparks to life, growing brighter and warmer", 
                        "The fire burns stronger. The warmth spreads through you",
                        "The fire is hot. Don't stand too close",
                        "The fire is scorching. Let it burn down or risk burning yourself"];
        var fireDown = ["The fire is out. You must manually relight it to fend off the cold",
                        "The fire grows dark. Stoke it or risk it going out",
                        "The fire shrinks to a comfortable size",
                        "The fire is burns hot, but no longer scorches you"];
        var tempUp = [  "You are still very cold but warming up",
                        "You warm up, your temperature now feels normal",
                        "You are getting very hot. Take it easy or drink water and don't over exert yourself",
                        "You are sweating profusely and in danger of overheating. Take a break or drink water to cool down"];
        var tempDown = ["You are freezing. Tend to the fire or risk hypothermia",
                        "You are getting cold. Tend to the fire to warm up",
                        "You cool down, your temperature now feels normal",
                        "You are still very hot, but cooling down"];
        var hungerUp = ["Your energy starts to come back. Your stomach rumbles but you are no longer starving",
                        "You feel neither hungry or full",
                        "You start to feel full",
                        "You've eaten too much. You're in a food coma and move sluggishly"];
        var hungerDown = [  "Your stomach is empty. You are starving. Eat something",
                            "Your stomach rumbles. You're hungry",
                            "You feel neither hungry or full",
                            "You no longer feel sluggish and overfull"];
        var thirstUp = ["Your throat burns with the water you drink, and is no longer dry but you are still thirsty",
                        "Your energy is back and your thirst is no longer urgent",
                        "You feel very hydrated and your thirst has been thoroughly quenched",
                        "You are overhydrated and feel nauseas"];
        var thirstDown = [  "Your throat is parched. Drink water or you will expire due to dehydration",
                            "Your throat begins to feel dry. You're thirsty",
                            "You feel hydrated and not thirsty",
                            "You no longer feel nauseas but still feel very thoroughly hydrated"];
        //Determines which direction condition changed and notifies accordingly
        if (condition.currentCond > prevCond) {
            //Condition went up
            if (prevCond === 1 && condition.currentCond === 2) {
                //Lowest to low
                if (condition.name === 'fire') { GameConsole.printText(fireUp[0]); }
                if (condition.name === 'temp') { GameConsole.printText(tempUp[0]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerUp[0]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstUp[0]); }
            }
            if (prevCond === 2 && condition.currentCond === 3) {
                //Low to medium
                if (condition.name === 'fire') { GameConsole.printText(fireUp[1]); }
                if (condition.name === 'temp') { GameConsole.printText(tempUp[1]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerUp[1]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstUp[1]); }
            }
            if (prevCond === 3 && condition.currentCond === 4) {
                //Medium to high
                if (condition.name === 'fire') { GameConsole.printText(fireUp[2]); }
                if (condition.name === 'temp') { GameConsole.printText(tempUp[2]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerUp[2]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstUp[2]); }
            }
            if (prevCond === 4 && condition.currentCond === 5) {
                //High to highest
                if (condition.name === 'fire') { GameConsole.printText(fireUp[3]); }
                if (condition.name === 'temp') { GameConsole.printText(tempUp[3]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerUp[3]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstUp[3]); }
            }
        } else {
            //Condition went down
            if (prevCond === 2 && condition.currentCond === 1) {
                //Low to lowest
                if (condition.name === 'fire') { GameConsole.printText(fireDown[0]); }
                if (condition.name === 'temp') { 
                    if (typeof fire !== "undefined") { GameConsole.printText(tempDown[0]); }
                    else { GameConsole.printText("You are freezing. Build a fire to warm up"); }
                }
                if (condition.name === 'hunger') { GameConsole.printText(hungerDown[0]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstDown[0]); }
            }
            if (prevCond === 3 && condition.currentCond === 2) {
                //Medium to low
                if (condition.name === 'fire') { GameConsole.printText(fireDown[1]); }
                if (condition.name === 'temp') { 
                    if (typeof fire !== "undefined") { GameConsole.printText(tempDown[1]); }
                    else { GameConsole.printText("You are getting cold. Build a fire to warm up"); }
                }
                if (condition.name === 'hunger') { GameConsole.printText(hungerDown[1]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstDown[1]); }
            }
            if (prevCond === 4 && condition.currentCond === 3) {
                //High to medium
                if (condition.name === 'fire') { GameConsole.printText(fireDown[2]); }
                if (condition.name === 'temp') { GameConsole.printText(tempDown[2]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerDown[2]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstDown[2]); }
            }
            if (prevCond === 5 && condition.currentCond == 4) {
                //Highest to high
                if (condition.name === 'fire') { GameConsole.printText(fireDown[3]); }
                if (condition.name === 'temp') { GameConsole.printText(tempDown[3]); }
                if (condition.name === 'hunger') { GameConsole.printText(hungerDown[3]); }
                if (condition.name === 'thirst') { GameConsole.printText(thirstDown[3]); }
            }
        }
    }
}

function sleep(ms) {
    return new Promise (
        resolve => setTimeout(resolve, ms)
    );
}
var forageForaged = false;
var waterCollected = false;
var woodChopped = false;
var miningMined = false;
var gcText = {
    firstTime: async function(action) {
        if (action === 'forage') {
            Actions.addButton('Eat', Actions.eatFood);
        }
        if (action === 'water') {
            Actions.addButton('Drink', Actions.drinkWater);
        }
        if (forageForaged === true && waterCollected === true) {
            let checkCreate = document.getElementById('Chop Wood');
            if (checkCreate === null || checkCreate === undefined) {
            await sleep(2000);
            gcStory.printText(storyIslandP1);
            await sleep(2000);
            Actions.addButton('Chop Wood', Actions.chopWood);
            PlayerInventory.changeTool('harvestTool', 'axe');
            Actions.addButton('Go Mining', Actions.goMining);
            PlayerInventory.changeTool('mineTool', 'pickaxe');
            }
        }
        if (woodChopped === true && miningMined === true) {
            await sleep(5000);
            gcStory.printText(storyIslandP3);
            await sleep(2000);
            if (document.getElementById('craftingTab') === undefined || document.getElementById('craftingTab') === null) {
                Crafting.initialize();
                menuOps.initCrafting();
            }
            Actions.addButton('Recover Blueprint', Actions.recoverBlueprint);
        }
        if (action === 'wood') {
            await sleep(5000);
            temp = new Condition('temp');
            GameConsole.printText("This island is cold...")
            await sleep(5000);
            GameConsole.printText("Building a fire could warm you up");
            await sleep(2000);
            if (document.getElementById('craftingTab') === undefined || document.getElementById('craftingTab') === null) {
            Crafting.initialize();
            menuOps.initCrafting();
            }
            Crafting.addButton('Build Fire', Crafting.campfire);
            
        }
        if (action === 'mining') {
            let buttonMade = document.getElementById('Recover Blueprint');
            if (buttonMade === undefined || buttonMade === null) {
            await sleep(1000);
            gcStory.printText(storyIslandP2);
            await sleep(1000);
            } else {
                return;
            }
        }
    },
    forage: async function(time) {
        //GameConsole.printText("You go foraging in the woods for something to eat...");
        await sleep(time);
        PlayerInventory.addToBag(food, 1);
        if (forageForaged === false && food.quantity > 0) {
            forageForaged = true;
            gcText.firstTime('forage');
        }
    },
    collectWater: async function(time) {
        //GameConsole.printText("You collect water from a nearby lake...");
        await sleep(time);
        PlayerInventory.addToBag(water, 1);
        if (waterCollected === false && water.quantity > 0) {
            waterCollected = true;
            gcText.firstTime('water');
        }
    },
    chopping: async function(item, qty) {
        //GameConsole.printText("Harvesting " + item.name + "...");
        await sleep(5000);
        PlayerInventory.addToBag(item, qty);
        //GameConsole.printText("You collected " + qty + " " + item.name + "!");
        if (woodChopped === false && wood.quantity > 0) { 
            woodChopped = true; 
            gcText.firstTime('wood');
        }
    },
    mining: async function(item1, qty1, item2, qty2, item3, qty3) {
        //GameConsole.printText("Mining...");
        await sleep(5000);
        if (typeof item1 !== "undefined" && typeof item2 === "undefined" && typeof item3 === "undefined") {
            //If only 1 is present
            PlayerInventory.addToBag(item1, qty1);
            if (qty1 > 0) {
            //GameConsole.printText("You found " + qty1 + " " + item1.name + "!");
            } else {
                //GameConsole.printText("You didnt find anything...");
            }
        }
        if (typeof item1 !== "undefined" && typeof item2 !== "undefined" && typeof item3 === "undefined") {
            //If 2 are present
            PlayerInventory.addToBag(item1, qty1);
            PlayerInventory.addToBag(item2, qty2);
            if (qty1 > 0 && qty2 > 0) {
                //If both items are above 0
                //GameConsole.printText("You found " + qty1 + " " + item1.name + 
                //" and " + qty2 + " " + item2.name + "!");
            }

        }
        if (typeof item1 !== "undefined" && typeof item2 !== "undefined" && typeof item3 !== "undefined") {
            //If all 3 are present
            PlayerInventory.addToBag(item1, qty1);
            PlayerInventory.addToBag(item2, qty2);
            PlayerInventory.addToBag(item3, qty3);
            //GameConsole.printText("You found " + qty1 + " " + item1.name + 
            //", " + qty2 + " " + item2.name + " and " + qty3 + item3.name + "!");
            
        }
        if (miningMined === false) {
            miningMined = true;
            gcText.firstTime('mining');
            
        }
    },
    recoveringBP: async function(currentQty) {
        //GameConsole.printText("Recovering blueprint...");
        PlayerInventory.removeFromBag(wood, currentQty);
        await sleep(5000);
        //GameConsole.printText("Recovered blueprint!");
        await sleep(500);
        craftingBP.nextBP();
    },
    stokingFire: async function() {
        if (fire.value > -10) {
            //Costs less as fire is already going
            PlayerInventory.removeFromBag(wood, 1);
            Environment.ctrlWorld(fire, 1.1);
            //GameConsole.printText("You stoke the fire");
        } else {
            //Costs more to restart fire
            PlayerInventory.removeFromBag(wood, 5);
            Environment.ctrlWorld(fire, 4);
            document.getElementById("Stoke Fire").innerHTML = "Stoke Fire";
            GameConsole.printText("You relight the fire");
        }
        
    },
    deepMining: async function(resc, qty) {
        if (resc !== 'Nothing') {
            await sleep(15000);
            PlayerInventory.addToBag(resc, qty);
        } else {
            await sleep(15000);
            GameConsole.printText("No resource was found in the depths of the mines...");
        }
    },
    crFire: async function(time) {
        GameConsole.printText ("Crafting a fire...");
        await sleep(time);
        GameConsole.printText("A flame flickers, and a warm fire sparks to life. Stoke it with Wood to keep warm");
        document.getElementById("Build Fire").remove();
        Actions.addButton("Stoke Fire", Actions.stokeFire);
        fire = new Condition('fire');
        PlayerInventory.removeFromBag(wood, 20);
        PlayerInventory.removeFromBag(stone, 5);
    },
    crMiningDrill: async function(time) {
        GameConsole.printText("Crafting Mining Drill...");
        PlayerInventory.removeFromBag(wood, 10);
        PlayerInventory.removeFromBag(stone, 10);
        PlayerInventory.removeFromBag(iron, 5);
        PlayerInventory.removeFromBag(copper, 5);
        await sleep(time);
        PlayerInventory.changeTool('mineTool', 'miningDrill');
        var mDrillButton = document.getElementById("Mining Drill");
        mDrillButton.remove();
        GameConsole.printText("Mining Drill Crafted!");
    },
    crStokingDrone: async function(time) {
        GameConsole.printText("Crafting Stoking Drone");
        await sleep(time);
        GameConsole.printText("Stoking Drone Crafted!");
        Drones.addDrone(stokingDrone);
        PlayerInventory.removeFromBag(stone, 20);
        PlayerInventory.removeFromBag(iron, 10);
        PlayerInventory.removeFromBag(copper, 10);
        PlayerInventory.removeFromBag(aluminum, 5);
        PlayerInventory.removeFromBag(wood, 15);
    },
    crWaterDrone: async function(time) {
        GameConsole.printText("Crafting Water Drone");
        await sleep(time);
        GameConsole.printText("Water Drone Crafted!");
        Drones.addDrone(waterDrone);
        PlayerInventory.removeFromBag(stone, 20);
        PlayerInventory.removeFromBag(iron, 10);
        PlayerInventory.removeFromBag(copper, 10);
        PlayerInventory.removeFromBag(aluminum, 5);
        PlayerInventory.removeFromBag(wood, 15);
    },
    crForagingDrone: async function(time) {
        GameConsole.printText("Crafting Foraging Drone");
        await sleep(time);
        GameConsole.printText("Foraging Drone Crafted!");
        Drones.addDrone(foragingDrone);
        PlayerInventory.removeFromBag(stone, 20);
        PlayerInventory.removeFromBag(iron, 10);
        PlayerInventory.removeFromBag(copper, 10);
        PlayerInventory.removeFromBag(aluminum, 5);
        PlayerInventory.removeFromBag(wood, 15);
    },
    crWoodDrone: async function(time) {
        GameConsole.printText("Crafting Wood Drone");
        await sleep(time);
        GameConsole.printText("Wood Drone Crafted!");
        Drones.addDrone(woodDrone);
        PlayerInventory.removeFromBag(stone, 20);
        PlayerInventory.removeFromBag(iron, 15);
        PlayerInventory.removeFromBag(copper, 15);
        PlayerInventory.removeFromBag(aluminum, 10);
        PlayerInventory.removeFromBag(wood, 20);
    },
    crMiningDrone: async function(time) {
        GameConsole.printText("Crafting Mining Drone");
        await sleep(time);
        GameConsole.printText("Mining Drone Crafted!");
        Drones.addDrone(miningDrone);
        PlayerInventory.removeFromBag(stone, 20);
        PlayerInventory.removeFromBag(iron, 15);
        PlayerInventory.removeFromBag(copper, 15);
        PlayerInventory.removeFromBag(aluminum, 10);
        PlayerInventory.removeFromBag(wood, 20);
    },
    crBreathingSuit: async function(time) {
        GameConsole.printText("Crafting Breathing Suit");
        await sleep(time);
        GameConsole.printText("Breathing Suit Crafted!");
        document.getElementById("Breathing Suit").remove();
        Actions.addButton('Go Deep Mining', Actions.deepMine);
        PlayerInventory.removeFromBag(stone, 250);
        PlayerInventory.removeFromBag(iron, 100);
        PlayerInventory.removeFromBag(copper, 100);
        PlayerInventory.removeFromBag(aluminum, 50);
        PlayerInventory.removeFromBag(wood, 500);
    },
    crDeepMiningDrone: async function(time) {
        GameConsole.printText("Crafting Deep Mining Drone");
        await sleep(time);
        GameConsole.printText("Deep Mining Drone Crafted!");
        Drones.addDrone(deepMiningDrone);
        PlayerInventory.removeFromBag(iron, 100);
        PlayerInventory.removeFromBag(copper, 100);
        PlayerInventory.removeFromBag(aluminum, 50);
        PlayerInventory.removeFromBag(lithium, 5);
        PlayerInventory.removeFromBag(titanium, 5);
    },
    crLongRangeRadio: async function(time) {
        GameConsole.printText("Crafting Long Range Radio");
        await sleep(time);
        GameConsole.printText("Long Range Radio Crafted!");
        Actions.addButton("Use LR Radio", Actions.emptyWorld);
        PlayerInventory.removeFromBag(copper, 150);
        PlayerInventory.removeFromBag(lithium, 50);
        PlayerInventory.removeFromBag(titanium, 50);
    }

}
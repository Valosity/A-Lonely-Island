var Crafting = {
    initialize: function() {
        var craftTab = document.createElement('div');
        craftTab.setAttribute('class', 'actCraftMenu');
        craftTab.setAttribute('id', 'craftTabMenu');
        wrapper.append(craftTab);
    },
    addButton: function(craftItem, func) {
        if (document.getElementById(craftItem) === undefined || document.getElementById(craftItem) === null) {
            var newButton = document.createElement('button');
            newButton.setAttribute('class', 'craftingButtons');
            newButton.setAttribute('id', craftItem);
            newButton.textContent = craftItem;
            if (craftItem === "Stoking Drone" && stokingDrone.quantity > 0) { 
                newButton.innerHTML = stokingDrone.name + "s(" + stokingDrone.quantity + ")"; }
            if (craftItem === "Water Drone" && waterDrone.quantity > 0) { 
                newButton.innerHTML = waterDrone.name + "s(" + waterDrone.quantity + ")"; }
            if (craftItem === "Foraging Drone" && foragingDrone.quantity > 0) { 
                newButton.innerHTML = foragingDrone.name + "s(" + foragingDrone.quantity + ")"; }
            if (craftItem === "Wood Drone" && woodDrone.quantity > 0) { 
                newButton.innerHTML = woodDrone.name + "s(" + woodDrone.quantity + ")"; }
            if (craftItem === "Mining Drone" && miningDrone.quantity > 0) { 
                newButton.innerHTML = miningDrone.name + "s(" + miningDrone.quantity + ")"; }
            newButton.disabled = false;
            newButton.addEventListener("click", function() { func(); })
            var craftMenu = document.getElementById('craftSide');
            craftMenu.append(newButton);
            }
    },
    buttonDisabled: async function(id, time) {
        var ele = document.getElementById(id);
        ele.disabled = true;
        if (time === 5000) { ele.classList.add('craftingButtons5s'); }
        if (time === 8000) { ele.classList.add('craftingButtons8s'); }
        if (time === 10000) { ele.classList.add('craftingButtons10s'); }
        await sleep(time);
        ele.disabled = false;
        if (time === 5000) { ele.classList.remove('actionButtons5s'); }
        if (time === 8000) { ele.classList.remove('craftingButtons8s'); }
        if (time === 10000) { ele.classList.remove('craftingButtons10s'); }
    },
    campfire: function() {
        //Costs 20 wood and 5 stone
        if (stone.quantity >= 5 && wood.quantity >= 20) {
            //Craft
            Crafting.buttonDisabled("Build Fire", 5000);
            gcText.crFire(5000);
        } else {
            GameConsole.printText("Crafting a fire requires 20 Wood and 5 Stone");
        }
    },
    miningDrill: function() {
        //Costs 10 stone, 5 iron and 5 copper and 10 wood to craft
        if (stone.quantity >= 10 && iron.quantity >= 5 && copper.quantity >= 5 && wood.quantity >= 10) {
            //Craft
            Crafting.buttonDisabled("Mining Drill", 5000);
            gcText.crMiningDrill(5000);
        }
        else {
            GameConsole.printText("Crafting the Mining Drill requires 10 Stone, 5 Iron, 5 Copper, and 10 Wood");
        }
    },
    stokingDrone: function() {
        //Costs 20 stone, 10 iron, 10 copper, 5 aluminum and 15 wood to craft
        if (document.getElementById('Stoke Fire') !== null) {
            if (stone.quantity >= 20 && iron.quantity >= 10 && copper.quantity >= 10 && aluminum.quantity >= 5 && wood.quantity >= 15) {
                if (stokingDrone.quantity !== 5) {
                    Crafting.buttonDisabled("Stoking Drone", 8000);
                    gcText.crStokingDrone(8000);
                } else {
                    Drones.addDrone(stokingDrone);
                }
            }
            else {
                GameConsole.printText("Crafting the Stoking Drone requires 20 Stone, 10 Iron, 10 Copper, 5 Aluminum, and 15 Wood");
            }
        } else {
            GameConsole.printText("You must have a fire for the drone to stoke");
        }
    },
    waterDrone: function() {
        //Costs 20 stone, 10 iron, 10 copper, 5 aluminum and 15 wood to craft
        if (stone.quantity >= 20 && iron.quantity >= 10 && copper.quantity >= 10 && aluminum.quantity >= 5 && wood.quantity >= 15) {
            if (waterDrone.quantity !== 5) {
            Crafting.buttonDisabled("Water Drone", 8000);
            gcText.crWaterDrone(8000);
            } else {
                Drones.addDrone(waterDrone);
            }
        }
        else {
            GameConsole.printText("Crafting the Water Drone requires 20 Stone, 10 Iron, 10 Copper, 5 Aluminum, and 15 Wood");
        }
    },
    foragingDrone: function() {
        //Costs 20 stone, 10 iron, 10 copper, 5 aluminum and 15 wood to craft
        if (stone.quantity >= 20 && iron.quantity >= 10 && copper.quantity >= 10 && aluminum.quantity >= 5 && wood.quantity >= 15) {
            if (foragingDrone.quantity !== 5) {
            Crafting.buttonDisabled("Foraging Drone", 8000);
            gcText.crForagingDrone(8000);
            } else {
                Drones.addDrone(foragingDrone);
            }
        }
        else {
            GameConsole.printText("Crafting the Foraging Drone requires 20 Stone, 10 Iron, 10 Copper, 5 Aluminum, and 15 Wood");
        }
    },
    woodDrone: function() {
        //Costs 20 stone, 15 iron, 15 copper, 10 aluminum, and 20 wood to craft
        if (stone.quantity >= 20 && iron.quantity >= 15 && copper.quantity >= 15 && aluminum.quantity >= 10 && wood.quantity >= 20) {
            if (woodDrone.quantity !== 5) {
            Crafting.buttonDisabled("Wood Drone", 10000);
            gcText.crWoodDrone(10000);
            } else {
                Drones.addDrone(woodDrone);
            }
        }
        else {
            GameConsole.printText("Crafting the Wood Drone requires 20 Stone, 15 Iron, 15 Copper, 10 Aluminum, and 20 Wood");
        }
    },
    miningDrone: function() {
        //Costs 20 stone, 15 iron, 15 copper, 10 aluminum, and 20 wood to craft
        if (stone.quantity >= 20 && iron.quantity >= 15 && copper.quantity >= 15 && aluminum.quantity >= 10 && wood.quantity >= 20) {
            if (miningDrone.quantity !== 5) {
                Crafting.buttonDisabled("Mining Drone", 10000);
                gcText.crMiningDrone(10000);
            } else {
                Drones.addDrone(miningDrone);
            }
        }
        else {
            GameConsole.printText("Crafting the Mining Drone requires 20 Stone, 15 Iron, 15 Copper, 10 Aluminum, and 20 Wood");
        }
    },
    breathingSuit: function() {
        if (stone.quantity >= 250 && iron.quantity >= 100 && copper.quantity >= 100 && aluminum.quantity >= 50 && wood.quantity >= 500) {
            Crafting.buttonDisabled('Breathing Suit', 10000);
            gcText.crBreathingSuit(10000);
        } else {
            GameConsole.printText("Crafting the Breathing Suit requires 250 Stone, 100 Iron, 100 Copper, 50 Aluminum, and 500 Wood");
        }
    },
    deepMiningDrone: function() {
        if (iron.quantity >= 100 && copper.quantity >= 100 && aluminum.quantity >= 50 && lithium.quantity >= 5 && titanium.quantity >= 5) {
            if (deepMiningDrone.quantity !== 5) {
                Crafting.buttonDisabled("Deep Mining Drone", 10000);
                gcText.crDeepMiningDrone(10000);
            } else {
                Drones.addDrone(deepMiningDrone);
            }
        } else {
            GameConsole.printText("Crafting the Deep Mining Drone requires 100 Iron, 100 Copper, 50 Aluminum, 5 Lithium and 5 Titanium");
        }
 
    },
    longRangeRadio: function() {
        if (copper.quantity >= 150 && lithium.quantity >= 50 && titanium.quantity >= 50) {
            Crafting.buttonDisabled("Long Range Radio", 10000);
            gcText.crLongRangeRadio(10000);
            document.getElementById("Long Range Radio").remove();
        } else {
            GameConsole.printText("Crafting the Long Range Radio requires 150 Copper, 50 Lithium, and 50 Titanium");
        }
    }
}
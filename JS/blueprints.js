var currentBP;
var craftingBP = {
    initialize: function() {
        currentBP = 1;
        //Set starting blueprint
    },
    currentBP: function() {
        if (currentBP === 1) { var qtyNeeded = 5; }
        if (currentBP === 2) { var qtyNeeded = 10; }
        if (currentBP === 3) { var qtyNeeded = 10; }
        if (currentBP === 4) { var qtyNeeded = 10; }
        if (currentBP === 5) { var qtyNeeded = 10; }
        if (currentBP === 6) { var qtyNeeded = 10; }
        if (currentBP === 7) { var qtyNeeded = 10; }
        if (currentBP === 8) { var qtyNeeded = 10; }
        if (currentBP === 9) { var qtyNeeded = 10; }
        return qtyNeeded;
        //Set current blueprint and qty needed
    },
    
    nextBP: function() {
        if (currentBP === 1) { 
            Crafting.addButton('Mining Drill', Crafting.miningDrill);
            GameConsole.printText("Blueprint recovered: The Mining Drill increases the variety of resources and maximum quantity of resources you can obtain through mining");
         }
        if (currentBP === 2) { 
            Crafting.addButton('Stoking Drone', Crafting.stokingDrone);
            GameConsole.printText("Blueprint recovered: The Stoking Drone will stoke the fire for you. More drones will ensure you always stay warm");
         }
        if (currentBP === 3) { 
            Crafting.addButton('Water Drone', Crafting.waterDrone);
            GameConsole.printText("Blueprint recovered: The Water Drone will collect water for you. More drones will ensure you always have sufficient water to stay hydrated");
         }
        if (currentBP === 4) { 
            Crafting.addButton('Foraging Drone', Crafting.foragingDrone);
            GameConsole.printText("Blueprint recovered: The Foraging Drone will collect food for you. More drones will ensure you have sufficient food so you don't starve");
         }
        if (currentBP === 5) { 
            Crafting.addButton('Wood Drone', Crafting.woodDrone);
            GameConsole.printText("Blueprint recovered: The Wood Drone will harvest wood for you. More drones will collect more wood");
         }
        if (currentBP === 6) { 
            Crafting.addButton('Mining Drone', Crafting.miningDrone);
            GameConsole.printText("Blueprint recovered: The Mining Drone will mine for you. More drones will mine more resources");
         }
        if (currentBP === 7) { 
            Crafting.addButton('Breathing Suit', Crafting.breathingSuit);
            GameConsole.printText("Blueprint recovered: The Breathing Suit allows you to venture deeper into the caves where the air is thin. The new resources down there may be scarce, but are worth the effort");
         }
        if (currentBP === 8) { 
            Crafting.addButton('Deep Mining Drone', Crafting.deepMiningDrone);
            GameConsole.printText("Blueprint recovered: The Deep Mining Drone will venture deep into the caves to mine for you. More drones will mine more resources");
         }
        if (currentBP === 9) { 
            Crafting.addButton('Long Range Radio', Crafting.longRangeRadio);
         }
        currentBP += 1;
    },
    /*
    BP 1 = Mining Drill
    BP 2 = Stoking Drone
    BP 3 = Water Collection Drone
    BP 4 = Foraging Drone
    BP 5 = Wood Harvesting Drone
    BP 6 = Mining Drone
    BP 7 = Breathing Suit
    BP 8 = Deep Mining Drone
    BP 9 = Long Range Radio
    */

}
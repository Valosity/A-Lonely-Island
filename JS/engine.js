



var Engine = {
    initialize: function() {
        //First time initialization of page
        introComp = false;
        Settings.initialize();
        GameConsole.initialize();
        PlayerInventory.initialize();
        PlayerInventory.initObjs();
        PlayerLocation.initialize();
        menuOps.initialize();
        Actions.initialize();
        craftingBP.initialize();
        Drones.initialize();
        gcStory.storyLine();
        
    },
    saveGame: function() {
        PlayerInventory.refreshInv();
        setInterval(function() {
        State = {
            introComp: introComp,
            itemArr: itemArr,
            food: food,
            water: water,
            wood: wood,
            stone: stone,
            iron: iron,
            copper: copper,
            aluminum: aluminum,
            lithium: lithium,
            titanium: titanium,
            location: plyrLoc,
            hunger: hunger,
            thirst: thirst,
            buttons: Engine.btnStatus("save"),
            stokingDrone: stokingDrone,
            waterDrone: waterDrone,
            foragingDrone: foragingDrone,
            woodDrone: woodDrone,
            miningDrone: miningDrone,
            deepMiningDrone: deepMiningDrone,
            mineTool: mineTool,
            harvestTool: harvestTool,
            currentBP: currentBP,
        }
        
            if (typeof(Storage) !== "undefined") {
                //Save data
                localStorage.setItem('saveFile', JSON.stringify(State));
            } else {
                //Browser not supported
                GameConsole.printText("Browser does not support save function. Try a different browser");
            }
        }, 5000);
        

    },
    loadGame: function() {
        save = JSON.parse(localStorage.getItem('saveFile')); 
        introComp = save.introComp
        itemArr = save.itemArr;
        food = save.food;
        water = save.water;
        wood = save.wood;
        stone = save.stone;
        iron = save.iron;
        copper = save.copper;
        aluminum = save.aluminum;
        lithium = save.lithium;
        titanium = save.titanium;
        hunger = save.hunger;
        thirst = save.thirst;
        stokingDrone = save.stokingDrone;
        waterDrone = save.waterDrone;
        foragingDrone = save.foragingDrone;
        woodDrone = save.woodDrone;
        miningDrone = save.miningDrone;
        deepMiningDrone = save.deepMiningDrone;
        mineTool = save.mineTool;
        harvestTool = save.harvestTool;
        currentBP = save.currentBP;
            if (introComp === true) {
                //Intro has been completed, so display everything
                Settings.initialize(); //
                GameConsole.initialize(); //
                Player.initialize(); //
                PlayerInventory.initialize(); //
                PlayerInventory.refreshInv(); //
                PlayerLocation.initialize(); //
                PlayerLocation.setLocation(save.location); //
                menuOps.initialize(); //
                menuOps.initActions(); //
                menuOps.initCrafting(); //
                Actions.initialize();
                Environment.coldWorld();
                Player.initialize();
                Engine.saveGame();
                GameConsole.printText("Previous progress loaded");
            } else {
                Engine.restartGame();
            }
        Engine.btnStatus("load");
    },
    restartGame: function() {
        localStorage.clear();
        location.reload();
    },
    btnStatus: function(process) {
        if (process === "save") {
            //Save buttons
            let btnsArr = [];
            if (document.getElementById('Forage') !== null) { btnsArr.push('Forage'); }
            if (document.getElementById('Collect Water') !== null) { btnsArr.push('Collect Water'); }
            if (document.getElementById('Eat') !== null) { btnsArr.push('Eat');  } 
            if (document.getElementById('Drink') !== null) { btnsArr.push('Drink'); }
            if (document.getElementById('Chop Wood') !== null) { btnsArr.push('Chop Wood'); }
            if (document.getElementById('Go Mining') !== null) { btnsArr.push('Go Mining'); }
            if (document.getElementById('Go Deep Mining') !== null) { btnsArr.push('Go Deep Mining'); }
            if (document.getElementById('Recover Blueprint') !== null) { btnsArr.push('Recover Blueprint'); }
            if (document.getElementById('Build Fire') !== null) { btnsArr.push('Build Fire'); }
            if (document.getElementById('Stoke Fire') !== null) { btnsArr.push('Stoke Fire'); }
            if (document.getElementById('Mining Drill') !== null) { btnsArr.push('Mining Drill'); }
            if (document.getElementById('Stoking Drone') !== null) { btnsArr.push('Stoking Drone'); }
            if (document.getElementById('Water Drone') !== null) { btnsArr.push('Water Drone'); }
            if (document.getElementById('Foraging Drone') !== null) { btnsArr.push('Foraging Drone'); }
            if (document.getElementById('Wood Drone') !== null) { btnsArr.push('Wood Drone'); }
            if (document.getElementById('Mining Drone') !== null) { btnsArr.push('Mining Drone'); }
            if (document.getElementById('Breathing Suit') !== null) { btnsArr.push('Breathing Suit'); }
            if (document.getElementById('Deep Mining Drone') !== null) { btnsArr.push('Deep Mining Drone'); }
            if (document.getElementById('Long Range Radio') !== null) { btnsArr.push('Long Range Radio'); }
            if (document.getElementById('Use LR Radio') !== null) { btnsArr.push('Use LR Radio'); }
            return btnsArr;
        } else {
            //Load buttons
            let btnsArr = save.buttons;
            if (btnsArr.includes('Forage')) { Actions.addButton('Forage', Actions.goForaging); }
            if (btnsArr.includes('Collect Water')) { Actions.addButton('Collect Water', Actions.collectWater); }
            if (btnsArr.includes('Eat')) { Actions.addButton('Eat', Actions.eatFood); }
            if (btnsArr.includes('Drink')) { Actions.addButton('Drink', Actions.drinkWater); }
            if (btnsArr.includes('Chop Wood')) { Actions.addButton('Chop Wood', Actions.chopWood); }
            if (btnsArr.includes('Go Mining')) { Actions.addButton('Go Mining', Actions.goMining); }
            if (btnsArr.includes('Go Deep Mining')) { Actions.addButton('Go Deep Mining', Actions.deepMine); }
            if (btnsArr.includes('Recover Blueprint')) { Actions.addButton('Recover Blueprint', Actions.recoverBlueprint); }
            if (btnsArr.includes('Build Fire')) { Crafting.addButton('Build Fire', Crafting.campfire); }
            if (btnsArr.includes('Stoke Fire')) { Actions.addButton("Stoke Fire", Actions.stokeFire); }
            if (btnsArr.includes('Mining Drill')) { Crafting.addButton('Mining Drill', Crafting.miningDrill); }
            if (btnsArr.includes('Stoking Drone')) { Crafting.addButton('Stoking Drone', Crafting.stokingDrone); }
            if (btnsArr.includes('Water Drone')) { Crafting.addButton('Water Drone', Crafting.waterDrone); }
            if (btnsArr.includes('Foraging Drone')) { Crafting.addButton('Foraging Drone', Crafting.foragingDrone); }
            if (btnsArr.includes('Wood Drone')) { Crafting.addButton('Wood Drone', Crafting.woodDrone); }
            if (btnsArr.includes('Mining Drone')) { Crafting.addButton('Mining Drone', Crafting.miningDrone); }
            if (btnsArr.includes('Breathing Suit')) { Crafting.addButton('Breathing Suit', Crafting.breathingSuit); }
            if (btnsArr.includes('Deep Mining Drone')) { Crafting.addButton('Deep Mining Drone', Crafting.deepMiningDrone); }
            if (btnsArr.includes('Long Range Radio')) { Crafting.addButton('Long Range Radio', Crafting.longRangeRadio); }
            if (btnsArr.includes('Use LR Radio')) { Crafting.addButton('Use LR Radio', Actions.emptyWorld); }
        }
    },

}


window.onload = function() {
    var firstTime = localStorage.getItem('firstTime');
    if (!firstTime) {
        //First time page has been loaded, initialize:
        localStorage.setItem('firstTime', '1');
        Engine.initialize();
    } else {
        //Page has been loaded before
        try {
            Engine.loadGame();
        } catch {
            Engine.restartGame();
        }
    }
}
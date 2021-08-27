var Actions = {
    initialize: function() {
        var actTab = document.createElement('div');
        actTab.setAttribute('class', 'actCraftMenu');
        actTab.setAttribute('id', 'actTabMenu');
        wrapper.append(actTab);
    },
    addButton: function(action, func) {
        if (document.getElementById(action) === undefined || document.getElementById(action) === null) {
            var newButton = document.createElement('button');
            newButton.setAttribute('class', 'actionButtons');
            newButton.setAttribute('id', action);
            newButton.textContent = action;
            newButton.disabled = false;
            newButton.addEventListener("click", function() { func(); })
            var actMenu = document.getElementById('actionSide');
            actMenu.append(newButton);
        }
    },
    buttonDisabled: async function(id, time) {
        var ele = document.getElementById(id);
        ele.disabled = true;
        if (time === 5000) { ele.classList.add('actionButtons5s'); }
        if (time === 8000) { ele.classList.add('actionButtons8s'); }
        if (time === 10000) { ele.classList.add('actionButtons10s'); }
        if (time === 15000) { ele.classList.add('actionButtons15s'); }
        await sleep(time);
        ele.disabled = false;
        if (time === 5000) { ele.classList.remove('actionButtons5s'); }
        if (time === 8000) { ele.classList.remove('actionButtons8s'); }
        if (time === 10000) { ele.classList.remove('actionButtons10s'); }
        if (time === 15000) { ele.classList.remove('actionButtons15s'); }
    },
    goForaging: function() {
        Actions.buttonDisabled('Forage', 8000);
        gcText.forage(8000);
    },
    eatFood: function() {
        if (food.quantity > 0) {
        Environment.ctrlWorld(hunger, 1);
        PlayerInventory.removeFromBag(food, 1);
        Actions.buttonDisabled('Eat', 10000);
        } else {
            GameConsole.printText("You have no food to eat");
        }
    },
    collectWater: function() {
        Actions.buttonDisabled('Collect Water', 8000);
        gcText.collectWater(8000);
    },
    drinkWater: function() {
        if (water.quantity > 0) {
            Environment.ctrlWorld(thirst, 1);
            PlayerInventory.removeFromBag(water, 1);
            Actions.buttonDisabled('Drink', 8000);
        } else {
            GameConsole.printText("You have no water to drink");
        }
    },
    getResc: function() { //This function could be written better
        //Find which resource that can be mined to mine
        if (mineTool.name === 'Pickaxe') {
            let calc = Math.random() * 100;
            if (calc >= 50) { return stone; } //50% chance of stone
            else if (calc < 50 && calc >= 30) { return iron; } //20% Iron
            else if (calc < 30 && calc >= 10) { return copper; } //20% Copper
            else { return aluminum; } //9% Aluminum
        }
        if (mineTool.name === 'Mining Drill') {
            let calc = Math.random() * 100;
            if (calc > 80) { return stone; } //20% Stone
            else if (calc < 81 && calc > 50) { return iron; } //30% Iron
            else if (calc < 51 && calc > 20) { return copper; } //30% Copper
            else { return aluminum; } //20% Aluminum
        }
    },
    getQty: function(item) {
        if (item !== wood) {
        var max = (item.multiplier * mineTool.eff); 
        } else {
            var max = (item.multiplier * harvestTool.eff);
        }
        var min = (item.multiplier * 1);
        var returnQty = Math.random() * (max - min) + min;
        return Math.round(returnQty);
    },
    chopWood: function() {
        var chopQty = Actions.getQty(wood);
        gcText.chopping(wood, chopQty);
        Actions.buttonDisabled('Chop Wood', 5000);
    },
    goMining: function() {
        
        //Issue with get resc as when those are overridden and stone passed, it works
        //Random quantity of items to be mined, between 1-3, likely towards 1
        var qtyItems;
        var quant = Math.round(Math.random() * (10 - 1) + 1);
        if (quant === 10) { qtyItems = 3; }
        if (quant > 6) { qtyItems = 2; } 
        else { qtyItems = 1; }
        if (qtyItems === 1) {
            let toMine = Actions.getResc();
            let mineQty = Actions.getQty(toMine);
            gcText.mining(toMine, mineQty);
        }
        if (qtyItems === 2) {
            let toMineOne = Actions.getResc();
            let mineQtyOne = Actions.getQty(toMineOne);
            let toMineTwo = Actions.getResc();
            let mineQtyTwo = Actions.getQty(toMineTwo);
            if (toMineOne.name === toMineTwo.name) {
                //If both the same resources, add and only output 1
                mineQtyOne += mineQtyTwo;
                mineQtyTwo = 0;
            }   
                //If both quantities are 0
                if (mineQtyOne === 0 && mineQtyTwo === 0) {
                    gcText.mining(toMineOne, mineQtyOne);
                }
                //If only 1 quantity is above 0
                    //Only q1 > 0
                    if (mineQtyOne > 0 && mineQtyTwo === 0) {
                        gcText.mining(toMineOne, mineQtyOne); }
                    //Only q2 > 0
                    if (mineQtyOne === 0 && mineQtyTwo > 0) {
                        gcText.mining(toMineTwo, mineQtyTwo); }
                //If 2 quantites are above 0
                    //q1 & q2 > 0
                    if (mineQtyOne > 0 && mineQtyTwo > 0) {
                        gcText.mining(toMineOne, mineQtyOne, toMineTwo, mineQtyTwo); }
                }
        if (qtyItems === 3) {
            let toMineOne = Actions.getResc();
            let mineQtyOne = Actions.getQty(toMineOne);
            let toMineTwo = Actions.getResc();
            let mineQtyTwo = Actions.getQty(toMineTwo);
            let toMineThree = Actions.getResc();
            let mineQtyThree = Actions.getQty(toMineThree);
            if (toMineOne.name === toMineTwo.name) {
                //If 1 and 2 are same, add and only print 1
                mineQtyOne += mineQtyTwo;
                mineQtyTwo = 0;
            }
            if (toMineOne.name === toMineThree.name) {
                //If 1 and 3 are the same, add and only print 1
                mineQtyOne += mineQtyThree;
                mineQtyThree = 0;
            }
            if (toMineTwo.name === toMineThree.name) {
                //If 2 and 3 are the same, add and only print 2
                mineQtyTwo += mineQtyThree;
                mineQtyThree = 0;
            }
            //If all quantities are 0
            if (mineQtyOne === 0 && mineQtyTwo === 0 && mineQtyThree === 0) {
                gcText.mining(toMineOne, mineQtyOne);
            }
            //If only 1 quantity is above 0
                //Only q1 > 0
                if (mineQtyOne > 0 && mineQtyTwo === 0 && mineQtyThree === 0) {
                    gcText.mining(toMineOne, mineQtyOne); }
                //Only q2 > 0
                if (mineQtyOne === 0 && mineQtyTwo > 0 && mineQtyThree === 0) {
                    gcText.mining(toMineTwo, mineQtyTwo); }
                //Only q3 > 0
                if (mineQtyOne === 0 && mineQtyTwo === 0 && mineQtyThree > 0) {
                    gcText.mining(toMineThree, mineQtyThree); }
            //If only 2 quantites are above 0
                //Only q1 & q2 > 0
                if (mineQtyOne > 0 && mineQtyTwo > 0 && mineQtyThree === 0) {
                    gcText.mining(toMineOne, mineQtyOne, toMineTwo, mineQtyTwo); }
                //Only q1 & q3 > 0
                if (mineQtyOne > 0 && mineQtyTwo === 0 && mineQtyThree > 0) {
                    gcText.mining(toMineOne, mineQtyOne, toMineThree, mineQtyThree); }
                //Only q2 & q3 > 0
                if (mineQtyOne === 0 && mineQtyTwo > 0 && mineQtyThree > 0) {
                    gcText.mining(toMineTwo, mineQtyTwo, toMineThree, mineQtyThree); }
            //If all 3 quantites are above 0
            if (mineQtyOne > 0 && mineQtyTwo > 0 && mineQtyThree > 0) {
                gcText.mining(toMineOne, mineQtyOne, toMineTwo, mineQtyTwo, toMineThree, mineQtyThree); }
            } 
        Actions.buttonDisabled('Go Mining', 5000);
        if (document.getElementById('Go Deep Mining') !== null) {
        Actions.buttonDisabled('Go Deep Mining', 5000);
        }
    },
    recoverBlueprint: function() {
        if (currentBP !== 9) {
        var currentQty = craftingBP.currentBP();
        console.log(currentQty + "   " + wood.quantity);
        if (wood.quantity >= currentQty) {
            Actions.buttonDisabled("Recover Blueprint", 5000);
            gcText.recoveringBP(currentQty);
            //Craft next
        } else {
            GameConsole.printText("You need " + (currentQty - wood.quantity) + " more wood to recover the next blueprint");
        }
    } else {
        GameConsole.printText("No more blueprints to recover!");
    }
    },
    stokeFire: function() {
        if (fire.value > -10) {
            if (wood.quantity > 0) {
                //Costs only 1 if fire is not out
                Actions.buttonDisabled("Stoke Fire", 5000);
                gcText.stokingFire();
            }
        } else {
            if (wood.quantity > 5) {
                //Costs 5 if fire is out
                Actions.buttonDisabled("Stoke Fire", 5000);
                gcText.stokingFire();
            }
        }
    },
    deepMine: function() {
        let calc = Math.random() * 100;
        console.log(calc);
        if (calc > 40) { var dmResc = 'Nothing'; }
        else if (calc < 41 && calc > 20) { var dmResc = titanium; } //20% Chance
        else { var dmResc = lithium; } //20% Chance
        gcText.deepMining(dmResc, 1);
        Actions.buttonDisabled('Go Deep Mining', 15000);
        Actions.buttonDisabled('Go Mining', 15000);
    }, 
    emptyWorld: async function() {
        Actions.buttonDisabled('Use LR Radio', 10000);
        document.getElementById("Use LR Radio").remove();
        GameConsole.printText('You use hold down the transmit button on the Long Range Radio... "Hello? Is anyone out there? Hello?"');
        await sleep(5000);
        GameConsole.printText('Silence... Then, the radio crackles to life.. "Hello? Is this real? Are you a human? Ive been scouring the world for others.. I thought I was the only one left..."');
        await sleep(5000);
        window.alert("The End..");
    }
}


//Resource constructor function
function Resource(rescName, mult) {
    this.name = rescName;
    this.quantity = 0;
    this.delay;
    this.multiplier = mult;
}



var PlayerInventory = {
    initialize: function() {
        var invDiv = document.createElement('div')
        invDiv.setAttribute('class', 'inventory');
        invDiv.setAttribute('id', 'inventoryDiv');
        wrapper.append(invDiv);
        var itemQty = document.createElement('div');
        itemQty.setAttribute('class', 'inventory');
        itemQty.setAttribute('id', 'invItemDiv');
        wrapper.append(itemQty);
    },
    initObjs: function() {
        //Create objects
        food = {
            name: 'Food',
            quantity: 0,
        }
        water = {
            name: 'Water',
            quantity: 0,
        }
        wood = new Resource('Wood', 4); 
        stone = new Resource('Stone', 2);   //75% chance, 80% w mining drill
        iron = new Resource('Iron', 0.9);   //30% chance, 45% w mining drill
        copper = new Resource('Copper', 0.8);   //20% chance, 35% w mining drill
        aluminum = new Resource('Aluminium', 0.7);  //10% chance, 20 w mining drill
        titanium = new Resource('Titanium', 1); //20% chance deep mining
        lithium = new Resource('Lithium', 1); //20% chance deep mining
        itemArr = [];
        //Create Tools
        harvestTool = {
            name: null,
            eff: null,
            canMine: null,
        }
        mineTool = {
            name: null,
            eff: null,
            canMine: null,
        }
    },
    addToBag: function(item, qty) {
        //Checks if item is in array
        if (qty === 0) { return; }
        if (itemArr.filter(e => e.name === item.name).length > 0) {
            //If it is, update item quantity
            item.quantity += qty;   //Updating object quantity
            //Updating quantity in the array that the object is saved to
            let itemIndex = itemArr.findIndex(e => e.name === item.name);
            itemArr[itemIndex].quantity = item.quantity;
        } else {
            //If it's not, add it to the array & update quantity
            itemArr.push(item)
            item.quantity += qty
        }
        PlayerInventory.refreshInv();
    },
    removeFromBag: function(item, qty) {
        //Checks if item is in array
        if (itemArr.filter(e => e.name === item.name).length > 0) {
            //If it is, reduce by quantity given
            item.quantity -= qty;   //Reducing quantity in the object
            //Reducing quantity in the array that the object is saved to
            let itemIndex = itemArr.findIndex(e => e.name === item.name);
            itemArr[itemIndex].quantity = item.quantity;
            //If the value is now less than 0, make it 0
            if (item.quantity < 0) {
                item.quantity = 0;
            }
            //If value is 0, remove it from the array
            if (item.quantity === 0) {
                if (itemIndex !== -1) {
                    itemArr.splice(itemIndex, 1);
                }
            }
        } else {
            console.log("Item " + item.name + " not found");
        }
        PlayerInventory.refreshInv();

    },
    refreshInv: function() {
        //Sort itemArr alphabetically
        itemArr.sort((a,b) => (a.name > b.name) ? 1 : -1);
        //Get inventory element and wipe any text content
        var invDiv = document.getElementById('inventoryDiv');
        invDiv.innerHTML = "";
        var invItemDiv = document.getElementById('invItemDiv');
        invItemDiv.innerHTML = "";
        //Iterate through the array and add all text elements in alphabetical order
        for (i = 0; i < itemArr.length; i++) {
            invDiv.innerHTML += itemArr[i].name + ":" + "<br/>";
            invItemDiv.innerHTML += itemArr[i].quantity + "<br/>";
        }
    },
    changeTool: function(toolType, newTool) {
        if (toolType === 'mineTool') {
            if (newTool === 'pickaxe') {
                mineTool.name = 'Pickaxe';
                mineTool.eff = 2;
                mineTool.canMine = ['stone', 'iron', 'copper'];
            }
            if (newTool === 'miningDrill') {
                mineTool.name = 'Mining Drill';
                mineTool.eff = 3;
                mineTool.canMine = ['stone', 'iron', 'copper', 'aluminum'];
            }
        }
        if (toolType === 'harvestTool') {
            if (newTool === 'axe') {
                harvestTool.name = 'Axe';
                harvestTool.eff = 2;
                harvestTool.canMine = ['wood'];
            }
        }
    }
    

}
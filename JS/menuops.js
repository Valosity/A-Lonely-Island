 /*
    Initial init:
    Create card
    Create front & back sides of card
    Action init:
    Create a button for action side, not a toggle
    
    Crafting init:
    Create a button for crafting side, not a toggle

    */
var menuOps = {
   initialize: function() {
        //Create element that will hold tabs
        var tabsEl = document.createElement('div');
        tabsEl.setAttribute('class', 'menuTabs');
        tabsEl.setAttribute('id', 'menuTabsList');
        wrapper.append(tabsEl);
        //Create card element
        var crdEl = document.createElement('div');
        crdEl.setAttribute('class', 'menuCard');
        crdEl.setAttribute('id', 'menuCard');
        wrapper.append(crdEl);
    },
    initActions: function() {
        //Create action side of card
        let actEl = document.createElement('div');
        actEl.setAttribute('class', 'actionSide');
        actEl.setAttribute('id', 'actionSide');
        let crdEl = document.getElementById('menuCard');
        crdEl.appendChild(actEl);
        //Create tab to select actions menu
        let actionTab = document.createElement('button');
        actionTab.setAttribute('class', 'menuTab');
        actionTab.setAttribute('id', 'actionTab');
        actionTab.textContent = "Actions";
        actionTab.addEventListener("click", function() { 
        menuOps.switchMenu('actions'); });
        actionTab.classList.add('menuTabSelected');
        let tabsEl = document.getElementById('menuTabsList');
        tabsEl.appendChild(actionTab);
    },
    initCrafting: function() {
        //Create crafting side of card
        let crftEl = document.createElement('div');
        crftEl.setAttribute('class', 'craftSide');
        crftEl.setAttribute('id', 'craftSide');
        crftEl.innerHTML = "Crafting Side";
        let crdEl = document.getElementById('menuCard');
        crdEl.appendChild(crftEl);
        //Create tab to select crafting menu
        let craftingTab = document.createElement('button');
        craftingTab.setAttribute('class', 'menuTab');
        craftingTab.setAttribute('id', 'craftingTab');
        craftingTab.textContent = "Crafting";
        craftingTab.addEventListener("click", function() { 
        menuOps.switchMenu('crafting'); })
        let tabsEl = document.getElementById('menuTabsList');
        tabsEl.appendChild(craftingTab);
        //Set menu as action menu by default
        menuOps.switchMenu('actions');
    },
    switchMenu: function(menuTo) {
        let crd = document.getElementById('menuCard');
        if (crd.classList.contains('flipCard') === true) {
            //Currently on crafting side
            if (menuTo === 'crafting') {
                //Do nothing, already there
            } else {
                //Display actions
                document.getElementById('craftSide').style.zIndex = '0';
                document.getElementById('actionSide').style.zIndex = '1';
                crd.classList.remove('flipCard');
                let crftTab = document.getElementById('craftingTab');
                crftTab.classList.remove('menuTabSelected');
                let actTab = document.getElementById('actionTab');
                actTab.classList.add('menuTabSelected');
            }
        } else {
            //Current on actions side
            if (menuTo === 'actions') {
                //Do nothing, already there
            } else {
                //Display crafting
                document.getElementById('actionSide').style.zIndex = '0';
                document.getElementById('craftSide').style.zIndex = '1';
                crd.classList.add('flipCard');
                let actTab = document.getElementById('actionTab');
                actTab.classList.remove('menuTabSelected');
                let crftTab = document.getElementById('craftingTab');
                crftTab.classList.add('menuTabSelected');
            }
        }
    }

}
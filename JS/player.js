var playerNameInput;
var Player = {
    initialize: function() {
        //Create div to hold info
        playerDisplay = document.createElement('div');
        playerDisplay.setAttribute('id', 'playerDisplay');
        wrapper.append(playerDisplay);

        //Create name display
        playerInv = document.createElement('p');
        playerInv.setAttribute('class', 'playerInfoDisplay');
        playerInv.setAttribute('id', 'playerNameDisplay');
        playerInv.innerHTML = 'Inventory';
        playerDisplay.append(playerInv);
    },
    death: function(cause, direction) {
        if (typeof cause !== 'undefined') {
            window.alert("You died due to " + cause.name + " being too " + direction);
        }
        else { 
            window.alert("You have died. Better luck next time...");
        }
        Engine.restartGame(); 
    }, 
    
}
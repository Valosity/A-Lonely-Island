var GameConsole = {
    initialize: function() {
        //Create the game console
        gameConEle = document.createElement('div');
        gameConEle.setAttribute('class', 'gameConsole');
        gameConEle.setAttribute('id', 'gameConsole');

        //Create the gradient for the game console & attach to console
        gameConGrad = document.createElement('div');
        gameConGrad.setAttribute('id', 'consoleGradient');
        gameConEle.append(gameConGrad);

        //Attach game console to wrapper
        wrapper.append(gameConEle);
    },
    //Clears text that has been hidden
    clearText: function() {
        var textToCheck = document.getElementsByClassName('gcText');
        var bodyRect = document.getElementById('consoleGradient').getBoundingClientRect();
        for (let i = 0; i < textToCheck.length; i++) {
            let elemRect = textToCheck.item(i).getBoundingClientRect();
            let elePos = elemRect.top - bodyRect.top;
            if ((elemRect.top - bodyRect.top) > 300) {
                textToCheck.item(i).parentNode.removeChild(textToCheck.item(i));
            }
        }
    },
    //Call this to print text
    printText: function(text) {
        var newParagraph = document.createElement('p');
        newParagraph.setAttribute('class', 'gcText');
        newParagraph.setAttribute('id', 'gcId');
        newParagraph.innerHTML = text;
        document.getElementById('gameConsole').prepend(newParagraph);
        GameConsole.clearText();
    }
}
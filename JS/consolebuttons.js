var ConsoleButtons = {
    initialize: function() {
        //Create div buttons will be within
        var gcButtons = document.createElement('div');
        gcButtons.setAttribute('id', 'gcButton');
        
        //Create button one and append to button div
        var cbOne = document.createElement('button');
        cbOne.setAttribute('class', 'gcButtons');
        cbOne.setAttribute('id', 'gcButtonOne');
        cbOne.addEventListener("click", function() { ConsoleButtons.cbOneClick(); });
        gcButtons.append(cbOne);

        //Create button two and append to button div
        var cbTwo = document.createElement('button');
        cbTwo.setAttribute('class', 'gcButtons');
        cbTwo.setAttribute('id', 'gcButtonTwo');
        cbTwo.addEventListener("click", function() { ConsoleButtons.cbTwoClick(); });
        gcButtons.append(cbTwo);

        //Append button div to wrapper
        wrapper.append(gcButtons);
    },
    //Call this to change text content within console buttons
    changeOption: function(buttonOne, buttonTwo) {
        if (storySequence === 0) {
            //Create console buttons 
            ConsoleButtons.initialize();
        }
        document.getElementById('gcButtonOne').textContent = buttonOne;
        document.getElementById('gcButtonTwo').textContent = buttonTwo;
    },
    //Called when button one is clicked
    cbOneClick: function() {
        if (printComplete === true) {
        choiceOne = true;
        ConsoleButtons.changeOption("", "");
        gcStory.storyLine();
        } else {
            console.log("No selection currently available");
        }
    },
    //Called when button two is clicked
    cbTwoClick: function() {
        if (printComplete === true) {
            choiceTwo = true;
            ConsoleButtons.changeOption("", "");
            gcStory.storyLine();
            } else {
                console.log("No selection currently available");
            }
    }
}
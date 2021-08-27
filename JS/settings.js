var settingsDisplayed;
var Settings = {
    initialize: function() {
        //Create settings toggle div
        var settings = document.createElement('div');
        settings.setAttribute('class', 'settings');
        settings.setAttribute('id', 'settings');
        wrapper.append(settings);
        //Create settings button
        var settingsButton = document.createElement('button');
        settingsButton.setAttribute('class', 'settingsButton');
        settingsButton.setAttribute('id', 'settingsButton');
        settingsButton.textContent = "Settings";
        settingsButton.addEventListener("click", function() { Settings.toggleDisplay(); });
        settings.append(settingsButton);
        //Create div containing settings options
        var settingsMenu = document.createElement('div');
        settingsMenu.setAttribute('class', 'settingsMenu');
        settingsMenu.setAttribute('id', 'settingsMenu');
        settings.append(settingsMenu);
        //Create settings options
        Settings.createOption("Save");
        Settings.createOption("Restart", Engine.restartGame);
        Settings.createOption("Dark Mode");
        Settings.createOption("github");
        //Hide settings options
        settingsDisplayed = true;
        Settings.toggleDisplay();
    },
    createOption: function(option, action) {
        //New option constructor
        var newOption = document.createElement('button');
        newOption.setAttribute('class', 'settingsOptions');
        newOption.setAttribute('id', option);
        newOption.textContent = option;
        newOption.addEventListener("click", function() { action(); });
        document.getElementById('settingsMenu').append(newOption);
    },
    toggleDisplay: function() {
        if (settingsDisplayed === false) {
            //If there are no settings displayed and this is called, display
            settingsDisplayed = true;
            //Get all options and display them
            var options = document.getElementsByClassName('settingsOptions');
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'inline-block';
                options[i].classList.add('isVisible');
                options[i].classList.remove('notVisible');
            }
        } else {
            //If the settings are displayed and this is called, hide
            settingsDisplayed = false;
            var options = document.getElementsByClassName('settingsOptions');
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'none';
                options[i].classList.remove('isVisible');
                options[i].classList.add('notVisible');
            }
        }
    }
}
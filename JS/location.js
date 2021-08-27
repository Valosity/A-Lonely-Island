var PlayerLocation = {
    initialize: function() {
        var locDisp = document.createElement('div');
        locDisp.setAttribute('class', 'locationDisp');
        locDisp.setAttribute('id', 'locationDisp');
        wrapper.append(locDisp);
        locDisp.innerHTML = "";
    },
    setLocation: function(location) {
        document.getElementById('locationDisp').innerHTML = location;
        plyrLoc = location;
    }
}
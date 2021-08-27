function drone(name) {
    this.name = name,
    this.quantity = 0;
}
var Drones = {
    initialize: function() {
        stokingDrone = new drone("Stoking Drone");
        waterDrone = new drone("Water Drone");
        foragingDrone = new drone("Foraging Drone");
        woodDrone = new drone("Wood Drone");
        miningDrone = new drone("Mining Drone");
        deepMiningDrone = new drone("Deep Mining Drone");
        Drones.activate();
    },
    addDrone: function(drone) {
        if (drone.quantity !== 5) {
        drone.quantity += 1;
        document.getElementById(drone.name).innerHTML = drone.name + "s(" + drone.quantity + ")";
        } else {
            //Remove button if you have 5, can't craft anymore
            GameConsole.printText("You have reached the maximum number of " + drone.name + "s craftable");
        }
    },
    activate: function() {
        setInterval(function() {
            //Stoking Drone
            if (stokingDrone.quantity > 0) {
                if (fire.value < 10 && fire.value > -10) {
                    //Won't stoke too high or when fire is out
                    Environment.ctrlWorld(fire, (0.18 * stokingDrone.quantity));
                }
            }
            //Water Drone
            if (waterDrone.quantity > 0) {
                PlayerInventory.addToBag(water, (1 * waterDrone.quantity));
            }
            //Foraging Drone
            if (foragingDrone.quantity > 0) {
                PlayerInventory.addToBag(food, (1 * foragingDrone.quantity));
            }
            //Wood Drone
            if (woodDrone.quantity > 0) {
                let chopQty = (Actions.getQty(wood) * woodDrone.quantity);
                PlayerInventory.addToBag(wood, chopQty);
            }
            //Mining Drone
            if (miningDrone.quantity > 0) {
                let toMine = Actions.getResc();
                let mineQty = (Actions.getQty(toMine) * miningDrone.quantity);
                PlayerInventory.addToBag(toMine, mineQty);
            }
            if (deepMiningDrone.quantity > 0) {
                let calc = Math.random() * 100;
                if (calc > 40) { var dmResc = 'Nothing'; }
                else if (calc < 41 && calc > 20) { var dmResc = titanium; } //20% Chance
                else { var dmResc = lithium; } //20% Chance
                let quant = deepMiningDrone.quantity;
                if (dmResc !== 'Nothing') {
                    PlayerInventory.addToBag(dmResc, quant);
                }
            }
        }, 10000);
    }
}
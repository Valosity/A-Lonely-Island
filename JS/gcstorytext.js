const storyIntroP1 = [
/* Space */
/* 1 */    "You gaze upon a vibrant green forest. The smell of the grass and blooming spring flowers greet you",
/* 2 */     "Spinning in a full circle, the luscious forest surrounds you",
/* 3 */     "Laughter spills out of you. It's been so long. This day felt like it would never come",
/* 4 */     "Your cheek is wet. It must be tears of happiness",
/* 5 */     "As you wipe the tears away, your hand comes away red. You're bleeding",
/* 6 */     "As your eyes fly open, reality sets in",
/* 7 */     "The bright lights of the habitat flood your eyes",
/* 8 */     "Red lights flash. The sounds of the forest give way to a blaring alarm",
/* 9 */     "Something has happened. You were just drinking a cup of coffee, gazing out a window at the earth.",
/* 10 */     "And then… there had been a blinding flash, so bright you couldn’t see anything, and then… the forest. A dream. You had passed out.",
/* 11 */     "Struggling to your feet, you look around you. Nothing appears to be immediately damaged, although anything not secured now lay scattered across the habitat.",
/* 12 */     "You’ve been here for nearly 2 years. An experiment to study the effects of humans in space for long periods of time.",
/* 13 */     "The technology needed to colonize Mars had nearly been completed. The dilemma they now faced was if the humans could survive the conditions, both physically and mentally",
/* 14 */     "The mental toll was certainly great. Limited contact with others was a part of the experiment. You haven’t spoken to anyone else since the last supply shipment, nearly 6 months ago.",
/* 15 */     "But what happened? What was that flash?",
/* 16 */     "Orienting yourself, you head to the control console to investigate the cause of that deafening alarm.",
/* 17 */     "The console is flashing a warning “Radiation Alert”.",
/* 18 */     "Opening the alarm display, it reads “External radiation levels pose a threat to survival. Remain inside the habitat until levels return to normal”.",
/* 19 */     "You remember the times this has happened before. Solar flares have even damaged some of the equipment, but the increased radiation levels have caused repairs to be delayed a few days until they decreased.",
/* 20 */     "But… they’ve never caused a flash quite like that before.",
/* 21 */     "Looking through the log, the radiation levels show a dramatic increase in ionizing radiation 2 days ago. You’ve been out for that long? Can’t be. You’ve never seen levels this high before.. The sensor must be broken.",
/* 22 */     "Silencing the alarm, you ponder what to do next",
/* Option 1 */ "Contact command on Earth for more information",
/* Option 2 */ "Get the medkit and fix up the gash on your head_C2"
]
    const storyIntroP1C1 = [
    "You walk over to the comms display. Hitting the button for command, a screen pops up. It’s black. All you can hear is the evacuation alarm in the background.",
    "Something must be wrong with the comms. Switching to the backup, you try again. Same thing."
    //Go to intro 23
    ];
    const storyIntroP1C2 = [
    "Shuffling over to the medkit, you open it up. You take the only bandage out, and patch up the gash. Well, at least the next supply shipment should be here any day now",
    "But what if this radiation mess delays it? There are reserves, but you were really looking forward to the letters from your family. The limited contact still allowed letters, and they’ve kept you sane through this venture",
    "Maybe contacting command would be a good idea. Even though it’s been forbidden aside from emergencies.. This seems like it qualifies as an emergency",
    "You walk over to the comms display. Hitting the button for command, a screen pops up. It’s black. All you can hear is the evacuation alarm in the background.",
    "Something must be wrong with the comms. Switching to the backup, you try again. Same thing."
    //Go to intro 23
    ];
const storyIntroP2 = [
/* 23 */    "None of the communications with Earth are working.. They told you that’d never be an issue. They said if the primary comms fail, the backup won’t. Liars.",
/* 24 */    "The supply ship should be coming any day…",
/* Option 1 */ "Wait for the supply shipment to arrive",
/* Option 2 */ "Take matters into your own hands. Something doesn’t feel right._C2"
];
    const storyIntroP2C1 = [
    "Days go by. Looking out the window into the emptiness, you think how much those letters could set your mind at ease right now.",
    "Time passes. Nothing arrives. Foods getting low. You’re on to emergency rations. Your rumbling stomach doesn’t like being starved.",
    /* Option 1 */ "Continue waiting. It must’ve been delayed, it’ll be here soon",
    /* Option 2 */ "Take action. You suspect the shipment isn’t coming._C2"
    ];
        const storyIntroP2C1S1 = [
        "Weeks pass. Your limbs are paper thin. There isn’t any more food. You decide to abandon the ship, and return to earth.",
        "You try to get up. You can’t. You have no more muscle. This is the end of your journey. You have died..."
        ];
        const storyIntroP2C1S2 = [
        //Nothing, go to next step
        ];
    const storyIntroP2C2 = [
    //Nothing, go to next step
    ];
const storyIntroP3 = [
/* 25 / (40) */     "The drop ship is stocked and ready to go. It always is, for emergencies. Something is not right you think, this is an emergency. Climbing in, you look back at the habitat that has been your home for so long.",
/* 26 / (41) */     "It would be so easy to stay… It may be lonely, but life is easy up here.",
/* 27 / (42) */     "Thinking of the green forest, you seal yourself into the drop ship. There’s nothing like that out here, just black space. You strap in, reach over, and hit the launch button."
];
//Position change to Earth
const storyIntroP4 = [
/* Earth */
/* 1 / (43) */      "The console in the drop ship reads the atmosphere conditions. Normal. The hatch pops open. ",
/* 2 / (44) */      "Stepping out, you see sand. A cliff. And the green color of leaves hanging from trees that you have so desperately craved setting your eyes on. But, this isn’t the landing sight.",
/* 3 / (45) */      "Great, you think. The drop ship was supposed to drop you off by command, but instead, it appears to have miscalculated its decensent. You are now on a island, seemingly uninhabited by humans.",
/* Option 1 */      "Try contacting command via the radio in the drop ship backpack",
/* Option 2 */      "Check out the island_C2"
];
    const storyIntroP4C1 = [ 
        "Shifting through the assortment of emergency equipment in the backpack, you pull out the radio",
        "You turn it on and radio in to command.",
        "Nothing. After trying a few more times to no avail, you start to really get worried that the voice in the back of your head telling you this isn't just an equipment malfunction is becoming more and more convincing",
        "You look around you at the island you're stuck on, all alone, and realizing you'll be here a while, head to check it out",
        "You find signs that there had once been people here, long ago. At the base of the cliff the dense forest sits atop you find an abandoned mine, decending down into darkness. Best to check that out later you think to yourself",
        "Following the cliff, you find steps carved into it around a corner, leading to the top. A lake and beautiful forest, teeming with insects. Oddly, there are no sounds of birds, no animals at all actually.",
        "Strange... You wander back to the drop ship, to figure out your next steps"
    ];
    const storyIntroP4C2 = [
        "Walking up the beach towards the cliff, you find there was once people here, even if they are long gone",
        "At the base of the cliff the dense forest sits atop you find an abandoned mine, decending down into darkness. Best to check that out later you think to yourself",
        "Following the cliff, you find steps carved into it around a corner, leading to the top. A beautiful forest, teeming with insects. Oddly, there are no sounds of birds, no animals at all actually.",
        "Strange... You wander back to the drop ship, to figure out your next steps"
    ];
const storyIntroP5 = [
    "You figure if you're alone here, you might as well work on getting something to eat and drink"
]
//Display forage and collect water
//One either used, display eat or drink

const storyIslandP1 = [
    "You notice the drop ships solar panels are smashed and in pieces on the sand. Great, you think, no power, this couldn't get any better...",
    "Taking a better look at the backpack that came with the dropship, you find some tools. An axe, a pickaxe, and some flint.",
    "Great you think, hand tools. They could have atleast packed something battery powered!"
];
//Display mine & harvest wood
//Once you harvest wood, display build fire
//Once you mine, display P2
const storyIslandP2 = [
    "What was the survival team who packed a pickaxe thinking? A lot of good this stuff will do you.",
];
//Once mining & chopping is complete, get to recovering blueprint
const storyIslandP3 = [
    "Going inside the ship, you think there must be something that can help you in here.",
    "You find a large machine tucked against the wall. Reading the directions, it appears any material passed in will be processed and sent to the Assembler.",
    "Following the length of the wall, you find another machine labeled Assembler. The directions show it can create drones for surival tasks, if provided with certain materials",
    "It appears the data stored on the Assembler is corrupted. You ask yourself how you are to assemble anything if the machine doesn't know how...",
    "Finding an instruction manual, it tells you the Assembler can recover blueprints, but uses a lot of energy to do so",
    "Atleast there's plenty of wood to feed the Processor and get energy to the Assembler with. You think about all the wood chopping you have ahead of you to power this machine and grumble",
];

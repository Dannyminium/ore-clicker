//Linking all HTML elements that this javascript code will/can change
let stopwatchTimer = document.getElementById("stopwatchTimer");
let playerOresText = document.getElementById("ores");
let oresPerSecond = document.getElementById("oresPerSecond");
let easterEggTimerNotifier = document.getElementById("easterEggTimerNotifier");
//Linking the buttons for buildings
let cursorsButtonText = document.getElementById("cursors");
let wormsButtonText = document.getElementById("worms");
let dwarfsButtonText = document.getElementById("dwarfs");
let robotsButtonText = document.getElementById("robots");
let missilesButtonText = document.getElementById("missiles");
//Linking all the ore upgrades
let stoneUpgrade = document.getElementById("stone");
let coalUpgrade = document.getElementById("coal");
let ironUpgrade = document.getElementById("iron");
let silverUpgrade = document.getElementById("silver");
let platinumUpgrade = document.getElementById("platinum");
let deeperUpgrade = document.getElementById("deeper");
let goldUpgrade = document.getElementById("gold");
let diamondUpgrade = document.getElementById("diamond");
let titaniumUpgrade = document.getElementById("titanium");
let jadeUpgrade = document.getElementById("jade");
let rubyUpgrade = document.getElementById("ruby");
//Linking the pickaxe upgrades
let stonePickUpgrade = document.getElementById("stonepick");
let ironPickUpgrade = document.getElementById("ironpick");
let silverPickUpgrade = document.getElementById("silverpick");
let platinumPickUpgrade = document.getElementById("platinumpick");
let goldPickUpgrade = document.getElementById("goldpick");
let diamondPickUpgrade = document.getElementById("diamondpick");
let titaniumPickUpgrade = document.getElementById("titaniumpick");
let jadePickUpgrade = document.getElementById("jadepick");
let playerPickaxe = document.getElementById("pickaxe");
let rubyPickUpgrade = document.getElementById("rubypick");
//Linking the tier 1 of building upgrades
let officeMouseUpgrade = document.getElementById("officemouse");
let appleUpgrade = document.getElementById("apple");
let radioUpgrade = document.getElementById("radio");
let googleUpgrade = document.getElementById("google");
let droneUpgrade = document.getElementById("drone");
//Linking the tier 2 of building upgrades
let ledMouseUpgrade = document.getElementById("ledmouse");
let burgerUpgrade = document.getElementById("burger");
let motivationalSpeechUpgrade = document.getElementById("motivationalspeech");
let ductTapeUpgrade = document.getElementById("ducttape");
let tacoBellUpgrade = document.getElementById("tacobell");
//Linking the tier 3 of building upgrades
let cosmicMouseUpgrade = document.getElementById("cosmicmouse");
let sausageUpgrade = document.getElementById("sausage");
let subwaySurfersGameplayUpgrade = document.getElementById("subwaysurfersGP");
let chatgptUpgrade = document.getElementById("chatgpt");
let uraniumUpgrade = document.getElementById("uranium");
//Linking a misc upgrade
let everythingUpgrade= document.getElementById("everything");
//Linking the left panel things
let currentPlaystyleText = document.getElementById("currentPlaystyle");
let playstylesLockedStatus = document.getElementById("playstylesLockedStatus");
let exoTradingLockedStatus = document.getElementById("exoTradingLockedStatus");
let oresForExoShardsButton = document.getElementById("oresForExoShardsButton");
let exoShardsOwnedText = document.getElementById("exoShardsOwned");
let exoClickEffUpgrade = document.getElementById("exoClickEffUpgrade");
let exoBuildEffUpgrade = document.getElementById("exoBuildEffUpgrade");
let exoBuildDiscountUpgrade = document.getElementById("exoBuildDiscountUpgrade");
let exoShardDiscountUpgrade = document.getElementById("exoShardDiscountUpgrade");
let playstylesPanel = document.getElementById("playstyle");
let exoTradingPanel = document.getElementById("exoTrading");
let middlePanel = document.getElementById("middlePanel");
//Linking the achievements
let clickAchievement1 = document.getElementById("clickAchievement1");
let clickAchievement2 = document.getElementById("clickAchievement2");
let clickAchievement3 = document.getElementById("clickAchievement3");
let clickAchievement4 = document.getElementById("clickAchievement4");
let clickAchievement5 = document.getElementById("clickAchievement5");
let clickAchievement6 = document.getElementById("clickAchievement6");
let oresAchievement1 = document.getElementById("oresAchievement1");
let oresAchievement2 = document.getElementById("oresAchievement2");
let oresAchievement3 = document.getElementById("oresAchievement3");
let oresAchievement4 = document.getElementById("oresAchievement4");
let oresAchievement5 = document.getElementById("oresAchievement5");
let randomnessAchievement = document.getElementById("randomnessAchievement");
let invisibleButtonAchievement = document.getElementById("invisibleButtonAchievement");
let exoTraderAchievement1 = document.getElementById("exoTraderAchievement1");
let exoTraderAchievement2 = document.getElementById("exoTraderAchievement2");
let exoTraderAchievement3 = document.getElementById("exoTraderAchievement3");
let exoTraderAchievement4 = document.getElementById("exoTraderAchievement4");
let exoTraderAchievement5 = document.getElementById("exoTraderAchievement5");
let exoTraderAchievement6 = document.getElementById("exoTraderAchievement6");
let timeSpentAchievement1 = document.getElementById("timeSpentAchievement1");
let timeSpentAchievement2 = document.getElementById("timeSpentAchievement2");
let timeSpentAchievement3 = document.getElementById("timeSpentAchievement3");
let hackingAchievement1 = document.getElementById("hackingAchievement1");
let hackingAchievement2 = document.getElementById("hackingAchievement2");
let hackingAchievement3 = document.getElementById("hackingAchievement3");
//Linking the 2 bottom panels and their content
let references = document.getElementById("references");
let tips = document.getElementById("tips");
let tipsOrReferencesTitle = document.getElementById("tipsOrReferencesTitle");
let hackPanel = document.getElementById("hackPanel");

//Declaring other variables that will be used later
//Time variables
let timeElapsedSeconds = 0;
let timeElapsedMinutes = 0;
let timeElapsedHours = 0;
//Middle panel related variables
let playerOwnsOres = 0;
let oresPerSecondCalculation = 0;
let playerGetsOresPerClick = 1;
let playerClickedPickaxeEver = 0;
//Variables related to playstyles
let currentPlaystyle = "normal";
let playstyleBuildingMultiplier = 1;
let playstyleClickMultiplier = 1;
//Variables related to exo trading
let playerHasExoShards = 0;
let exoShardCost = 100000;
let exoShardCostAbbreviation = 100;
let playerExoTradedEver = 0;
//Other variables
let randomButtonClicked = 0;
let hacksPanelOpen = false;
let playerHackedTimes = 0;
let timesPlayerTriedToHack = 0;
let everythingMultiplier = 1;
//The cost for each exo upgrade (it gets multiplied by 3 every time the player buys the exo upgrade up to 9)
let clickEffUpgradeCost = 1;
let buildEffUpgradeCost = 1;
let buildDiscountUpgradeCost = 1;
let shardDiscountUpgradeCost = 1;
//Used to display how many times the player purchased an exo upgrade and are capped at 3
let clickEffPurchasedTimes = 0;
let buildEffPurchasedTimes = 0;
let buildDiscountPurchasedTimes = 0;
let shardDiscountPurchasedTimes = 0;
//Variables that check if the player already has a certain upgrade to prevent a bug where the upgrade keeps reappearing
let stonePickUnlocked = false;
let appleUnlocked = false;
let ironPickUnlocked = false;
let silverPickUnlocked = false;
let ledMouseUnlocked = false;
let radioUnlocked = false;
let platinumPickUnlocked = false;
let burgerUnlocked = false;
let goldPickUnlocked = false;
let googleUnlocked = false;
let ductTapeUnlocked = false;
let diamondPickUnlocked = false;
let motivationalSpeechUnlocked = false;
let droneUnlocked = false;
let cosmicMouseUnlocked = false;
let titaniumPickUnlocked = false;
let tacoBellUnlocked = false;
let sausageUnlocked = false;
let subwaySurfersGPUnlocked = false;
let jadePickUnlocked = false;
let chatGPTUnlocked = false;
let uraniumUnlocked = false;
let rubyPickUnlocked = false;
let stoneUnlocked = false;
let coalUnlocked = false;
let ironUnlocked = false;
let silverUnlocked = false;
let platinumUnlocked = false;
let deeperUnlocked = false;
let goldUnlocked = false;
let diamondUnlocked = false;
let titaniumUnlocked = false;
let jadeUnlocked = false;
let rubyUnlocked = false;
let everythingUnlocked = false;
//Cursors owned, their income, and how much they cost
let cursorsOwned = 0;
let cursorIncome = 1;
let cursorCost = 10;
//Worms owned, their income, and how much they cost
let wormsOwned = 0;
let wormIncome = 10;
let wormCost = 3000;
//Dwarfs owned, their income, and how much they cost
let dwarfIncome = 40;
let dwarfCost = 53000;
let dwarfsOwned = 0;
//Robots owned, their income, and how much they cost
let robotIncome = 180;
let robotCost = 5600000;
let robotsOwned = 0;
//Missiles owned, their income, and how much they cost
let missileIncome = 1000;
let missileCost = 140000000;
let missilesOwned = 0;

//Updates how much time the user spent on the game
function userJoinedStartTimer() {
  //Adds 1 to the seconds counter every second
  timeElapsedSeconds ++;
  
  //If the user spent 60 or more seconds, this resets the seconds and adds 1 minute
  if (timeElapsedSeconds >= 60) {
    timeElapsedSeconds = 0;
    timeElapsedMinutes ++;
  }
  //If user spent 60 or more minutes, this resets the minutes and adds 1 hour
  if (timeElapsedMinutes >= 60) {
    timeElapsedMinutes = 0;
    timeElapsedHours ++;
  }
  
  //Updates the text that tells how long you've been playing for
  stopwatchTimer.innerHTML = `You've been playing for: ${timeElapsedHours} hours ${timeElapsedMinutes} minutes ${timeElapsedSeconds} seconds`;

  //Easter egg. If the user plays this game for too long, this is gonna tell them to take a break
  if (timeElapsedHours >= 1 && timeElapsedHours < 3) {
    easterEggTimerNotifier.innerHTML = "Hope you're enjoying the game";
  } else if (timeElapsedHours >= 3 && timeElapsedHours < 5) {
    easterEggTimerNotifier.innerHTML = "Time to take a break";
  } else if (timeElapsedHours >= 5 && timeElapsedHours < 10) {
    easterEggTimerNotifier.innerHTML = "Please take a break";
  } else if (timeElapsedHours >= 10 && timeElapsedHours < 50) {
    easterEggTimerNotifier.innerHTML = "Go and take a break you've been playing for too long";
  } else if (timeElapsedHours >= 50 && timeElapsedHours < 100) {
    easterEggTimerNotifier.innerHTML = "You really ain't folding";
  } else if (timeElapsedHours >= 100 && timeElapsedHours < 500) {
    easterEggTimerNotifier.innerHTML = "leave leave leave leave leave leave leave leave leave leave leave leave leave leave leave leave leave lvea levae";
  } else if (timeElapsedHours >= 500) {
    easterEggTimerNotifier.innerHTML = "you know what you win i aint tellin you what to do anymore";
  }
}

//Gives the player ores when they click the big pickaxe. It also rounds the ores number, adds 1 to the times that the player ever clicked, and updates the ores text
function playerClickedPickaxe() {
  playerOwnsOres += playerGetsOresPerClick * everythingMultiplier * playstyleClickMultiplier;
  playerOwnsOres = Math.ceil(playerOwnsOres);
  playerClickedPickaxeEver ++;
  playerOresText.innerHTML = `Ores: ${playerOwnsOres}`;
}

//The 5 functions below are for buying different buildings. They all follow the same process. They first check if player has enough ore. If yes, the cost is substracted, then one building is given to the player, then the cost is increased and rounded up
//Buying cursors
function buyingCursors() {
  if (playerOwnsOres >= cursorCost) {
    playerOwnsOres -= cursorCost;
    cursorsOwned ++;
    cursorCost *= 1.2;
    cursorCost = Math.ceil(cursorCost);
  }
}
//Buying worms
function buyingWorms() {
  if (playerOwnsOres >= wormCost) {
    playerOwnsOres -= wormCost;
    wormsOwned ++;
    wormCost *= 1.3;
    wormCost = Math.ceil(wormCost);
  }
}
//Buying dwarfs
function buyingDwarfs() {
  if (playerOwnsOres >= dwarfCost) {
    playerOwnsOres -= dwarfCost;
    dwarfsOwned ++;
    dwarfCost *= 1.3;
    dwarfCost = Math.ceil(dwarfCost);
  }
}
//Buying robots
function buyingRobots() {
  if (playerOwnsOres >= robotCost) {
    playerOwnsOres -= robotCost;
    robotsOwned ++;
    robotCost *= 1.3;
    robotCost = Math.ceil(robotCost);
  }
}
//Buying missiles
function buyingMissiles() {
  if (playerOwnsOres >= missileCost) {
    playerOwnsOres -= missileCost;
    missilesOwned ++;
    missileCost *= 1.3;
    missileCost = Math.ceil(missileCost);
  }
}

//The 5 functions below give the player income from their buildings each second. The income is based off how many of the structure they own, the everything multiplier and the playstyle multiplier
//Cursor income
function playerCursors() {
  playerOwnsOres += cursorIncome * cursorsOwned * everythingMultiplier * playstyleBuildingMultiplier;
}
//Worm income
function playerWorms() {
  playerOwnsOres += wormIncome * wormsOwned * everythingMultiplier * playstyleBuildingMultiplier;
}
//Dwarf income
function playerDwarfs() {
  playerOwnsOres += dwarfIncome * dwarfsOwned * everythingMultiplier * playstyleBuildingMultiplier;
}
//Robot income
function playerRobots() {
  playerOwnsOres += robotIncome * robotsOwned * everythingMultiplier * playstyleBuildingMultiplier;
}
//Missile income
function playerMissiles() {
  playerOwnsOres += missileIncome * missilesOwned * everythingMultiplier * playstyleBuildingMultiplier;
}

//Updates the text that says how many ores the player owns
function updateOresText() {
  playerOwnsOres = Math.round(playerOwnsOres);
  playerOresText.innerHTML = `Ores: ${playerOwnsOres}`;
}

//Calculates the amount of ores the player gets from structures and updates the ores per second text
function calculateOresPerSecond() {
  oresPerSecondCalculation = ((cursorIncome * cursorsOwned) + (wormIncome * wormsOwned) + (dwarfIncome * dwarfsOwned) + (robotIncome * robotsOwned) + (missileIncome * missilesOwned)) * playstyleBuildingMultiplier * everythingMultiplier;
  oresPerSecondCalculation = Math.ceil(oresPerSecondCalculation);
  oresPerSecond.innerHTML = `Ores per second: ${oresPerSecondCalculation}`;
}

//Functions for buying upgrades
//When the player clicks on an upgrade button, the function checks if the player has enough ore. If yes, the ore cost is substracted, the effect is given out, the upgrade button dissapears, the unlocked status for that upgrade is set to true and some other changes may take place on top of all mentioned above
//Ore upgrades that multiply the everythingMultiplier by 2
//Stone upgrade
function stoneUpgradeFunction() {
  if (playerOwnsOres >= 100) {
    playerOwnsOres -= 100;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/stonebg.png)";
    stoneUpgrade.style.display = "none";
    stoneUnlocked = true;
  }
}
//Coal upgrade
function coalUpgradeFunction() {
  if (playerOwnsOres >= 500) {
    playerOwnsOres -= 500;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/coalbg.png)";
    coalUpgrade.style.display = "none";
    coalUnlocked = true;
  }
}
//Iron upgrade
function ironUpgradeFunction() {
  if (playerOwnsOres >= 1000) {
    playerOwnsOres -= 1000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/ironbg.png)";
    ironUpgrade.style.display = "none";
    ironUnlocked = true;
  }
}
//Silver upgrade
function silverUpgradeFunction() {
  if (playerOwnsOres >= 10000) {
    playerOwnsOres -= 10000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/silverbg.png)";
    silverUpgrade.style.display = "none";
    silverUnlocked = true;
  }
}
//Platinum upgrade
function platinumUpgradeFunction() {
  if (playerOwnsOres >= 100000) {
    playerOwnsOres -= 100000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/platinumbg.png)";
    platinumUpgrade.style.display = "none";
    platinumUnlocked = true;
  }
}
//Going deeper upgrade. This one also sets the color of the ores and ores per second texts to white so that you can see them on the dark background
function deeperUpgradeFunction() {
  if (playerOwnsOres >= 50000) {
    playerOwnsOres -= 50000;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/deeperbg.png)";
    playerOresText.style.color = "white";
    oresPerSecond.style.color = "white";
    deeperUpgrade.style.display = "none";
    deeperUnlocked = true;
  }
}
//Gold upgrade
function goldUpgradeFunction() {
  if (playerOwnsOres >= 1000000) {
    playerOwnsOres -= 1000000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/goldbg.png)";
    goldUpgrade.style.display = "none";
    goldUnlocked = true;
  }
}
//Diamond upgrade
function diamondUpgradeFunction() {
  if (playerOwnsOres >= 10000000) {
    playerOwnsOres -= 10000000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/diamondbg.png)";
    diamondUpgrade.style.display = "none";
    diamondUnlocked = true;
  }
}
//Titanium upgrade
function titaniumUpgradeFunction() {
  if (playerOwnsOres >= 100000000) {
    playerOwnsOres -= 100000000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/titaniumbg.png)";
    titaniumUpgrade.style.display = "none";
    titaniumUnlocked = true;
  }
}
//Jade upgrade
function jadeUpgradeFunction() {
  if (playerOwnsOres >= 10000000000) {
    playerOwnsOres -= 10000000000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/jadebg.png)";
    jadeUpgrade.style.display = "none";
    jadeUnlocked = true;
  }
}
//Ruby upgrade
function rubyUpgradeFunction() {
  if (playerOwnsOres >= 100000000000) {
    playerOwnsOres -= 100000000000;
    everythingMultiplier *= 2;
    middlePanel.style.backgroundImage = "url(Images/middleBackgrounds/rubybg.png)";
    rubyUpgrade.style.display = "none";
    rubyUnlocked = true;
  }
}

//Functions for buying pickaxe upgrades (they multiply the profit from clicking by 2)
//Stone pickaxe
function stonePickUpgradeFunction() {
  if (playerOwnsOres >= 100) {
    playerOwnsOres -= 100;
    playerGetsOresPerClick *= 2;
    stonePickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/stonepick.png";
    stonePickUpgrade.style.display = "none";
  }
}
//Iron pickaxe
function ironPickUpgradeFunction() {
  if (playerOwnsOres >= 1000) {
    playerGetsOresPerClick *= 2;
    playerOwnsOres -= 1000;
    ironPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/ironpick.png";
    ironPickUpgrade.style.display = "none";
  }
}
//Silver pickaxe
function silverPickUpgradeFunction() {
  if (playerOwnsOres >= 10000) {
    playerOwnsOres -= 10000;
    playerGetsOresPerClick *= 2;
    silverPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/silverpick.png";
    silverPickUpgrade.style.display = "none";
  }
}
//Platinum pickaxe
function platinumPickUpgradeFunction() {
  if (playerOwnsOres >= 100000) {
    playerOwnsOres -= 100000;
    playerGetsOresPerClick *= 2;
    platinumPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/platinumpick.png";
    platinumPickUpgrade.style.display = "none";
  }
}
//Gold pickaxe
function goldPickUpgradeFunction() {
  if (playerOwnsOres >= 1000000) {
    playerOwnsOres -= 1000000;
    playerGetsOresPerClick *= 2;
    goldPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/goldpick.png";
    goldPickUpgrade.style.display = "none";
  }
}
//Diamond pickaxe
function diamondPickUpgradeFunction() {
  if (playerOwnsOres >= 10000000) {
    playerOwnsOres -= 10000000;
    playerGetsOresPerClick *= 2;
    diamondPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/diamondpick.png";
    diamondPickUpgrade.style.display = "none";
  }
}
//Titanium pickaxe
function titaniumPickUpgradeFunction() {
  if (playerOwnsOres >= 100000000) {
    playerOwnsOres -= 100000000;
    playerGetsOresPerClick *= 2;
    titaniumPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/titaniumpick.png";
    titaniumPickUpgrade.style.display = "none";
  }
}
//Jade pickaxe
function jadePickUpgradeFunction() {
  if (playerOwnsOres >= 100000000000) {
    playerOwnsOres -= 100000000000;
    playerGetsOresPerClick *= 2;
    jadePickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/jadepick.png";
    jadePickUpgrade.style.display = "none";
  }
}
//Ruby pickaxe
function rubyPickUpgradeFunction() {
  if (playerOwnsOres >= 1000000000000) {
    playerOwnsOres -= 1000000000000;
    playerGetsOresPerClick *= 2;
    rubyPickUnlocked = true;
    playerPickaxe.src = "Images/Pickaxes/rubypick.png";
    rubyPickUpgrade.style.display = "none";
  }
}

//Building upgrades
/*Building upgrades upgrade specific buildings. There are 3 tiers of building upgrades.
- The first tier makes the building produce 2x as much money and requires 5 of that building to be unlocked
-The second tier makes the building produce 10x as much money and requires 10 of that building to be unlocked
- The third tier makes the building produce 50x as much money and requires 30 of that building to be unlocked
*/
//Low tier building upgrades
//Office mouse upgrade (cursors 2x)
function officeMouseUpgradeFunction() {
  if (playerOwnsOres >= 50) {
    playerOwnsOres -= 50;
    cursorIncome *= 2;
    officeMouseUpgrade.style.display = "none";
  }
}
//Apple upgrade (worms 2x)
function appleUpgradeFunction() {
  if (playerOwnsOres >= 15000) {
    playerOwnsOres -= 15000;
    wormIncome *= 2;
    appleUpgrade.style.display = "none";
    appleUnlocked = true;
  }
}
//Radio upgrade (dwarfs 2x)
function radioUpgradeFunction() {
  if (playerOwnsOres >= 5000000) {
    playerOwnsOres -= 5000000;
    dwarfIncome *= 2;
    radioUpgrade.style.display = "none";
    radioUnlocked = true;
  }
}
//Google upgrade (robots 2x)
function googleUpgradeFunction() {
  if (playerOwnsOres >= 1000000) {
    playerOwnsOres -= 1000000;
    robotIncome *= 2;
    googleUpgrade.style.display = "none";
    googleUnlocked = true;
  }
}
//Drone upgrade (missiles 2x)
function droneUpgradeFunction() {
  if (playerOwnsOres >= 11000000) {
    playerOwnsOres -= 11000000;
    missileIncome *= 2;
    droneUpgrade.style.display = "none";
    droneUnlocked = true;
  }
}

//Mid tier building upgrades
//LED mouse upgrade (cursors 10x)
function ledMouseUpgradeFunction() {
  if (playerOwnsOres >= 25000) {
    playerOwnsOres -= 25000;
    cursorIncome *= 10;
    ledMouseUpgrade.style.display = "none";
    ledMouseUnlocked = true;
  }
}
//Burger upgrade (worms 10x)
function burgerUpgradeFunction() {
  if (playerOwnsOres >= 730000) {
    playerOwnsOres -= 730000;
    wormIncome *= 10;
    burgerUpgrade.style.display = "none";
    burgerUnlocked = true;
  }
}
//Motivational speech upgrade (dwarfs 10x)
function motivationalSpeechUpgradeFunction() {
  if (playerOwnsOres >= 10500000) {
    playerOwnsOres -= 10500000;
    dwarfIncome *= 10;
    motivationalSpeechUpgrade.style.display = "none";
    motivationalSpeechUnlocked = true;
  }
}
//Duct tape upgrade (robots 10x)
function ductTapeUpgradeFunction() {
  if (playerOwnsOres >= 5000000) {
    playerOwnsOres -= 5000000;
    robotIncome *= 10;
    ductTapeUpgrade.style.display = "none";
    ductTapeUnlocked = true;
  }
}
//Taco bell upgrade (missiles 10x)
function tacoBellUpgradeFunction() {
  if (playerOwnsOres >= 122000000) {
    playerOwnsOres -= 122000000;
    missileIncome *= 10;
    tacoBellUpgrade.style.display = "none";
    tacoBellUnlocked = true;
  }
}

//High tier building upgrades
//Cosmic mouse upgrade (cursors 50x)
function cosmicMouseUpgradeFunction() {
  if (playerOwnsOres >= 26000000) {
    playerOwnsOres -= 26000000;
    cursorIncome *= 50;
    cosmicMouseUpgrade.style.display = "none";
    cosmicMouseUnlocked = true;
  }
}
//Interdimentional sausage upgrade (worms 50x)
function sausageUpgradeFunction() {
  if (playerOwnsOres >= 7100000000) {
    playerOwnsOres -= 7100000000;
    wormIncome *= 50;
    sausageUpgrade.style.display = "none";
    sausageUnlocked = true;
  }
}
//Subway surfers gameplay upgrade (dwarfs 50x)
function subwaySurfersGPUpgradeFunction() {
  if (playerOwnsOres >= 14800000000) {
    playerOwnsOres -= 14800000000;
    dwarfIncome *= 50;
    subwaySurfersGameplayUpgrade.style.display = "none";
    subwaySurfersGPUnlocked = true;
  }
}
//Chat gpt upgrade (robots 50x)
function chatgptUpgradeFunction() {
  if (playerOwnsOres >= 161000000000) {
    playerOwnsOres -= 161000000000;
    robotIncome *= 50;
    chatgptUpgrade.style.display = "none";
    chatGPTUnlocked = true;
  }
}
//Uranium upgrade (missiles 50x)
function uraniumUpgradeFunction() {
  if (playerOwnsOres >= 199000000000) {
    playerOwnsOres -= 199000000000;
    missileIncome *= 50;
    uraniumUpgrade.style.display = "none";
    uraniumUnlocked = true;
  }
}

//This one is the miscellaneous "everything" upgrade, it requires the highest pickaxe tier upgrade (ruby) and all the highest tiers of building upgrades to be unlocked
function everythingUpgradeFunction() {
  if (playerOwnsOres >= 100000000000000) {
    playerOwnsOres -= 100000000000000;
    everythingMultiplier *= 1000;
    everythingUpgrade.style.display = "none";
    everythingUnlocked = true;
  }
}

//Checks for the player to use any of the other playstyles than the click one, and then makes building income 0.75 times worse and click income 1.25 times better
function clickPlaystyle() {
  if (currentPlaystyle === "normal" || currentPlaystyle === "sleep") {
    currentPlaystyle = "click";
    playstyleBuildingMultiplier = 0.75;
    playstyleClickMultiplier = 1.25;
    currentPlaystyleText.innerHTML = "Currently selected: carpal tunnel";
  }
}

//Checks for the player to use any of the other playstyles than the click one, and then makes building income 1.25 times better and click income 0.75 times worse
function sleepPlaystyle() {
  if (currentPlaystyle === "normal" || currentPlaystyle === "click") {
    currentPlaystyle = "sleep";
    playstyleBuildingMultiplier = 1.25;
    playstyleClickMultiplier = 0.75;
    currentPlaystyleText.innerHTML = "Currently selected: honk mimimimi";
  }
}

//Checks for the player to use any of the other playstyles than the normal one and then resets the efficiency of everything.
function normalPlaystyle() {
  if (currentPlaystyle === "click" || currentPlaystyle === "sleep") {
    currentPlaystyle = "normal";
    playstyleBuildingMultiplier = 1;
    playstyleClickMultiplier = 1;
    currentPlaystyleText.innerHTML = "Currently selected: normal";
  }
}

//Checks if the player has 30k ores every second, and if yes, this unlocks exo and playstyles, and gets rid of the locked status
function unlockPlaystylesAndExoTrading() {
  if (playerOwnsOres >= 30000) {
    playstylesLockedStatus.style.display = "none";
    exoTradingLockedStatus.style.display = "none";
    playstylesPanel.style.display = "flex";
    exoTradingPanel.style.display = "flex";
  }
}

//Checks if the player meets a requirement for a certain upgrade, as well as if the player hasn't gotten the upgrade that is about to get unlocked (in order to prevent that upgrade appearing even after the player already bought it)
function unlockUpgrades() {
  //Unlocks pickaxe & ore upgrades. Most of the time, you need a certain ore to unlock that pickaxe (for example you need to buy iron to unlock an iron pickaxe)
  if (stoneUnlocked && !stonePickUnlocked) {
    stonePickUpgrade.style.display = "flex";
  }
  if (stonePickUnlocked && !coalUnlocked) {
    coalUpgrade.style.display = "flex";
  }
  if (coalUnlocked && !ironUnlocked) {
    ironUpgrade.style.display = "flex";
  }
  if (ironUnlocked && !ironPickUnlocked) {
    ironPickUpgrade.style.display = "flex";
  }
  if (ironPickUnlocked && !silverUnlocked) {
    silverUpgrade.style.display = "flex";
  }
  if (silverUnlocked && !silverPickUnlocked) {
    silverPickUpgrade.style.display = "flex";
  }
  if (silverPickUnlocked && !platinumUnlocked) {
    platinumUpgrade.style.display = "flex";
  }
  if (platinumUnlocked && !platinumPickUnlocked) {
    platinumPickUpgrade.style.display = "flex";
  }
  if (platinumPickUnlocked && !deeperUnlocked) {
    deeperUpgrade.style.display = "flex";
  }
  if (deeperUnlocked && !goldUnlocked) {
    goldUpgrade.style.display = "flex";
  }
  if (goldUnlocked && !goldPickUnlocked) {
    goldPickUpgrade.style.display = "flex";
  }
  if (goldPickUnlocked && !diamondUnlocked) {
    diamondUpgrade.style.display = "flex";
  }
  if (diamondUnlocked && !diamondPickUnlocked) {
    diamondPickUpgrade.style.display = "flex";
  }
  if (diamondPickUnlocked && !titaniumUnlocked) {
    titaniumUpgrade.style.display = "flex";
  }
  if (titaniumUnlocked && !titaniumPickUnlocked) {
    titaniumPickUpgrade.style.display = "flex";
  }
  if (titaniumPickUnlocked && !jadeUnlocked) {
    jadeUpgrade.style.display = "flex";
  }
  if (jadeUnlocked && !jadePickUnlocked) {
    jadePickUpgrade.style.display = "flex";
  }
  if (jadePickUnlocked && !rubyUnlocked) {
    rubyUpgrade.style.display = "flex";
  }
  if (rubyUnlocked && !rubyPickUnlocked) {
    rubyPickUpgrade.style.display = "flex";
  }
  //Checks if the player has enough structures, and unlocks building upgrades
  if (cursorsOwned >= 10 && !ledMouseUnlocked) {
    ledMouseUpgrade.style.display = "flex";
  }
  if (cursorsOwned >= 30 && !cosmicMouseUnlocked) {
    cosmicMouseUpgrade.style.display = "flex";
  }
  if (wormsOwned >= 5 && !appleUnlocked) {
    appleUpgrade.style.display = "flex";
  }
  if (wormsOwned >= 10 && !burgerUnlocked) {
    burgerUpgrade.style.display = "flex";
  }
  if (wormsOwned >= 30 && !sausageUnlocked) {
    sausageUpgrade.style.display = "flex";
  }
  if (dwarfsOwned >= 5 && !radioUnlocked) {
    radioUpgrade.style.display = "flex";
  }
  if (dwarfsOwned >= 10 && !motivationalSpeechUnlocked) {
    motivationalSpeechUpgrade.style.display = "flex";
  }
  if (dwarfsOwned >= 30 && !subwaySurfersGPUnlocked) {
    subwaySurfersGameplayUpgrade.style.display = "flex";
  }
  if (robotsOwned >= 5 && !googleUnlocked) {
    googleUpgrade.style.display = "flex";
  }
  if (robotsOwned >= 10 && !ductTapeUnlocked) {
    ductTapeUpgrade.style.display = "flex";
  }
  if (robotsOwned >= 30 && !chatGPTUnlocked) {
    chatgptUpgrade.style.display = "flex";
  }
  if (missilesOwned >= 5 && !droneUnlocked) {
    droneUpgrade.style.display = "flex";
  }
  if (missilesOwned >= 10 && !tacoBellUnlocked) {
    tacoBellUpgrade.style.display = "flex";
  }
  if (missilesOwned >= 30 && !uraniumUnlocked) {
    uraniumUpgrade.style.display = "flex";
  }
  //The "everything" upgrade that requires everything else to be unlocked
  if (rubyPickUnlocked && cosmicMouseUnlocked && sausageUnlocked && subwaySurfersGPUnlocked && chatGPTUnlocked && uraniumUnlocked && !everythingUnlocked) {
    everythingUpgrade.style.display = "flex";
  }
}

//Checks if the player reached certain stats in this game, and if yes, it unlocks certain achievements
function unlockAchievements() {
  //Unlocks achievements for the amount of times the player clicked
  if (playerClickedPickaxeEver >= 10) {
    clickAchievement1.style.display = "flex";
  }
  if (playerClickedPickaxeEver >= 100) {
    clickAchievement2.style.display = "flex";
  }
  if (playerClickedPickaxeEver >= 500) {
    clickAchievement3.style.display = "flex";
  }
  if (playerClickedPickaxeEver >= 1000) {
    clickAchievement4.style.display = "flex";
  }
  if (playerClickedPickaxeEver >= 2000) {
    clickAchievement5.style.display = "flex";
  }
  if (playerClickedPickaxeEver >= 1000000) {
    clickAchievement6.style.display = "flex";
  }

  //Unlocks achievements based off how many ores the player has
  if (playerOwnsOres >= 100) {
    oresAchievement1.style.display = "flex";
  }
  if (playerOwnsOres >= 10000) {
    oresAchievement2.style.display = "flex";
  }
  if (playerOwnsOres >= 1000000) {
    oresAchievement3.style.display = "flex";
  }
  if (playerOwnsOres >= 100000000) {
    oresAchievement4.style.display = "flex";
  }
  if (playerOwnsOres >= 10000000000) {
    oresAchievement5.style.display = "flex";
  }

  //Unlocks achievements based off how many times the player exo traded ever
  if (playerExoTradedEver >= 1) {
    exoTraderAchievement1.style.display = "flex";
  }
  if (playerExoTradedEver >= 4) {
    exoTraderAchievement2.style.display = "flex";
  }
  if (playerExoTradedEver >= 12) {
    exoTraderAchievement3.style.display = "flex";
  }
  if (playerExoTradedEver >= 24) {
    exoTraderAchievement4.style.display = "flex";
  }
  if (playerExoTradedEver >= 36) {
    exoTraderAchievement5.style.display = "flex";
  }
  if (playerExoTradedEver >= 52) {
    exoTraderAchievement6.style.display = "flex";
  }

  //Unlocks the randomness achievement, which requires a bunch of random things
  if (playerExoTradedEver >= 4 && cursorsOwned > 17 && playerOwnsOres > 928345 && playerClickedPickaxeEver >= 777 && randomButtonClicked > 48 && currentPlaystyle === "sleep") {
    randomnessAchievement.style.display = "flex";
  }
  //Unclocks an achievement if the player clicked on an invisible button 15 times
  if (randomButtonClicked > 15) {
    invisibleButtonAchievement.style.display = "flex";
  }

  //Unclocks achievements based off how many hours the player spent on this game
  if (timeElapsedHours >= 1) {
    timeSpentAchievement1.style.display = "flex";
  }
  if (timeElapsedHours >= 10) {
    timeSpentAchievement2.style.display = "flex";
  }
  if (timeElapsedHours >= 100) {
    timeSpentAchievement3.style.display = "flex";
  }

  //Unlocks achievements based off if the player clicked the "Hax" button, and based off if the player actually hacked
  if (timesPlayerTriedToHack >= 1) {
    hackingAchievement1.style.display = "flex";
  }
  if (playerHackedTimes >= 1) {
    hackingAchievement2.style.display = "flex";
  }
  if (playerHackedTimes >= 10) {
    hackingAchievement3.style.display = "flex";
  }
}

//A function that checks if the player has enough ores, and then gives the player 1 exo shards. It adds 1 to the amount of times the player exo traded ever. It then updates the exo shard conversion button
function exoShardConversion() {
  if (playerOwnsOres >= exoShardCost) {
    playerOwnsOres -= exoShardCost;
    playerHasExoShards ++;
    playerExoTradedEver ++;
    exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
    oresForExoShardsButton.innerHTML = `${exoShardCostAbbreviation}k ores = 1 exo shard`;
  }
}

//The 4 functions below are for exo shard upgrades. They all check if the player has enough exo shards and if the player hasn't bought that upgrade over 3 times. It then substracts the cost, gives its benefit, makes the exo shard cost higher, adds 1 to the amount of times that upgrade was purchased, and updates the text. If the player has bought it 3 times and tries to buy it again it will just say that you maxes the perk out already.
//Click income upgrade
function exoClickEffUpgradeFunction() {
  if (playerHasExoShards >= clickEffUpgradeCost && clickEffPurchasedTimes <= 2) {
    playerHasExoShards -= clickEffUpgradeCost;
    playerGetsOresPerClick *= 1.1;
    clickEffUpgradeCost *= 3;
    clickEffPurchasedTimes ++;
    exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
    exoClickEffUpgrade.innerHTML = `Clicking efficiency + 10% ${clickEffPurchasedTimes}/3 Cost: ${clickEffUpgradeCost} exo shards`;
  } else if (clickEffPurchasedTimes === 3) {
    exoClickEffUpgrade.innerHTML = "You've maxed this perk out already";
  }
}

//Building income upgrade
function exoBuildEffUpgradeFunction() {
  if (playerHasExoShards >= buildEffUpgradeCost && buildEffPurchasedTimes <= 2) {
    playerHasExoShards -= buildEffUpgradeCost;
    cursorIncome *= 1.1;
    wormIncome *= 1.1;
    dwarfIncome *= 1.1;
    robotIncome *= 1.1;
    missileIncome *= 1.1;
    buildEffUpgradeCost *= 3;
    buildEffPurchasedTimes ++;
    exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
    exoBuildEffUpgrade.innerHTML = `Building efficiency + 10% ${buildEffPurchasedTimes}/3 Cost: ${buildEffUpgradeCost} exo shards`;
  } else if (buildEffPurchasedTimes === 3) {
    exoBuildEffUpgrade.innerHTML = "You've maxed this perk out already";
  }
}

//Building discount upgrade
function exoBuildDiscountUpgradeFunction() {
  if (playerHasExoShards >= buildDiscountUpgradeCost && buildDiscountPurchasedTimes <= 2) {
    playerHasExoShards -= buildDiscountUpgradeCost;
    cursorCost = Math.floor(cursorCost * 0.98);
    wormCost = Math.floor(wormCost * 0.98);
    dwarfCost = Math.floor(dwarfCost * 0.98);
    robotCost = Math.floor(robotCost * 0.98);
    missileCost = Math.floor(missileCost * 0.98);
    buildDiscountUpgradeCost *= 3;
    buildDiscountPurchasedTimes ++;
    exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
    exoBuildDiscountUpgrade.innerHTML = `Building prices -2% ${buildDiscountPurchasedTimes}/3 Cost: ${buildDiscountUpgradeCost} exo shards`;
  } else if (buildDiscountPurchasedTimes === 3) {
    exoBuildDiscountUpgrade.innerHTML = "You've maxed this perk out already";
  }
}

//Exo shard discount upgrade
function exoShardDiscountUpgradeFunction() {
  if (playerHasExoShards >= shardDiscountUpgradeCost && shardDiscountPurchasedTimes <= 2) {
    playerHasExoShards -= shardDiscountUpgradeCost;
    exoShardCost -= 5000;
    exoShardCostAbbreviation = exoShardCost/1000;
    shardDiscountUpgradeCost *= 3;
    shardDiscountPurchasedTimes ++;
    exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
    oresForExoShardsButton.innerHTML = `${exoShardCostAbbreviation}k ores = 1 exo shard`;
    exoShardDiscountUpgrade.innerHTML = `Exo shard cost - 5k ${shardDiscountPurchasedTimes}/3 Cost: ${shardDiscountUpgradeCost} exo shards`;
  } else if (shardDiscountPurchasedTimes === 3) {
    exoShardDiscountUpgrade.innerHTML = "You've maxed this perk out already";
  }
}

//A function that counts how many times the player clicked a random invisible button
function playerClickedRandomButton() {
  randomButtonClicked ++;
}

//Shows the player references, hides the tips and sets the title to "references"
function playerWantsToSeeReferences() {
  references.style.display = "block";
  tips.style.display = "none";
  tipsOrReferencesTitle.innerHTML = "References:";
}

//Shows the player tips, hides the references, and sets the title to "tips"
function playerWantsToSeeTips() {
  tips.style.display = "block";
  references.style.display = "none";
  tipsOrReferencesTitle.innerHTML = "Tips:";
}

//Hides references and tips and changes the title
function minimizeTipsOrReferences() {
  tips.style.display = "none";
  references.style.display = "none";
  tipsOrReferencesTitle.innerHTML = "Click the buttons above to see tips/references";
}

//Checks if the hack panel is closed, if yes it opens it, if closed it opens it. It also adds 1 to the amount of time the player tried to hack
function playerWantsToSeeHackPanel() {
  if (!hacksPanelOpen) {
    hackPanel.style.display = "flex";
    hacksPanelOpen = true;
  } else {
    hackPanel.style.display = "none";
    hacksPanelOpen = false;
  }
  timesPlayerTriedToHack ++;
}

//The functions below let the player cheat in resources/things
//Ore cheats:
//Gives 1k ores
function get1kOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 1000;
}

//Gives 10k ores
function get10kOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 10000;
}

//Gives 100k ores
function get100kOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 100000;
}

//Gives 1m ores
function get1mOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 1000000;
}

//Gives 100m ores
function get100mOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 100000000;
}

//Gives 1b ores
function get1bOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 1000000000;
}

//Gives 100b ores
function get100bOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 100000000000;
}

//Gives 1t ores
function get1tOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 1000000000000;
}

//Gives 100t ores
function get100tOresHack() {
  playerHackedTimes ++;
  playerOwnsOres += 100000000000000;
}

//Exo shard cheats:
//Gives 1 exo shard
function get1ExoShardHack() {
  playerHackedTimes ++;
  playerHasExoShards ++;
  playerExoTradedEver ++;
}

//Gives 3 exo shards
function get3ExoShardsHack() {
  playerHackedTimes ++;
  playerHasExoShards += 3;
  playerExoTradedEver += 3;
}

//Gives 24 exo shards
function get24ExoShardsHack() {
  playerHackedTimes ++;
  playerHasExoShards += 24;
  playerExoTradedEver += 24;
}

//Gives 36 exo shards
function get36ExoShardsHack() {
  playerHackedTimes ++;
  playerHasExoShards += 36;
  playerExoTradedEver += 36;
}

//Gives 52 exo shards
function get52ExoShardsHack() {
  playerHackedTimes ++;
  playerHasExoShards += 52;
  playerExoTradedEver += 52;
}

//Gives 100 exo shards
function get100ExoShardsHack() {
  playerHackedTimes ++;
  playerHasExoShards += 100;
  playerExoTradedEver += 100;
}

//Pickaxe clicks cheat:
//Gives the player 10 pickaxe clicks
function get10PickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 10;
}

//Gives the player 100 pickaxe clicks
function get100PickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 100;
}

//Gives the player 500 pickaxe clicks
function get500PickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 500;
}

//Gives the player 777 pickaxe clicks
function get777PickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 777;
}

//Gives the player 1k pickaxe clicks
function get1kPickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 1000;
}

//Gives the player 1m pickaxe clicks
function get1mPickaxeClicksHack() {
  playerHackedTimes ++;
  playerClickedPickaxeEver += 1000000;
}

//Miscellaneous hacks:
//Gives the player 10 of each building
function get10ofEachBuilding() {
  playerHackedTimes ++;
  cursorsOwned += 10;
  wormsOwned += 10;
  dwarfsOwned += 10;
  robotsOwned += 10;
  missilesOwned += 10;
}

//Gives the player 100 of each building
function get100ofEachBuilding() {
  playerHackedTimes ++;
  cursorsOwned += 100;
  wormsOwned += 100;
  dwarfsOwned += 100;
  robotsOwned += 100;
  missilesOwned += 100;
}

//Multiplies everything multiplier by 2
function everythingMultiplierHack() {
  playerHackedTimes ++;
  everythingMultiplier *= 2;
}

//A function for updating the text of how many buildings the player has and for updating how many exo shards the player has
function updateBuildingsAndExoShards() {
  cursorsButtonText.innerHTML = `${cursorsOwned} Cursors, Cost: ${cursorCost}`;
  wormsButtonText.innerHTML = `${wormsOwned} Worms, Cost: ${wormCost}`;
  dwarfsButtonText.innerHTML = `${dwarfsOwned} Dwarfs, Cost: ${dwarfCost}`;
  robotsButtonText.innerHTML = `${robotsOwned} Robots, Cost: ${robotCost}`;
  missilesButtonText.innerHTML = `${missilesOwned} Highly explosive missiles, Cost: ${missileCost}`;
  exoShardsOwnedText.innerHTML = `Exo shards owned: ${playerHasExoShards}`;
}

//Intervals for certain functions
//Tracks how long the user was playing
setInterval(userJoinedStartTimer, 1000);
//Unlocks the things of the left panel if player reaches 30k ores
setInterval(unlockPlaystylesAndExoTrading, 1000);
//Calculates how many ores the player makes per second (buildings only) and updates it
setInterval(calculateOresPerSecond, 50);
//Updates the text that tells how many ores the player has
setInterval(updateOresText, 50);
//Checks for upgrade requirements and unlocks some upgrades if player meets requirements
setInterval(unlockUpgrades, 100);
//Unlocks achievements if the player meets the requirements
setInterval(unlockAchievements, 500);
//Updates the text that says the amount of buildings/exo shards the player owns
setInterval(updateBuildingsAndExoShards, 50);

//Gives the player money each second based off how many buildings the player has and their income
setInterval(playerCursors, 1000);
setInterval(playerWorms, 1000);
setInterval(playerDwarfs, 1000);
setInterval(playerRobots, 1000);
setInterval(playerMissiles, 1000);
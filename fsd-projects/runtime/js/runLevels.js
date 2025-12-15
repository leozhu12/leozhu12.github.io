var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage, hitZone, rotation, offsetX, offsetY, image, scaleX, scaleY){
      var hitZoneSize = hitZone; //sets the collide size
      var damageFromObstacle = damage; //damage taken when collision happens
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hitzone and creates the collsion to take the damnge
      obstacleHitZone.x = x; // sets the obsticle X position
      obstacleHitZone.y = y; // sets the obsticle y position
      game.addGameItem(obstacleHitZone); //adds the color to the playfield 
      var obstacleImage = draw.bitmap(image); //draws the bitmap and stores it as an obsticle image
      obstacleHitZone.addChild(obstacleImage); //takes the picture and add it has a child to the hitzone
      obstacleImage.x = offsetX; //offsets the picture fron the hitzone
      obstacleImage.y = offsetY; // offsets the obsticle image vertically
      obstacleImage.scaleX = scaleX; // x scale of the obstacle
      obstacleImage.scaleY = scaleY; // y scale of the obstacle
      obstacleHitZone.rotationalVelocity = rotation; // rotation of the obsticle
    }

  function createEnemy(x, y, image, offsetX, offsetY, velocity, scaleX, scaleY, hitZone, damage, score){
    var enemy = game.createGameItem("enemy", hitZone); //creates a hitzone and stores it to the variable enemy
    var enemyImage = draw.bitmap(image); //create the image of the enemy and it stores it to the enemyImage
    enemyImage.x = offsetX; // offsets from image to hitzone (left to right)
    enemyImage.y = offsetY; // offset from image to hitzone (veritcally)
    enemy.addChild(enemyImage); // attaches the enemy imagine to the object
    enemy.x = x; //setting the x enemy position
    enemy.y = y; //setting the y enemy position
    game.addGameItem(enemy); // adding the enemy to the game
    enemyImage.scaleX = scaleX; // X scale of the enemy 
    enemyImage.scaleY = scaleY; // y scale of the enemy 
    enemy.velocityX -= velocity; // animated your enemy

    //handles when Halle collides with enemy 
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(damage); //reduces player health 
    }

     //handles when Halle shoots the enemy 
    enemy.onProjectileCollision = function(){
      game.increaseScore(score); //increases the players score if shot 
      //enemy.fadeOut();
      enemy.shrink(); // the enemy will shrink out 
      //enemy.flyTo(0,0);
    }
  };

  function createReward(x, y, hitZone, image, velocity, offsetX, offsetY, scaleX, scaleY, healthIncrease, score){
       var reward = game.createGameItem("reward", hitZone); //creates a hitzone and stores it to the variable reward
    var rewardImage = draw.bitmap(image); //create the image of the reward and it stores it to the rewardImage
    rewardImage.x = offsetX; // offsets from image to hitzone (left to right)
    rewardImage.y = offsetY; // offset from image to hitzone (veritcally)
    reward.addChild(rewardImage); // attaches the reward imagine to the object
    reward.x = x; //setting the x reward position
    reward.y = y; //setting the y reward position
    rewardImage.scaleX = scaleX; // X scale of the reward
    rewardImage.scaleY = scaleY; // y scale of the reward
    game.addGameItem(reward); // adding the reward to the game

    reward.velocityX -= velocity; // animated your reward

    //handles when Halle collides with reward 
    reward.onPlayerCollision = function(){
      game.changeIntegrity(healthIncrease); //increases player health 
      game.increaseScore(score); //increases the players score if hit
      reward.fadeOut();
    }
  };

  function createlevelMarker(x, y, image, hitZone, velocity, setoffX, setoffY, scaleX, scaleY){
    var levelMarker = game.createGameItem("level", hitZone); //creates a hitzone and stores it to the variable levelMarker
    var levelImage = draw.bitmap(image); //create the image of the levelmarker and it stores it to the levelImage
    levelImage.x = setoffX; // offsets from image to hitzone (left to right)
    levelImage.y = setoffY; // offset from image to hitzone (veritcally)
    levelMarker.addChild(levelImage); // attaches the level imagine to the object
    levelMarker.x = x; //setting the x level position
    levelMarker.y = y; //setting the y level position
    levelImage.scaleX = scaleX; // X scale of the level
    levelImage.scaleY = scaleY; // y scale of the level
    game.addGameItem(levelMarker); // adding the level to the game

    levelMarker.velocityX -= velocity; // animated your level

    //handles when Halle collides with level
    levelMarker.onPlayerCollision = function(){
      levelMarker.fadeOut();
      startLevel();
    }
  };

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //fretches the current level from the level data array and stores it in the levelData variable
      var levelObjects = level.gameItems; //retrives the array of games items and stores it in the levelObjects game variable

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.damage, element.hitZone, element.rotation, element.offsetX, element.offsetY, element.image, element.scaleX, element.scaleY);
        } 
         if(element.type === "enemy"){
          createEnemy(element.x, element.y, element.image, element.offsetX, element.offsetY, element.velocity, element.scaleX, element.scaleY, element.hitZone, element.damage, element.score);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y, element.hitZone, element.image, element.velocity, element.offsetX, element.offsetY, element.scaleX, element.scaleY, element.healthIncrease, element.score);
        }
        if(element.type === "level"){
          createlevelMarker(element.x, element.y, element.image, element.hitZone, element.velocity, element.setoffX, element.setoffY, element.scaleX, element.scaleY);
        }
      }

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

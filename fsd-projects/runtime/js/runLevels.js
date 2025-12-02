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
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, damage){
    var hitZoneSize = 25; //sets the collide size
    var damageFromObstacle = damage; //damage taken when collision happens
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the hitzone and creates the collsion to take the damnge
    obstacleHitZone.x = x; // sets the obsticle X position
    obstacleHitZone.y = y; // sets the obsticle y position
    game.addGameItem(obstacleHitZone); //adds the color to the playfield 
    var obstacleImage = draw.bitmap("img/sawblade.png"); //draws the bitmap and stores it as an obsticle image
    obstacleHitZone.addChild(obstacleImage); //takes the picture and add it has a child to the hitzone
    obstacleImage.x = -25; //offsets the picture fron the hitzone
    obstacleImage.y = -25; // offsets the obsticle image vertically

     obstacleHitZone.rotationalVelocity = 1000;
    }

    createObstacle(400, groundY - 110, 10);
    createObstacle(600, groundY - 110, 50);
    createObstacle(800, groundY - 110, 100);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3;

    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10);
    }

    enemy.onPlayerCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
      //enemy.shrink();
      //enemy.flyTo(0,0);
    }

    function startLevel() {
      // TODO 13 goes below here



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

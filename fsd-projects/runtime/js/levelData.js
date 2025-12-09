var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [ //x, y, image, offsetX, offsetY, velocity
          { type: "obstacle", x: 400, y: groundY - 0, damage: 10,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 600, y: groundY - 70, damage: 50, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 800, y: groundY - 50, damage: 100, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 600, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 3, scaleX: 0.5, scaleY: 0.5},
          { type: "enemy", x: 1200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5},
          { type: "reward", x: 300, y: groundY - 150},
          { type: "reward", x: 700, y: groundY - 150},
          { type: "reward", x: 900, y: groundY - 150},
          { type: "level", x: 1000, y: groundY - 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}

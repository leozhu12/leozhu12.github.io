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
          { type: "obstacle", x: 500, y: groundY - 50, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1000, y: groundY - 30, damage: 20, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 1200, y: groundY - 50, damage: 20, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 600, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 1200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 2000, y: groundY - 50, image:"img/salamander.png", offsetX: -50, offsetY: -60, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -20, score: 200},
          { type: "enemy", x: 2500, y: groundY - 90, image:"img/dragon.png", offsetX: -50, offsetY: -60, velocity: 3, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -40, score: 200},
          { type: "reward", x: 300, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.10, scaleY: 0.10},
          { type: "reward", x: 700, y: groundY - 150},
          { type: "reward", x: 900, y: groundY - 150},
          { type: "level", x: 3400, y: groundY - 100},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 700, y: groundY - 50, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 800, y: groundY - 50, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 1000, y: groundY - 50, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
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

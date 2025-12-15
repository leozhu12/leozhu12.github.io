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
          { type: "obstacle", x: 1200, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1500, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1800, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 2000, y: groundY - 10, damage: 20, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 2500, y: groundY - 10, damage: 20, hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 1200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 1500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 2200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 3500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 2200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 3200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 2700, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 2720, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 3000, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 3100, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 8, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -10, score: 100},
          { type: "enemy", x: 3150, y: groundY - 50, image:"img/salamander.png", offsetX: -50, offsetY: -60, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 55, damage: -20, score: 200},
          { type: "enemy", x: 3300, y: groundY - 90, image:"img/dragon.png", offsetX: -50, offsetY: -60, velocity: 3, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -40, score: 200},
          { type: "reward", x: 700, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
          { type: "reward", x: 1900, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 2000},
          { type: "reward", x: 3400, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 3000},
          { type: "reward", x: 3600, y: groundY - 150, hitZone: 25, image:"img/Hpotion.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: (30, 40, 50), score: 0},
          { type: "reward", x: 1500, y: groundY - 150, hitZone: 25, image:"img/Hpotion.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 30, score: 0},
          { type: "level", x: 4000, y: groundY - 150, image:"img/portal.png", hitZone: 60, velocity: 3, setoffX: -25, setoffY: -25, scaleX: 0.25, scaleY: 0.25},                  
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 800, y: groundY - 10, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 2000, y: groundY - 10, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1500, y: groundY - 10, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/water.png", scaleX: 0.15, scaleY: 0.15},
          { type: "obstacle", x: 1000, y: groundY - 10, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 3000, y: groundY - 0, damage: 40,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 3200, y: groundY - 0, damage: 30,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 3400, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 3500, y: groundY - 0, damage: 30,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 2800, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 2600, y: groundY - 0, damage: 40,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "obstacle", x: 2500, y: groundY - 0, damage: 20,  hitZone: 25, rotation: 0, offsetX: -30, offsetY: -30, image: "img/spikes.png", scaleX: 0.05, scaleY: 0.05},
          { type: "enemy", x: 1200, y: groundY - 90, image:"img/dragon.png", offsetX: -50, offsetY: -60, velocity: 3, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -40, score: 200},
          { type: "enemy", x: 1900, y: groundY - 90, image:"img/dragon.png", offsetX: -50, offsetY: -60, velocity: 3, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -40, score: 200},
          { type: "enemy", x: 3000, y: groundY - 90, image:"img/dragon.png", offsetX: -50, offsetY: -60, velocity: 3, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -40, score: 200},
          { type: "enemy", x: 2000, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 2200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 2500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 2800, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 3500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 3000, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5000, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 4500, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 6, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 4200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 10, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 3500, y: groundY - 150, image:"img/BigDragon.png", offsetX: -200, offsetY: -300, velocity: 2, scaleX: 1, scaleY: 1, hitZone: 120, damage: -100, score: 50},
          { type: "enemy", x: 3400, y: groundY - 150, image:"img/BigDragon.png", offsetX: -200, offsetY: -300, velocity: 2, scaleX: 1, scaleY: 1, hitZone: 120, damage: -100, score: 50},
          { type: "enemy", x: 3300, y: groundY - 150, image:"img/BigDragon.png", offsetX: -200, offsetY: -300, velocity: 2, scaleX: 1, scaleY: 1, hitZone: 120, damage: -100, score: 50},
          { type: "enemy", x: 5000, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5200, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5400, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5600, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "enemy", x: 5800, y: groundY - 50, image:"img/goblin.png", offsetX: -40, offsetY: -50, velocity: 5, scaleX: 0.5, scaleY: 0.5, hitZone: 50, damage: -5, score: 200},
          { type: "reward", x: 2000, y: groundY - 150, hitZone: 25, image:"img/Hpotion.png", velocity: 3, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: (30, 40, 50), score: 0},
          { type: "reward", x: 4000, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 2, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
          { type: "reward", x: 4100, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 2, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
          { type: "reward", x: 4300, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 2, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
          { type: "reward", x: 4500, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 2, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
          { type: "reward", x: 4700, y: groundY - 150, hitZone: 25, image:"img/egg.png", velocity: 2, offsetX: -30, offsetY: -30, scaleX: 0.15, scaleY: 0.15, healthIncrease: 20, score: 1000},
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

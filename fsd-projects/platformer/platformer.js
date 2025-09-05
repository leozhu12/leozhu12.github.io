$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    
    
    
    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 625, 40, 10, "black");
    createPlatform(400, 550, 1, 1, "blue");
    createPlatform(200, 450, 10, 10, "black");
    createPlatform(200, 625, 10, 120, "black");
    createPlatform(400, 400, 100, 10, "lightblue");
    createPlatform(500, 400, 100, 10, "black")
    createPlatform(700, 500, 100, 10, "black")
    createPlatform(700, 400, 10, 100, "black")
    createPlatform(700, 300, 10, 200, "black")
    createPlatform(850, 200, 20, 100, "black")
    createPlatform(1000, 200, 20, 100, "black")
    createPlatform(1100, 200, 200, 10, "black")
    createPlatform(1300, 550, 200, 10, "black")
    createPlatform(1300, 400, 10, 150, "black")
    createPlatform(100, 100, 10, 150, "black")
    createPlatform(650, 575, -200, 10, "yellow")


    // TODO 3 - Create Collectables
    createCollectable("F", 185, 590,);
    createCollectable("D", 185, 400, 0.1, 1.0);
    createCollectable("B", 725, 400, 0.1, 1.0);
    createCollectable("C", 500, 350, 0.1, 1.0);
    createCollectable("A", 1325, 425, 0.1, 1.0);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1200);
    createCannon("right", 450, 3000);
    createCannon("right", 750, 400);
    createCannon("right", 200, 3000);

    
  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

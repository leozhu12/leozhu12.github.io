var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
      var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
           // var backgroundFill = draw.rect(canvasWidth,groundY,'blue'); // draws a rectangle and stores it inside background fill
            //background.addChild(backgroundFill); // adds the backgroundfill to the background
            var backgroundImage2 = draw.bitmap("img/images.png");
            backgroundImage2.x = 0;
            backgroundImage2.y = 0;
            backgroundImage2.scaleX = 5;
            backgroundImage2.scaleY = 7.5;            
            background.addChild(backgroundImage2);
            var backgroundImage = draw.bitmap("img/background jungle.png");
            backgroundImage.x = 0;
            backgroundImage.y = 0;
            backgroundImage.scaleX = 1.75;
            backgroundImage.scaleY = .75;            
            background.addChild(backgroundImage);
            

            // TODO 2: - Add a moon and starfield
            //for(var i = 0; i < 50; i++){
               /* var circle = draw.circle(10, "white", "LightGray", 2); //creates a circle with a specificed radius, border color, fill color, alpha, and stores it in the variable circle. 
                circle.x = canvasWidth * Math.random(); // sets a random x position within canvas width
                circle.y = groundY * Math.random(); // sets a random y position within groundY
                background.addChild(circle); // adds circle to the background container*/
            //}

            /*var moon = draw.bitmap("img/moon.png"); //creates a bitmap object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 400;//sets the moon's X position
            moon.y = groundY - 200; //sets moon's Y position 
            moon.scaleX = 0.50; // scales the moon's width
            moon.scaleY = 0.50; // scales the moon's height
            background.addChild(moon);// add the mppm to the background container*/
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*for (var i = 0; i < 5; ++i) { // for loop that creates a set number of buildings
                var buildingColors = ["Pink", "LightBlue", "Red", "Black", "Orange"];
                var buildingHeight = 500 * Math.random(); // a variable called buildingHeight that stores the y value of the building
                var building = draw.rect(75, buildingHeight, buildingColors[i], "LightGray", "Black", 1); //Draws the building and has 5 arguments that shows the design of the building
                building.x = 200 * i; // X value of the building 
                building.y = groundY - buildingHeight; // y value of the building 
                background.addChild(building); //adds the building to the background
                buildings.push(building);// takes the building and pushes the building to the array
            }*/
            
            // TODO 3: Part 1 - Add a tree
            /*tree = draw.bitmap("img/tree.png"); //creates a bitmap using the tree image and stores it in our variable tree
            tree.x = 600// sets the x value of the tree
            tree.y =groundY - 200; //sets the y value of the tree
            background.addChild(tree); // adds the tree to the background container*/
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
           /* tree.x = tree.x - 1; // moves the tree to the left by subtracting from its current x position
            // checks if the tree has gone off the left and resets to the right
            if (tree.x < -200) {
            tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){ // every time this loop runs it pulls out an array
                var building = buildings[i]; //array of budilings
                building.x -= 1; // moves left
                if (building.x < -200){ //checks if it moves off screen
                    building.x = canvasWidth; //brings the buildings back
                }
            }

       */ } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}

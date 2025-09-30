var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        

    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables  
        var circle; // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array


        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            // this draws the circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // This codes for the randomness of the circle by its size, color, and location.
            physikz.addRandomVelocity(circle, canvas, 5, 5); // This code uses the physikz libary to add a velocity and direction for the circles.
            view.addChild(circle); // This code makes sure the circles appear on screen.
            circles.push(circle); // This saves the circles to an array of circles
        }


        // TODO 3 : Call the drawCircle() function
        /* drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle(); */ //Repetative code to get circles on the screen


        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++) { // Uses a for loop to create 100 circles. the 100 being the number of circles drawn. 
            drawCircle(); // adds a single call to draw the circles
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            /* physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]); */ //Repetitive code to update the positions of the circles in the array. 
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
            /* game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]); */ //Repetitive code to make circles that move off the screen reappear on the other side (right side).

            // TODO 8 / TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++) { // the full loop that makes sure the circles shows up. This structure ensures that every circle in the array is updated one at a time.
            physikz.updatePosition(circles[i]); // Uses the physikz to update the position of every circle thay pops up
            game.checkCirclePosition(circles[i]); // This checks the position of the circles and make sure it appears again. 
           }
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if ( circle.x < 0 ){ // If the circle moves off the left side of the screen it will reappear on the opposite side
                circle.x = canvas.width; // sets the horizontal value of x of a circle to be the same as the width of the canvas.
            }
            if ( circle.y > canvas.height ){ // If the cirle has moved beyond the bottom of the canvas height it will reappear.
                circle.y = 0; // This checks if the y value or the vertical value is equal to the value of the canvas and makes sure it shows up on the screen.
             } 
            if ( circle.y < 0 ){ // If the cirle moves off the top side of the screen it will reappear on the opposite side
                circle.y = canvas.height; // sets the vertical value of y of a cirlce to be the same height of the canvas.
             }  
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
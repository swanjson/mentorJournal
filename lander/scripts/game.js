MyGame.main = (function (objects, input, renderer, graphics) {
    'use strict'; //wtf does this do?

    console.log('Game initializing....');

    let lastTimeStamp = performance.now();

    let myKeyboard = input.Keyboard();
    let myMouse = input.Mouse();
    let paused = false;

    let rocketShip2 = objects.Ship({
        momentum: { x: 0, y: 0},
        size: { x: 75, y: 75 },       // Size in pixels
        center: { x: 300, y: 25 }, //starting pixel location
        rotation: 0,
        thrustRate: 1/4000,
        gravityRate: -1/10000,
        moveRate: 1/10,         // Pixels per second
        rotateRate: Math.PI / 1000    // Radians per second
    });

    // Why do these get faster and faster?
    // Catching up when I click off?
    // Make it so clicking off the tab pauses it?

    let rocketShip2Render = renderer.AnimatedModel({
        spriteSheet: 'assets/red-head-6.png',
        spriteCount: 6,
        spriteTime: [100, 100, 100, 100, 100, 100],   // ms per frame
    }, graphics);

    // Need to make this recognize mouse too, at least for main menu
    function processInput(elapsedTime){
        myKeyboard.update(elapsedTime);
        myMouse.update(elapsedTime);
    }

    //
    // UPDATE PARTICLES
    // 
    function update(elapsedTime){   //updates time with new time
        rocketShip2Render.update(elapsedTime);
        rocketShip2.gravityPull(elapsedTime);
    }

    //
    // RENDER PARTICLES
    // 
    function render(){
        graphics.clear();

        rocketShip2Render.render(rocketShip2);
    }
    //when escape is pressed then this function runs. First iteration it recieves paused = false. It flips it to true.
    function togglePause(){
        //(!bool) ? console.log('The game has been unpaused!') : console.log('The game has been paused!');
        paused = !paused;
    }

    myKeyboard.register('Escape', togglePause);
    
    //
    // GAME LOOP
    // 
    function gameLoop(time){
        let elapsedTime = (time - lastTimeStamp);
        lastTimeStamp = time;
    
        setTimeout(processInput(elapsedTime), 2000); 
        
        if(!paused){
            update(elapsedTime);
            render();
        }

        requestAnimationFrame(gameLoop); 
    };

    myKeyboard.register('ArrowUp', rocketShip2.thrusterMovement);
    myKeyboard.register('ArrowLeft', rocketShip2.rotateLeft);
    myKeyboard.register('ArrowRight', rocketShip2.rotateRight);



    requestAnimationFrame(gameLoop);
}(MyGame.objects, MyGame.input, MyGame.render, MyGame.graphics));
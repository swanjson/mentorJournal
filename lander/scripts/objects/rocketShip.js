//------------------------------------------------------------------
//
// Creates a Ship model based upon the passed in specification. THIS MAKES NEW SPRITE BASED ON OLD ONE
//
//------------------------------------------------------------------
MyGame.objects.Ship = function(spec) { //sooooo spec is an object with size:{ x: 50, y: 50 },center:{ x: 50, y: 150 },rotation: 0,moveRate: 125 / 1000,rotateRate: Math.PI / 1000 

    function gravityPull(elapsedTime){
        spec.momentum.y -= (spec.gravityRate * elapsedTime);
        spec.center.y += (spec.momentum.y * elapsedTime);
        spec.center.x += (spec.momentum.x * elapsedTime);

    }
    function thrusterMovement(elapsedTime) {
            let thrustX = -Math.sin(spec.rotation);
            let thrustY = Math.cos(spec.rotation);

            spec.momentum.x -= (thrustX * spec.thrustRate * elapsedTime);
            spec.momentum.y -= (thrustY * spec.thrustRate * elapsedTime);
            spec.center.x -= (thrustX * spec.moveRate * elapsedTime);
            spec.center.y -= (thrustY * spec.moveRate * elapsedTime);
    }

    function rotateLeft(elapsedTime) {
        spec.rotation -= spec.rotateRate * (elapsedTime);
    }

    function rotateRight(elapsedTime) {
        spec.rotation += spec.rotateRate * (elapsedTime);
    }

    let api = {
        get size() { return spec.size; },
        get center() { return spec.center; },
        get rotation() { return spec.rotation; },
        gravityPull: gravityPull,
        thrusterMovement: thrusterMovement,
        rotateLeft: rotateLeft,
        rotateRight: rotateRight
    };

    return api;
};

/*TODO

Make middle section for ship better?


*/

var canvas = document.getElementById('id-canvas');
//Always check for properties and methods, to make sure your code doesn't break in other browsers.
if (canvas.getContext) {
    console.log('starting terrain rendering...');
    var context = canvas.getContext('2d'),
        canvasMin = 0,
        canvasMax = 600; // size of canvas

    //TERRAIN TWEAKERS:
    var levelOneDist = 100; //Platform distanced (must be under ~290)
    var surfaceRoughnessMultiplier = 1/20;
    var minimimPixelSpacing = 5; //
    var middleSectionSpacer = 200; // amount of pixels between the two platforms

    // Chooses a random value between given two values
    function betweenRNG(value1,value2){ //gives a random number between a given range
        result = (value1 + (Math.floor(Math.random() * ((value2 - value1) + 1))));
        return result;
    }

    var randomLeftHalf = betweenRNG(canvasMin,((canvasMax/2)-levelOneDist)); //startX1 (between zero and halfway minus launch pad size)
    if (randomLeftHalf >= ((canvasMax/2)-levelOneDist)){ //making sure that the left half doesn't extend past the halfway point, if it does choose different right half. MAKE SURE THIS IS VALID?
        var randomRightHalf = betweenRNG(randomLeftHalf,(canvasMax-levelOneDist));
    } else{var randomRightHalf = betweenRNG(canvasMax/2,(canvasMax-levelOneDist));}
    var randomBottomHalf = betweenRNG(canvasMax/2,canvasMax);
    var randomBottomHalf2 = betweenRNG(canvasMax/2,canvasMax);
    var safeLanding1 = {start: {x: randomLeftHalf, y: randomBottomHalf}, end: {x: (randomLeftHalf + levelOneDist), y: randomBottomHalf}}; //safe landing endX1 = startX1 + 
    var safeLanding2 = {start: {x: randomRightHalf, y: randomBottomHalf2}, end: {x: (randomRightHalf + levelOneDist), y: randomBottomHalf2}};

    // Safe landing tests
    // console.log('this is safe landing 1 - start: ' + safeLanding1.start.x + ', ' + safeLanding1.start.y + '      end: ' + safeLanding1.end.x + ', ' + safeLanding1.end.y);
    // console.log('this is safe landing 2 - start: ' + safeLanding2.start.x + ', ' + safeLanding2.start.y + '      end: ' + safeLanding2.end.x + ', ' + safeLanding2.end.y);

    var yRandomStart = betweenRNG(canvasMin,canvasMax);
    var yRandomEnd = betweenRNG(canvasMin,canvasMax);
    var reqPoints = [
        {"x": canvasMin,"y": yRandomStart},
        {"x": safeLanding1.start.x,"y": randomBottomHalf},
        {"x": safeLanding1.end.x,"y": randomBottomHalf},
        {"x": safeLanding2.start.x,"y": randomBottomHalf2},
        {"x": safeLanding2.end.x,"y": randomBottomHalf2},
        {"x": canvasMax,"y": yRandomEnd}
    ];
    // console.log('Required points: ');
    // reqPoints.forEach(e => console.log(e));

    //for finding index for splicing into an array of objects
    function sortedIndex(array, value) {
        var low = 0,
            high;
        (array) ? (high = array.length) : (high = 0);
    
        while (low < high) {
            var mid = low + high >>> 1;
            if (array[mid] < value) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    count =0;
    newPoints = [];
    //recursively finds the new midpoints and y values and splices them onto newPoints Array
    function recursiveMidpoint (startX,startY,endX,endY){
        var presentBool;
        var x_midpoint = ((Math.round(Math.abs(endX - startX) / 2)) + startX);
        y_sum = startY + endY;
        newPoints.find(e => ((e.x === x_midpoint) || (e.x >= safeLanding1.start.x && e.x <= safeLanding1.end.x) || (e.x >= safeLanding2.start.x && e.x <= safeLanding2.end.x))) ? (presentBool = true) : (presentBool = false);
        if (Math.round(Math.abs(endX - startX)) > minimimPixelSpacing){// changed roughness factor with each iteration surface roughness factor
            count++;
            var s = surfaceRoughnessMultiplier*count;
            var randYmidpoint = (calcNewY((endX-startX),y_sum,s)); //LEAVES 100 AT THE TOP
            if (x_midpoint > safeLanding1.end.x && x_midpoint < safeLanding2.start.x && randYmidpoint <= (middleSectionSpacer)){
                randYmidpoint = randYmidpoint + middleSectionSpacer;
            }
            else if (randYmidpoint >= (canvasMax + 1)){
                randYmidpoint = randYmidpoint - middleSectionSpacer;
            }
            if(!presentBool){
                //newPoints.push({"x": x_midpoint, "y": randYmidpoint});
                newPoints.splice(sortedIndex(newPoints, newPoints.x),0,{'x': x_midpoint,'y': randYmidpoint}); //inserts the new point into the newPoint array at the ordered index
                recursiveMidpoint(startX,startY,x_midpoint,randYmidpoint);
                recursiveMidpoint(x_midpoint,randYmidpoint,endX,endY);
            }
         }
    } 

    // calculates new random Y value based on random
    function calcNewY(xPoint,sumY,s){
        const r_g = randomG(50); //random gaussian number (between -1 and 1)
        var r = s * r_g * xPoint;
        newY = Math.abs(Math.floor(((0.5)* sumY) + r));
        return newY;
    }

    //random gaussian number (between -1 and 1)
    function randomG(v){ 
        var r = 0;
        for(var i = v; i > 0; i --){
            r += Math.random();
        }
        var evenOdd = Math.round(Math.random() * 100);
        if((evenOdd % 2) === 0) return -r /v;
        else return r / v;
    }

    recursiveMidpoint(reqPoints[0].x,reqPoints[0].y,reqPoints[1].x,reqPoints[1].y);
    //platform 1 is 1-2
    recursiveMidpoint(reqPoints[2].x,reqPoints[2].y,reqPoints[3].x,reqPoints[3].y);
    // //platform 1 is 3-4
    recursiveMidpoint(reqPoints[4].x,reqPoints[4].y,reqPoints[5].x,reqPoints[5].y);

    // loading new array with original 6 points and newPoints
    finalArray = [];
    reqPoints.forEach(e => finalArray.push(e));
    for(var i = 0; i < newPoints.length; i++){
        if(newPoints[i].x !== (reqPoints[0].x || reqPoints[1].x || reqPoints[2].x || reqPoints[3].x || reqPoints[4].x || reqPoints[5].x)){
            //finalArray.push({"x": newPoints[i].x, "y": newPoints[i].y});
            finalArray.splice(sortedIndex(newPoints.x, newPoints[i].x),0,{'x': newPoints[i].x,'y': newPoints[i].y});
        }
    }
    
    // SORTS ARRAY BY INTEGER VALUE OF X
    function sortNumber(a, b) {
        return a.x-b.x;
      }
    finalArray = finalArray.sort(sortNumber);

    console.log(finalArray);

    //PRINTS LINE FROM POINTS
    context.beginPath(0,0); 
    context.moveTo(finalArray[0].x, finalArray[0].y);
    for(var i=1; i < finalArray.length; i++){
        context.lineTo(finalArray[i].x, finalArray[i].y);
    }
    context.stroke();
    context.lineTo(canvasMax, canvasMax);
    context.lineTo(canvasMin, canvasMax);
    context.fill();

   } 

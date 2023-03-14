// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    // returns distance in block
    if (someValue > 42) {
        return (someValue-42);
    } else {
        return (42-someValue);
    }
}

function distanceFromHqInFeet(someValue){
    // returns distance in feet
   return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start,destination){
    // returns distance travelled in feet   
    if (destination>start) {
        return (destination-start)*264;
    } else if(start > destination) {
        return (start-destination)*264;
   } 
   
}

function calculatesFarePrice(start, destination){
    // let freeSample=0;
    let distance = distanceTravelledInFeet(start,destination);

    if(distance <= 400) {
        return 0;
    }else if(400 < distance && distance < 2000) {
        return (distance-400)*0.02;
    } else if(2000 < distance && distance < 2500){
        return 25;
   } else if(distance > 2500){
        return 'cannot travel that far';
   }
}

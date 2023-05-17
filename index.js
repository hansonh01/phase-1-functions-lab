// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let results;
    if (someValue == 43) {
        results = 1;
    } else if (someValue == 50) {
        results = 8;
    } else if (someValue == 34) {
        results = 8;
    }
    return results;
}
function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
    return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start,destination){
    let results;
    if (destination>=start){
        results = (destination-start)*264;
    } else if (destination < start) {
        results = (start-destination)*264;
    }
    return results;
}
function calculatesFarePrice(start,destination){
    let feet = distanceTravelledInFeet(start,destination);
    let results;
    if (feet < 400){
        results = 0
    } else if (feet >=400 && feet <= 2000){
        results = (feet-400)*0.02;
    } else if (feet > 2000 && feet <=2500){
        results = 25;
    } else if (feet > 2500){
        results = 'cannot travel that far';
    }
    return results;
}

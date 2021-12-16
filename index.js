function distanceFromHqInBlocks(returnsADistanceInBlocks){
    let value = Math.abs(returnsADistanceInBlocks - 42);
    return value;

}

function distanceFromHqInFeet(returnsADistanceInFeet){
    let value = Math.abs(returnsADistanceInFeet - 42) * 264;
    return value;
}

function distanceTravelledInFeet(num1, num2){
    let returnsTheDistance = Math.abs(num1 - num2) * 264;
    return returnsTheDistance;
}

function calculatesFarePrice(num1, num2){
   if((Math.abs(num1 - num2) *264) <= 264){
        return 0;
   } else if((Math.abs(num1 - num2)*264) < 2000){
        return (((Math.abs(num1 - num2) * 264) / 50)) - 8;
   } else if((Math.abs(num1 - num2) * 264) < 2499){
        return 25;
   } else if((Math.abs(num1 - num2)*264) > 2500){
        return "cannot travel that far";
   }
}
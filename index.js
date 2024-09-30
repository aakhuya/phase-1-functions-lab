function distanceFromHqInBlocks(start) {
    const hqLocation = 42;
    return Math.abs(start - hqLocation);
  }
  
  function distanceFromHqInFeet(start) {
    const blocks = distanceFromHqInBlocks(start);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    console.log(`Distance travelled: ${distance} feet`);
  
    // Case 1: Free sample if distance is 400 feet or less
    if (distance <= 400) {
      return 0;  // Return 0 instead of 'Free sample!'
    }
  
    // Case 2: Charge 2 cents per foot for distances between 400 and 2000 feet
    else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    }
  
    // Case 3: Charge a flat rate of $25 for distances between 2000 and 2500 feet
    else if (distance > 2000 && distance <= 2500) {
      return 25;
    }
  
    // Case 4: Rides over 2500 feet are not allowed
    else {
      console.log('This ride exceeds 2500 feet.');
      return  'cannot travel that far'; 
    }
  }
  
// Code your solution in this file!

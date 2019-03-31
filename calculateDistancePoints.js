const calculateDistancePoints = (hillSize, distance, kPoint) => {
    let basePoints,
        addOrSub;

    switch(hillSize) {
        case 'normal':
            basePoints = 60;
            addOrSub = 2;
            break;
        case 'large':
            basePoints = 120;
            addOrSub = 1.8;
            break;
        case 'flying':
            basePoints = 120;
            addOrSub = 1.2;
            break; 
    }

    const sum = basePoints + (distance - kPoint) * addOrSub;
    return sum < 0? 0 : sum; 

  };
  
  module.exports = calculateDistancePoints;


const fs = require('fs');

const shapeTopoints= {
    X: 1,
    Y: 2,
    Z: 3,
}

const solve = {
    Z: {
        C:'X',
        A:'Y',
        B:'Z',
        point: 6,
    },
    Y: {
        A:'X',
        B:'Y',
        C:'Z',
        point: 3,

    },
    X: {
        B:'X',
        C:'Y',
        A:'Z',
        point: 0,
    }
}

const contScore = (opp, me) => {
    if(opp === 'C' && me === 'X' || opp === 'A' && me === 'Y' || opp === 'B' && me === 'Z' ){
        return 6 + shapeTopoints[me];
    }
    if(opp === 'A' && me === 'X' || opp === 'B' && me === 'Y' || opp === 'C' && me === 'Z' ){
        return 3 + shapeTopoints[me];
    }
    if(opp === 'B' && me === 'X' || opp === 'C' && me === 'Y' || opp === 'A' && me === 'Z' ){
        return shapeTopoints[me];
    }
}

const contScore2 = (opp, end) => {
    const caseObj = solve[end];
    const shape = caseObj[opp];
    return shapeTopoints[shape] + caseObj.point;
}

fs.readFile('input2.txt', 'utf8', function(err, data){ 
  const rounds = data.split('\n').map( e => e.split(' '));
  const scores = rounds.map(round => contScore(round[0], round[1]));
  const scoreSum = scores.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0,
  );
  console.log(scoreSum);
  const score2 = rounds.map(round => contScore2(round[0], round[1]));
  const scoreSum2 = score2.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0,
  );
  console.log(scoreSum2);


});


const fs = require('fs');
  
fs.readFile('input.txt', 'utf8', function(err, data){ 
    const arrOfElfCal = data.split('\n\n')
    const calArr = arrOfElfCal.map(elf => elf.split('\n'))
    const calSum = calArr.map(elf => elf.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
        0,
      ));
    const calMax= Math.max(...calSum);

    const topThree = calSum.sort((a, b)=> b - a);
    const topThreeSum = topThree[0] + topThree[1] + topThree[2];
    console.log(topThreeSum);
});
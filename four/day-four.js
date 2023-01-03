const fs = require('fs');
  
fs.readFile('input4.txt', 'utf8', function(err, data){ 
    const pairs = data.split('\n').map(e => {
        const [a, b] = e.split(',');
        const [firstA, firstB] = a.split('-');
        const [secondA, secondB] = b.split('-');

        if((Number(firstB) - Number(secondA)) > 0 && (Number(secondB) - Number(firstA) ) > 0){
            return true;
        }
        return false;
    });
    console.log(pairs);

    const fullyContain = pairs.reduce((acc, curr) => {
        if (curr) {
            acc++;
        }
        return acc;
    }, 0)

    console.log(fullyContain);


    console.log(843);

});
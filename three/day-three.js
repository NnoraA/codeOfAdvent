const fs = require('fs');

const convertChar = (char) => {
    if(char.charCodeAt(0) <= 90){
        return char.charCodeAt(0) - 38;
    }
    return char.charCodeAt(0) - 96;
}
  
fs.readFile('input3.txt', 'utf8', function(err, data){ 
    const rucksuck = data.split('\n').map(e =>{ 
        const a = e.slice(0, e.length / 2).split('')
        const b = e.slice(e.length / 2, e.length).split('')
        const item = a.map(a => b.find(b=> b === a))
        const i = item.find(item => item);
        return i;
    });

    const prio = rucksuck.map( item => convertChar(item));
    const prioSum = prio.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
        0,
      );

   console.log(prioSum);
    
    const groups = data.split('\n').reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/3)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
  
    resultArray[chunkIndex].push(item.split(''))
  
    return resultArray
  }, [])

  const badge = groups.map(group => {
    const item = group.reduce((acc, curr) =>{
        if(acc.length !== 0){
            const item = acc.map(a => curr.find(b=> b === a))
            acc = item;
            return acc;
        }
        acc = curr;
        return acc;
    }, [] )
    return item.find(item => item);
  })

  const prio2 = badge.map( item => convertChar(item));
    const prioSum2 = prio2.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
        0,
      );


  console.log(prioSum2);
    
});





const fs = require('fs');
  
fs.readFile('input.txt', 'utf8', function(err, data){ 
    const arr = data.split('');

    const marker = arr.reduce((acc, _curr, i) => {
        
        if(i >3 && acc === 0){
            const newArr = [arr[i -1],arr[i -2], arr[i -3], arr[i -4] ];
            const dupl = Array.from(new Set(newArr));
            if(newArr.length === dupl.length) {
                acc = i;
                return acc;
            } else {
                return acc;           
            }
        }
        return acc;
    }, 0)


    const marker2 = arr.reduce((acc, _curr, i) => {
        
        if(i >13 && acc === 0){
            const newArr = arr.map((e, ind) => {
                if(ind<= i-1 && (i-14)<= ind ){

                    return e;
                }
                return null;
            }).filter(item => item);
                console.log(newArr);

            const dupl = Array.from(new Set(newArr));
            if(newArr.length === dupl.length) {
                console.log(i);
                acc = i;
                return acc;
            } else {
                return acc;           
            }
        }
        return acc;
    }, 0)

    console.log(marker2);


});
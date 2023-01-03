const fs = require('fs');

const rec = (commands, i, acc) =>{
    const nextArr = commands[i +1].split(' ');
    if(nextArr[2] === '..'){
        acc.pop();
        return rec(commands, i+1, acc);
    }
    
    if(nextArr[1] === 'cd'){
        acc.push(nextArr[2]);
        return rec(commands, i+1, acc);
    }
    const first= commands[i].split(' ')[2];
 
     acc.push(first)
     return acc;
}
  
fs.readFile('input.txt', 'utf8', function(err, data){ 
    const commands = data.split('\n');
    let curr = [];
    const fileSystem = commands.map((e, i)=>{
        const currArr= e.split(' ');
        if(currArr[1] === 'cd'){
            const acc = rec(commands, i, curr);
            return acc;
        }

        if(currArr[1] === 'ls' || currArr[0] === 'dir' ){
            return null;
        }
        return currArr[0];
    })

    const filtered = fileSystem.filter(e => e !== null);
    console.log(filtered);

});
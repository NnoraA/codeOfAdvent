const fs = require('fs');
  
fs.readFile('input5.txt', 'utf8', function(err, data){ 
    const [stacks, inst] = data.split('\n\n');
    const stacksToArr = stacks.split('\n').reverse().map(stack => stack.match(/.{1,4}/g));
    const groupedStacks = stacksToArr.reduce((acc, obj, index) => {
        if(index > 0){
           obj.forEach((e, i) =>{
            const key = i + 1;
            const value = e.slice(1, 2);
            if(value !== ' '){
                const curGroup = acc[key] ?? [];
            curGroup.push(value);
            acc[key] = curGroup;
            }   
        }) 
        }
        
        return acc;
      }, {})

    const order = inst.split('\n').map(e => {
        const chunk = e.split(' ');
        return {amount: chunk[1], from:chunk[3], to: chunk[5]}
    })
    //first part
    // order.map(e => {
    //     for(let i =0; i < e.amount; i++){
    //         const item = groupedStacks[e.from].pop()
    //         groupedStacks[e.to].push(item); 
    //     }
    // })

    order.map(e => {
        if(e.amount === 1){
            const item = groupedStacks[e.from].pop()
            groupedStacks[e.to].push(item); 
        }else{
            const item = groupedStacks[e.from].splice((groupedStacks[e.from].length - e.amount),e.amount)
            groupedStacks[e.to].push(...item);
        }     
            
       
    })

    const topItems = Object.values(groupedStacks).map(e => e[e.length -1]).join("");
    console.log(groupedStacks);
    console.log(topItems);


});
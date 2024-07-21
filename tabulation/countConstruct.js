const countConstruct = (target, words)=>{
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for(let i=0;i<target.length;i++){
        if(table[i] !== 0){
            for(let word of words){
                if(target.slice(i,i+word.length) === word){
                    table[i+word.length] += table[i];
                }
            }
        }
    }
    return table[target.length]
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
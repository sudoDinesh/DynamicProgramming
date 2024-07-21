const allConstruct = (target, words) => {
    const table = Array(target.length + 1).fill().map(() => [])
    table[0] = [[]]
    for(let i=0;i<=target.length;i++){
        for(let word of words){
            if(target.slice(i, i+word.length) === word){
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
}


console.log(allConstruct('abcdef', ['ab', 'abc', 'abcd', 'cd', 'def', 'ef', 'c']))
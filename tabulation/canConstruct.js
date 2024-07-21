const canConstruct = (target, words) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    for(let i =0; i <= target.length; i++){
        if(table[i]){
            for(let word of words){
                if(target.slice(i, i+word.length) === word){
                    table[i+word.length] = true;
                }
            }
        }
    }
    return table[target.length]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'abcd', 'cd', 'def']))
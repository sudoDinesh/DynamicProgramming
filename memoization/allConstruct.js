const allConstruct = (target, words, memo = {}) => {
    if(target in memo){
        return memo[target];
    }
    if(target === ''){
        return [[]]
    }

    const result = []
    for(let word of words){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, words, memo)
            const targetWays = suffixWays.map((ele)=>[word, ...ele])
            result.push(...targetWays)
        }
    }
    memo[target] = result;
    return result;
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
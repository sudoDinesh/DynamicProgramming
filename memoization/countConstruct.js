const canConstruct = (target, words, memo={}) => {
    if(target in memo){
        return memo[target];
    }
    if(target = ''){
        return 1;
    }

    const totCount = 0

    for(let word of words){
        if(target.indexOf(word) === 0){
            const remain = target.slice(word.length)
            const count = canConstruct(remain, words, memo)
            totCount += count;
        }
    }
    memo[target] = totCount;
    return totCount;
}
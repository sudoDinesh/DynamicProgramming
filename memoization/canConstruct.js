const canConstruct = (target, words, memo = {}) => {
    if(target in memo){
        return memo[target];
    }
    if(target === ''){
        return true;
    }

    for(let word of words){
        if(target.indexOf(word) === 0){
            remain = target.slice(word.length)
            if(canConstruct(remain, words, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}


console.log(canConstruct('eeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']))
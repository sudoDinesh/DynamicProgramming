const canSum = (target, numbers, mem = {}) => {
    if(target === 0) return true;
    if(target in mem) return mem[target];
    if(target < 0) return false;
    for(let num of numbers){
        const remain = target - num;
        if(canSum(remain, numbers, mem) === true){
            mem[remain] = true;
            return true;
        }
    }
    mem[target] = false;
    return false;
}

console.log(canSum(3000, [7, 14, 10]));
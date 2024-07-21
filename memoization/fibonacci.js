
const fibo = (n, mem= {}) => {
    if(n in mem){
        return mem[n];
    }
    if (n <= 1)
        return 1;
    else{
        mem[n] = fibo(n-1, mem) + fibo(n-2, mem);
        return mem[n];
    }
}

console.log(fibo(50));
const gridTrav = (m, n , mem = {}) =>{
    const key = m + ',' + n;
    if(key in mem) return mem[key];
    if( m == 1 && n == 1) return 1;
    if( m == 0 || n == 0) return 0;
    else{
        mem[key] = gridTrav(m, n-1, mem) + gridTrav(m-1, n, mem);
        return mem[key];
    }
}


console.log(gridTrav(18,18));
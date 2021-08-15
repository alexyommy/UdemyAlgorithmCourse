str = ['code', 'doce', 'ecod','framer','frame']

function funWithAnagrams(array) {
    if length()
    return array.sort();
}

console.log(funWithAnagrams(str));

function findTheFactor(n,p) {
    factorList = [];
    for(let i = 1; i <= n; i++){
        if ( n % i == 0) {
            factorList.push(i);
        }
    }
    return factorList[p-1];
}

console.log(findTheFactor(20,3));
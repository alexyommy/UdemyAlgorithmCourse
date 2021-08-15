str = "Hi my name is Alex"
function reverseString(str){
    // Check input
    if (!str || str.length<2 || typeof str !== 'string') {
        return 'Invalid input'
    }
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    
    return backwards.join('');
}
console.log(reverseString(str))
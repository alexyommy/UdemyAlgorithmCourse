// Naive
function hasPairWithSum(arr,sum) {
    var len = arr.length;
    for(var i = 0; i < len-1; i++) {
        for( var j = 0; j < len; j++) {
            if(arr[i] + arr[j] === sum)
                return true;
        }
    }
    return false;
}

function hasPairWithSum2(arr,sum) {
    const mySet = new Set();
    const len = arr.length;
    for(var i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum-arr[i]);
        console.log(mySet);
    }
    return false;
}

console.log(hasPairWithSum2([6,2,5,4,8,7,4], 12));
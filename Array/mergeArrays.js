a = [0,3,4,31]
b = [4,6,30]
function mergeSortedArrays(array1,array2) {
    const mergedArray = []
    let array1Item = a[0];
    let array2Item = b[0];
    let i = 1;
    let j = 1;
    
    // Check input
    if (array1.length === 0) {
        return b;
    }
    if (array2.length === 0) {
        return a;
    }

    while(array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item)
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
    }

console.log(mergeSortedArrays(a,b))
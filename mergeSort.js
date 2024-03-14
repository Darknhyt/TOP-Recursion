/*
# Assignment 2
## Merge Sort
1. Input: [3, 2, 1, 13, 8, 5, 0, 1]
Expected: [0, 1, 1, 2, 3, 5, 8, 13]
2. Input:[105, 79, 100, 110
Expected: [79, 100, 105, 110]
*/
function mergeSort(array){
    if(array.length <= 1){
        return array
    } else {
        let result = []
        let middle = Math.floor(array.length / 2)
        let left =  mergeSort(array.slice(0,middle))
        let right = mergeSort(array.slice(middle, array.length))
        if(left[left.length-1] <= right[0]){
            result = [...left, ...right]
        } else {
            result = merge(left,right)
        }
        return result
    }
}
function merge(left,right){
    let result = []
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    } 
    return [...result,...left, ...right]
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
// Iterative fibonacci
export function fibs(number){
    let result = [0, 1]
    for (let i = 1; i < number-1; i++) {
        result.push(result[i-1]+result[i])  
    }
    return result
}
// Recursive fibonacci
export function fibsRec(number){
    if(number < 3){
        return [0,1]
    } else {
        let result = fibsRec(number-1)
        let index = result.length - 1 
        result.push(result[index] + result[index-1])
        return result
    }
}
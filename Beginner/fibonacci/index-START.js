/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let fibArray = [0,1]
    for(i=0,j=1,k=0; k<n;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }

    return fibArray[fibArray.length-1]
}

module.exports = fibonacci
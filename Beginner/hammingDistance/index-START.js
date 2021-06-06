/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let answer = 0
    let stringAArr = [...stringA]
    let stringBArr = [...stringB]

    stringAArr.forEach((x,i)=>{if(x!==stringBArr[i]){answer++}})

    return stringA.length !== stringB.length ? 'Strings do not have equal length' : answer
}



module.exports = hammingDistance
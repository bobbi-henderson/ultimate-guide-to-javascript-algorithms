/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let counter = {}
    let maxValue = 0
    let answer = ''

    text.split('').forEach((x)=>{
        if(counter[x]){
            counter[x]++
        } else {
            counter[x] = 1
        }
    })

    for(let char in counter) {
        if(counter[char] > maxValue){
            maxValue = counter[char] 
            answer = char
        }
    }

    return answer
}



module.exports = maxRecurringChar;
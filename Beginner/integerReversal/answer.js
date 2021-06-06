function reverseInt(num) {
    return [...num.string()].reduce((acc, char) => char + acc, '').join('') + Math.sign(num)
}
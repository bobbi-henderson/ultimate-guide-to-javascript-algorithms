function pigLatin(str) {
    return str.replace(/^([aeiouy])(._)/, '$1$2way').replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
export function repeatWord(word, num) {
    let words = '';
    if (Number.isInteger(num) && num > 0 
        && (typeof word === "string" || word instanceof String) 
        && word.length > 0) {
        for (let i = 1; i <= num; ++i) {
            words += word + ', ';
        }
        return words.substring(0, words.length - 2);
    } else {
        return "Error! Please enter not empty string and number > 0";
    }
}
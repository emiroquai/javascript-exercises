const palindromes = function (string) {
    const stringProcessed = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return stringProcessed.split("").reverse().join("") == stringProcessed;
    }


// Do not edit below this line
module.exports = palindromes;

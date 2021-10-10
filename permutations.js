var getPermutation = function(n, k) {
    let numString = '';
    let comboArray = [];

    for (i = 1; i <= n; i++) {
        numString = numString.concat(i)
    }

    function combo(string, remaining) {
        if (remaining.length === 1) {
            let newString = string.concat(remaining)
            comboArray.push(newString)            
        }

        for (var i = 0; i < remaining.length; i++) {
            let newString = string + remaining[i]
            let newRemaining = remaining.replace(remaining.charAt(i), '')            
            combo(newString, newRemaining)
        }
    }

    combo('', numString)

    return comboArray[k-1]
};

console.log(getPermutation(4, 9))
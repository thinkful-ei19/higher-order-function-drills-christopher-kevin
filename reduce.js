const sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const sArray = sentence.split(' ');

function reduce (arr) {
    return arr.reduce(function(secretCode, word) {
        if (word.length === 3) {
            return secretCode + ' ';
        }
        else {
            return secretCode + word[word.length - 1].toUpperCase();
        }
    }, '');
}

const result = reduce(sArray);
console.log(result);
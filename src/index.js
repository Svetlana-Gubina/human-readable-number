module.exports = function toReadable(number) {
    let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let g = [
        '', 'hundred', 'thousand', 'million',
    ];

    if (!Number.isInteger()) {
        throw new TypeError('The argument must be an integer');
    }

    if (number < 0) {
        return 'Please enter positive number';
    }

    let test = number.toString();
    let len = test.length;

    if (test.length > 5) {
        return 'Number is too big';
    }

    // Dozens
    let dozensCount = Number(test[len - 2] + test[len - 1]);
    let dozens = dozensCount < 20 ? a[dozensCount] : b[test[1]] + " " + a[test[2]];

    // Hundreds
    let hundredsCount = Number(test[len - 3]);
    let hundreds = a[hundredsCount] + " " + g[1];

    // thousands
    let thousandsCount = Number(test[len - 4]);
    let thousands = a[thousandsCount] + " " + g[2];

    // millions
    let millionsCount = Number(test[len - 5]);
    let millions = a[millionsCount] + " " + g[3];

    let resul = '';

    switch (true) {
        case number > 0 && number < 20:
            resul = a[number];
            break;
        case number >= 20 && test.length < 3:
            resul = `${b[test[0]]} ${a[test[1]]}`;
            break;
        case test.length === 3:
            resul = `${hundreds} ${dozens}`;
            break;
        case test.length === 4:
            resul = `${thousands} ${hundreds} ${dozens}`;
            break;
        case test.length === 5:
            resul = `${millions} ${thousands} ${hundreds} ${dozens}`;
            break;
        default:
            resul = "zero";
    }

    return resul.replace(/\s+/g, ' ').trim();
}

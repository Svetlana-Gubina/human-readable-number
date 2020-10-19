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
        '', 'hundred', 'thousand', 'million', 'billion', 'trillion',
    ];

    let test = number.toString();

    if (test.length > 9) {
        return 'overflow';
    }

    let resul = '';

    switch (true) {
        case number < 0:
            resul = 'negative number';
        case number > 0 && number < 20:
            resul = a[number];
            break;
        case number >= 20 && test.length < 3:
            resul = b[test[0]] + " " + a[test[1]];
            break;
        case test.length === 3:
            let end = test[1] + test[2];
            let numberEnd = Number(end);
            let middle = numberEnd < 20 ? a[numberEnd] : b[test[1]] + " " + a[test[2]];
            resul = a[Number(test[0])] + " " + g[1] + " " + middle;
            break;
        default:
            resul = "zero";
    }

    return resul.replace(/\s+/g, ' ').trim();
}

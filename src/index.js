const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = [];
    arr = expr.match(/.{1,10}/g);
    rez = [];
    for ( i=0; i<arr.length; ++i) {
        let str;
        let zeroL = arr[i].indexOf("1");
        if (zeroL == -1) zeroL = 0;
        str = arr[i].slice(zeroL, 10);
        str = str.replace("**********", " ");
        str = str.replace(/10/g, ".");
        str = str.replace(/11/g, "-");
        if (str === " ") { rez[i] = " ";}
        else {rez[i] = MORSE_TABLE[str];}
    }
    return rez.join(""); 
}

module.exports = {
    decode
}
// getting data  
let randomPass = document.getElementById('rand-pass');
let passLength = document.getElementById('leng');
let upperCases = document.getElementById('upper');
let lowerCases = document.getElementById('lower');
let cntNumber = document.getElementById('number');
let ctnSymbol = document.getElementById('symbol');
let button = document.getElementById('generate-pass');

// getting data
let copy = document.getElementById('copy');

// data which we need to create random passwords
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

// adding event listener
button.addEventListener('click', generatePassword)


// functions which helps us to create a random passwords
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// with this function we gonna check chekbox's and add it to html 
function generatePassword() {

    // getting data which comes from len input
    const len = passLength.value;

    let password = "";

    if (upperCases.checked) {
        password += getUppercase();
    }

    if (lowerCases.checked) {
        password += getLowercase();
    }

    if (cntNumber.checked) {
        password += getNumber();
    }

    if (ctnSymbol.checked) {
        password += getSymbol();
    }

    // we gonna call generate function which do same thing like generatepassword. 
    //  Simply we gonna loop and add it to html
    for (let i = password.length; i < len; i++) {
        const x = generate();
        password += x;
    }

    randomPass.innerText = password;

    
    function chechker() {
        if(password === '') {
            randomPass.innerText = 'Please select one option';
        }
    }

    chechker();
    
}



function generate() {
    const xs = [];
    if (upperCases.checked) {
        xs.push(getUppercase());
    }

    if (lowerCases.checked) {
        xs.push(getLowercase());
    }

    if (cntNumber.checked) {
        xs.push(getNumber());
    }

    if (ctnSymbol.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}


// copying function
copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const storedPassword = randomPass.innerText;

    if (!storedPassword) {
        return;
    }

    textarea.value = storedPassword;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
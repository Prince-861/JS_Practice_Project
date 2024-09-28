const passwordBox = document.getElementById("password");
const length = 12;//password length

// adding different characters that are allowed in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Above we have created only 4 password characters
    // So, below we are adding characters one by one until the length becomes 12    
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * symbol.length)];
    }
    passwordBox.value = password;//It will display the password in the input box.
}

function copyPassword(){
    // By using below two lines it will select the passwordBox and it will copy the text.
    passwordBox.select();
    document.execCommand("copy");
}

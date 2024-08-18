
document.getElementById("generatePW").addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword() {
    let passwordLength;
    let includeUpperCase;
    let includeLowerCase;
    let includeNumber;
    let includeSpecialCharacter;

    passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));

    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid number between 8 and 128.");
        passwordLength = parseInt(prompt("Please choose a password length between 8 and 128 characters"));
    }

    includeUpperCase = confirm("Would you like to include uppercase letters?");
    includeLowerCase = confirm("Would you like to include lowercase letters?");
    includeNumber = confirm("Would you like to include numbers?");
    includeSpecialCharacter = confirm("Would you like to include special characters?");

    if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharacter) {
        alert("You must choose at least one character type!");
        return "";
    }

    let availableChar = "";
    if (includeUpperCase) {
        availableChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (includeLowerCase) {
        availableChar += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (includeNumber) {
        availableChar += '0123456789';
    }

    if (includeSpecialCharacter) {
        availableChar += '@#$%^&*';
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * availableChar.length);
        password += availableChar.charAt(randomIndex);
    }

    return password;
}
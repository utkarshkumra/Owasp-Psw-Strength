// node <filePath> <password>
let password = process.argv[2]

const configs = {
    maxLength: 128,
    minLength: 10,
    minPhraseLength: 20,
}

// optional minimum phrase length
if (password.length > configs.minPhraseLength && (!/(.)\1{2,}/.test(password)) ){
    console.log('Pass Phrase Accepted');
}

else{

    // enforce a minimum length
    if (password.length < configs.minLength) {
        console.log('The password must be at least ' + configs.minLength + ' characters long.');
    }

    // enforce a maximum length
    if (password.length > configs.maxLength) {
        console.log('The password must be fewer than ' + configs.maxLength + ' characters.');
    }

    // forbid repeating characters
    if (/(.)\1{2,}/.test(password)) {
        console.log('The password may not contain sequences of three or more repeated characters.');
    }

    // require at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        console.log('The password must contain at least one lowercase letter.');
    }

    // require at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        console.log('The password must contain at least one uppercase letter.');
    }

    // require at least one number
    if (!/[0-9]/.test(password)) {
        console.log('The password must contain at least one number.');
    }

    // require at least one special character
    if (!/[^A-Za-z0-9]/.test(password)) {
        console.log('The password must contain at least one special character.');
    }
}
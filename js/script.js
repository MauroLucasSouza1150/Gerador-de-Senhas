// Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generationPasswordElement = document.querySelector("#generation-password");
const copyPasswordButton = document.querySelector("#copypassword");

// Funções

// gerar Letras, Números e Símbolos para as Senhas
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}``'=-*&¨%$#@!?/|;:<>^~_"

    return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getSymbol([4]));

const generatePassword = (getLetterLowerCase, getLetterUperCase, getNumber, getSymbol) => {

    let password = "";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUperCase,
        getNumber,
        getSymbol
    ];

    for(let i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randowValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randowValue;
        });
    }
    password = password.slice(0, passwordLength);  // Tirar os últimos 2 números para ficar com 10 caracteres:

    console.log(password);

    generationPasswordElement.style.display = "block";
    generationPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUperCase,
        getNumber,
        getSymbol
    );
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generationPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {

        copyPasswordButton.innerText = "Senha Copiada !";

        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar";
        }, 1000);
    });
});


let text = prompt("Введіть що потрібно зашифрувати")
let output = "";
for (let i = 0; i < text.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < text.length; j++) {
        if (i == j && i != text.length) {
            j++;
        }
        else if (i == j) {
            break;
        }
        if (text[i] == text[j]) {
            alreadyExists = true;
            break;
        }
    }
    if (alreadyExists) {
        output += ")";
    }
    else {
        output += "(";
    }
}
alert(output);
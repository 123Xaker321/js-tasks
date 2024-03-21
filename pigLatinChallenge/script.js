function check(str) {
    return !(/^[A-Za-zА-Яа-яЁё0-9ІіЇїЄє]+$/.test(str));
}
function changeElements() {
    let output = "";
    let words = prompt("Введіть строку для перетворення(без символів)").split(" ");
    for (let i = 0; i < words.length; i++) {
        if (check(words[i])) {
            alert("Неправильно введені дані, у строці не повинно бути символів");
            return;
        }
        let wordLeters = words[i].split("");
        let word = "";
        for (let i = 1; i < wordLeters.length; i++) {
            word += wordLeters[i];
        }
        word += `${wordLeters[0]}ay`;
        words[i] = word;
    }
    for (let i = 0; i < words.length; i++) {
        output += `${words[i]} `;
    }
    alert(`Ваша строка успішно перетворена: ${output}`);
}
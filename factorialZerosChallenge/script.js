function countZerosInFactorial(n) {
    if (isNaN(n)) {
        alert("Ви ввели неправильні дані");
        return;
    }
    let zeros = "";
    let zerosCount = 0;
    for (let i = 5; Math.floor(n / i) > 0; i *= 5) {
        zerosCount += n / i;
    }
    zerosCount = Math.floor(zerosCount);
    if (zerosCount == 0) {
        alert(`Кількість нулів вашого числа ${n} у факторіалі ${zerosCount}`);
    }
    else {
        for (let i = 0; i < zerosCount; i++) {
            zeros += "0";
        }
        alert(`Кількість нулів вашого числа ${n} у факторіалі ${zerosCount}: ${zeros}`);
    }
}
countZerosInFactorial(Number(prompt("Введіть ваше число")));
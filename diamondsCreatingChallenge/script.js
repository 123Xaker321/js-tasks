function diamond(n) {
    // Проверка на четность и отрицательное значение
    if (n <= 0 || n % 2 === 0) {
        return null;
    }

    let diamondStr = '';
    const mid = Math.floor(n / 2);

    // Создание верхней части ромба
    for (let i = 0; i <= mid; i++) {
        diamondStr += ' '.repeat(mid - i) + '*'.repeat(2 * i + 1) + '\n';
    }

    // Создание нижней части ромба
    for (let i = mid - 1; i >= 0; i--) {
        diamondStr += ' '.repeat(mid - i) + '*'.repeat(2 * i + 1) + '\n';
    }

    return diamondStr;
}
alert(diamond(prompt("Введіть розмір діаманту")));
function rgbToHex(rgb) {
    const rgbValuesArray = rgb.split(",");
    let hexRgbValuesArray;
    let hex = "";
    if (rgbValuesArray.length != 3) {
        alert('Введіть правильні дані у форматі rgb, наприклад "255, 255, 255"');
        return;
    }
    for (let i = 0; i < rgbValuesArray.length; i++) {
        rgbValuesArray[i] = Number(rgbValuesArray[i]);
        if (isNaN(rgbValuesArray[i])) {
            alert("Ви неправильно ввели дані, у форматі rgb повинно бути три числа в діапазоні від 0 до 255")
            return
        }
        if (rgbValuesArray[i] < 0) {
            rgbValuesArray[i] = 0;
        }
        if (rgbValuesArray[i] > 255) {
            rgbValuesArray[i] = 255;
        }
        hexRgbValuesArray = rgbValuesArray;
        hexRgbValuesArray[i] = hexRgbValuesArray[i] == 0 ? "00" : hexRgbValuesArray[i].toString(16);
    }
    for (const hexRgbValuesElement of hexRgbValuesArray) {
        hex += hexRgbValuesElement;
    }
    alert(`Ваші дані rgb успішно перетворені у hex ${hex}`);
}
rgbToHex(prompt("Введіть ваш колір в форматі rgb"));
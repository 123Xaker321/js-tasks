function rangeExtraction(arr) {
    let result = '';
    let start = arr[0];
    let end = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            end = arr[i];
        } else {
            if (start === end) {
                result += start + ',';
            } else if (end === start + 1) {
                result += start + ',' + end + ',';
            } else {
                result += start + '-' + end + ',';
            }
            start = arr[i];
            end = arr[i];
        }
    }

    if (start === end) {
        result += start;
    } else if (end === start + 1) {
        result += start + ',' + end;
    } else {
        result += start + '-' + end;
    }

    return alert(result);
}

let input = prompt("Введіть набір чисел через кому:");
rangeExtraction(input.split(",").map(Number));
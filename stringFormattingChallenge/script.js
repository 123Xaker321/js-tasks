function first_non_repeating_letter(str) {
    let strLettersNormal = str.split("");
    let strLetters = str.toLowerCase().split("");
    let foundFirstLetter;
    
    for(let j = 0; j < strLetters.length; j++){
        let foundDuplicate = false;
        for(let i = 0; i < strLetters.length; i++){
            if(i == j){
                i++;
            }
            if(strLetters[j] == strLetters[i] && !foundDuplicate){
                foundDuplicate = true;
            }
            else if(strLetters[j] == strLetters[i] && foundDuplicate){
                break;
            }
        }
        if(!foundDuplicate){
            foundFirstLetter = strLettersNormal[j];
                alert(foundFirstLetter);
                return;
        }
    }
}
first_non_repeating_letter(prompt("Введіть будь-який рядок"));
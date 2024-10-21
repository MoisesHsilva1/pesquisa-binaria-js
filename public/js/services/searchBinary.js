import AddAmountNumbers from "../models/addAmoutNumbers.js";

export default class SearchBinary {
    constructor(addAmountNumbers) {
        this.addAmountNumbers = addAmountNumbers;
    }

    search(item) {
        const array = this.addAmountNumbers.getNumbers();
        array.sort((a, b) => a - b); 
        return this.binarySearch(array, item);
    }

    binarySearch(array, item) {
        let baixo = 0;
        let alto = array.length - 1;

        while (baixo <= alto) {
            let meio = Math.floor((baixo + alto) / 2);
            let chute = array[meio];

            if (chute === item) {
                return meio;
            }
            chute > item ? (alto = meio - 1) : (baixo = meio + 1);
        }
        return "vazio";
    }
}

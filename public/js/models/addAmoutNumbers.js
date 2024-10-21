export default class AddAmountNumbers {
    constructor() {
        this.numbers = [];
        this.inputNumbers = document.getElementById('input-amountNumbers');
    }
    initEvents() {
        this.inputNumbers.addEventListener('input', () => this.getValueNumbers());
    }
    getValueNumbers() {
        const value = this.inputNumbers.value.trim();
        value && this.numbers.push(Number(value));
        this.inputNumbers.value = '';
    }
    getNumbers() {
        return this.numbers;
    }
}

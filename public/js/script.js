import AddAmountNumbers from "./models/addAmoutNumbers.js";
import SearchBinary from "./services/searchBinary.js";

const addAmountNumbers = new AddAmountNumbers();
const searchBinary = new SearchBinary(addAmountNumbers);

document.getElementById('button-searchBinary').addEventListener('click', (event) => {
    event.preventDefault();

    const searchNumber = Number(document.getElementById('input-searchNumber').value);
    const index = searchBinary.search(searchNumber);
    
    const responseElement = document.getElementById('response-search');
    if (index !== "vazio") {
        responseElement.textContent = `Número ${searchNumber} encontrado no índice: ${index}`;
    } else {
        responseElement.textContent = `Número ${searchNumber} não encontrado.`;
    }
});

import UI from "./controller/UI.js";

const form = document.getElementById('book-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    UI.createBookPageItem();
})
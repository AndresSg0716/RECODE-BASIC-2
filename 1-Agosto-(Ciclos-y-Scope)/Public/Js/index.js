// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const inputFruta = document.getElementById('inputfruta');
    const addFrutaBtn = document.getElementById('addFrutaBtn');
    const listaFrutas = document.getElementById('listaFrutas');
    let frutas = [];

    function updateView() {
        listaFrutas.innerHTML = '';
        frutas.forEach((fruta, index) => {
            const li = document.createElement('li');
            li.textContent = fruta;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.addEventListener('click', () => {
                frutas.splice(index, 1);
                updateView();
            });

            li.appendChild(deleteBtn);
            listaFrutas.appendChild(li);
        });
    }

    addFrutaBtn.addEventListener('click', () => {
        const fruta = inputFruta.value.trim();
        if (fruta) {
            frutas.push(fruta);
            inputFruta.value = '';
            updateView();
        }
    });

});
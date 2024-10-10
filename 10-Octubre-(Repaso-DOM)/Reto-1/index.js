document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#item-input');
    const addItemButton = document.querySelector('#add-item');
    const dynamicList = document.querySelector('#dynamic-list');
    const generateListButton = document.querySelector('#generate-list');
    const finalListDiv = document.querySelector('#final-list');

    addItemButton.addEventListener('click', addItem);
    generateListButton.addEventListener('click', generateFinalList);

    function addItem() {
        const inputValue = input.value.trim();
        if (inputValue === '') return;

        const listItem = document.createElement('li');

        const itemText = document.createElement('input');
        itemText.type = 'text';
        itemText.value = inputValue;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => listItem.remove());

        const upButton = document.createElement('button');
        upButton.textContent = '⬆️';
        upButton.addEventListener('click', () => {
            const prev = listItem.previousElementSibling;
            if (prev) dynamicList.insertBefore(listItem, prev);
        });

        const downButton = document.createElement('button');
        downButton.textContent = '⬇️';
        downButton.addEventListener('click', () => {
            const next = listItem.nextElementSibling;
            if (next) dynamicList.insertBefore(next, listItem);
        });

        listItem.appendChild(itemText);
        listItem.appendChild(upButton);
        listItem.appendChild(downButton);
        listItem.appendChild(deleteButton);
        
        dynamicList.appendChild(listItem);
        input.value = '';
    }

    function generateFinalList() {
        finalListDiv.innerHTML = '';  
        const listItems = dynamicList.querySelectorAll('li input');
        const finalList = document.createElement('ul');

        listItems.forEach(item => {
            const finalItem = document.createElement('li');
            finalItem.textContent = item.value;
            finalList.appendChild(finalItem);
        });

        finalListDiv.appendChild(finalList);
    }
});

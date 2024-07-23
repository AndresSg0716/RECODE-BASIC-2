const ApiEp = async(pagina)=>{
    let URL = 'https://rickandmortyapi.com/api/episode?page=${pagina}';
    const api=await fetch(URL);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#Resultado");
    divRes.innerHTML=""
    data.results.map(item=>{
        divItem=document.createElement('div');
        divItem.innerHTML=`
            <div class="card">
                <div class="card-content">
                    <h2 class="card-title">${item.name}</h2>
                    <h2 class="card-title">${item.id}</h2>
                    <p class="card-text">Lanzamiento:  ${item.air_date}</p>
                    <p class="card-text">Episodio:  ${item.episode}</p>
                    <p class="card-text">Creacion: ${item.created}</p>
                    
                    <button class="btn" 

                        data-name="${item.name}"
                        data-id="${item.id}" 
                        data-air_date="${item.air_date}" 
                        data-episode="${item.episode}" 
                        data-created="${item.created}"
                        onClick='guardarCard(event)'>Guardar</button>
                </div>
            </div>
        `;
        divRes.appendChild(divItem);
        
    })
}
ApiEp(1);

function guardarCard(event) {
    const button = event.target;
    const item = {
        name: button.getAttribute('data-name'),
        id: button.getAttribute('data-id'),
        air_date: button.getAttribute('data-air_date'),
        episode: button.getAttribute('data-episode'),
        created: button.getAttribute('data-created'),
    };
    console.log("Guardando item:", item);
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    alert(`${item.name} ha sido guardado!`);
}

document.getElementById('mostrarItemsBtn').addEventListener('click', mostrarItems);

function mostrarItems() {
    limpiar();
    const itemsContainer = document.getElementById('itemsGuardados');
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    if (savedItems.length === 0) {
        itemsContainer.innerHTML = '<p>No hay items guardados.</p>';
        return;
    }

    savedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="card cardLocal">
                <div class="card-content">

                    <h2 class="card-title">${item.name}</h2>
                    <h2 class="card-title">id: ${item.id}</h2>
                    <p class="card-text">Lanzamiento:  ${item.air_date}</p>
                    <p class="card-text">Episodio:  ${item.episode}</p>
                    <p class="card-text">Creacion: ${item.created}</p>
                    
                    <button class="btn" 
                        data-name="${item.name}" 
                        data-id="${item.id}"
                        data-air_date="${item.air_date}" 
                        data-episode="${item.episode}" 
                        data-created="${item.created}"
                        onClick='eliminarItem(event)'>Eliminar</button>
                </div>
            </div>
        `;

        itemsContainer.appendChild(itemElement);
    });
}

document.getElementById('limpiarStorageBtn').addEventListener('click', limpiarStorage);

function limpiar(){
    const itemsContainer = document.getElementById('itemsGuardados');
    itemsContainer.innerHTML = ''; 
}

function limpiarStorage() {
    localStorage.removeItem('savedItems');
    alert('Todos los items guardados han sido eliminados.');
    document.getElementById('itemsGuardados').innerHTML = '';
}


document.getElementById('limpiarBtn').addEventListener('click', limpiar);



function eliminarItem(event) {
    const button = event.target;
    let nameEliminar=button.getAttribute('data-name');
    console.log(nameEliminar);
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const updatedItems = savedItems.filter(item => item.name !== nameEliminar);
    localStorage.setItem('savedItems', JSON.stringify(updatedItems));
    alert(`${nameEliminar} ha sido eliminado!`);
    mostrarItems(); 
}
const ApiUs = async(usuarios)=>{
    let URL = 'https://jsonplaceholder.typicode.com/users';
    const api = await fetch(URL);
    const data = await api.json();
    console.log(data);
    divRes=document.querySelector('#usuarios');
    divRes.innerHTML=""
    data.map(item => {
        divItem = document.createElement('div')
        divItem.innerHTML=`
            <div class="card">
                <div class="card-content">
                    <h2 class="card-title">Nombre: ${item.name}</h2>
                    <h2 class="card-title">Nombre De Usuario: ${item.username}</h2>
                    <p class="card-text">Correo:  ${item.email}</p>
                    <p class="card-text">Telefono:  ${item.phone}</p>
                    <p class="card-text">Direccion: ${item.address.city}, ${item.address.street}, ${item.address.suite}</p>
                    <p class="card-text">Sitio Web: ${item.website}</p>
                    <p class="card-text">Compañia: ${item.company.name}</p>
                    
                    <button class="btn" 

                        data-name="${item.name}"
                        data-username="${item.username}" 
                        data-email="${item.email}" 
                        data-phone="${item.phone}" 
                        data-address="${item.address.city},${item.address.street},${item.address.suite}"
                        data-website="${item.website}"
                        data-company="${item.company.name}"
                        onClick='guardarCard(event)'>Guardar</button>
                </div>
            </div>
        `;
        divRes.appendChild(divItem);
    }) 
}
ApiUs(1);

function guardarCard(event) {
    const button = event.target;
    const item = {
        name: button.getAttribute('data-name'),
        username: button.getAttribute('data-username'),
        email: button.getAttribute('data-email'),
        phone: button.getAttribute('data-phone'),
        address: button.getAttribute('data-address'),
        website: button.getAttribute('data-website'),
        company: button.getAttribute('data-company'),
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
                    <h2 class="card-title">${item.username}</h2>
                    <p class="card-text">Correo:  ${item.email}</p>
                    <p class="card-text">Telefono:  ${item.phone}</p>
                    <p class="card-text">Direccion: ${item.address.city}, ${item.address.street}, ${item.address.suite}</p>
                    <p class="card-text">Sitio Web: ${item.website}</p>
                    <p class="card-text">Compañia: ${item.company.name}</p>
                    
                    <button class="btn" 
                         data-name="${item.name}"
                        data-username="${item.username}" 
                        data-email="${item.email}" 
                        data-phone="${item.phone}" 
                        data-address="${item.address.city},${item.address.street},${item.address.suite}"
                        data-website="${item.website}"
                        data-company="${item.company.name}"
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
    alert('Todos los Usuarios guardados han sido eliminados.');
    document.getElementById('itemsGuardados').innerHTML = '';
}

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
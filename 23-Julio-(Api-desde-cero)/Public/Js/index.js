function API() {
    function APIUB() {
        const btnUB =  document.querySelector("#btnUB")
        const ApiUb = async (ubicaciones) => {
            let URLUb = 'https://rickandmortyapi.com/api/location'
            async function fetchDataUB() {
                const responseUB = await fetch(URLUb)
                const dataUB = await responseUB.json()
                console.log(dataUB)
                return dataUB 
            }
            DivresUB = document.querySelector('#ubicaciones')
            DivresUB = innerHTML = ''
            dataUb.results.map(itemub => {
                Divitemub = document.createElement('div')
                Divitemub.innerHTML = `
                    <div class="card">
                    <div class="card-content">
                    <h2 class="card-title">${itemub.name}</h2>
                    <p class="card-text">${itemub.type}</p>
                    <p class="card-text">Dimension:  ${item.air_date}</p>
                    `;
                DivresUB.appendchild(Divitemub)
            })
            btnUB.addEventListener("click", async () => {
                const dataUB = await fetchDataUB()
                const tarjeta = dataUB.map((element) => tarjetaData(element)).join("")
                todo.innerHTML = tarjeta
            })
        }

        ApiUb(1)

    }
    APIUB(1)

}
export async function fetchContactInfo(name) {
    try {
        const response = await fetch(`https://api.example.com/contact-info?name=${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener la información del contacto:', error);
        return null;
    }
}
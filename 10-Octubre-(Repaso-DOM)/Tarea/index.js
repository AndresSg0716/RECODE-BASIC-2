const gallery = document.getElementById('gallery');
const imageUrlInput = document.getElementById('image-url');
const imageDescInput = document.getElementById('image-desc');
const addImageBtn = document.getElementById('add-image-btn');
const filterInput = document.getElementById('filter-input');
const sortDateBtn = document.getElementById('sort-date');
const sortDescBtn = document.getElementById('sort-desc');

let images = [];

function renderGallery(filteredImages = images) {
    gallery.innerHTML = '';
    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.desc}">
            <div class="desc">${image.desc}</div>
            <button class="delete-btn" onclick="deleteImage(${index})">X</button>
        `;

        gallery.appendChild(galleryItem);
    });
}

addImageBtn.addEventListener('click', () => {
    const url = imageUrlInput.value.trim();
    const desc = imageDescInput.value.trim();
    if (url && desc) {
        const date = new Date();
        images.push({ url, desc, date });
        imageUrlInput.value = '';
        imageDescInput.value = '';
        renderGallery();
    }
});

filterInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredImages = images.filter(image =>
        image.desc.toLowerCase().includes(keyword)
    );
    renderGallery(filteredImages);
});

sortDateBtn.addEventListener('click', () => {
    images.sort((a, b) => b.date - a.date);
    renderGallery();
});

sortDescBtn.addEventListener('click', () => {
    images.sort((a, b) => a.desc.localeCompare(b.desc));
    renderGallery();
});

function deleteImage(index) {
    images.splice(index, 1);
    renderGallery();
}

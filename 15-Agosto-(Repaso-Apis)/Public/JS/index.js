document.addEventListener("DOMContentLoaded", function () {
  const imageGallery = document.getElementById("image-gallery");
  const favoritesGallery = document.getElementById("favorites-gallery");

  loadInitialImages();

  function loadInitialImages() {
    const images = [
      "https://via.placeholder.com/300x200.png?text=Image+1",
      "https://via.placeholder.com/300x200.png?text=Image+2",
      "https://via.placeholder.com/300x200.png?text=Image+3",
      "https://via.placeholder.com/300x200.png?text=Image+4",
      "https://via.placeholder.com/300x200.png?text=Image+5",
      "https://via.placeholder.com/300x200.png?text=Image+6",
      "https://via.placeholder.com/300x200.png?text=Image+7",
      "https://via.placeholder.com/300x200.png?text=Image+8",
      "https://via.placeholder.com/300x200.png?text=Image+9",
      "https://via.placeholder.com/300x200.png?text=Image+10",
      "https://via.placeholder.com/300x200.png?text=Image+11",
      "https://via.placeholder.com/300x200.png?text=Image+12",
      "https://via.placeholder.com/300x200.png?text=Image+13",
      "https://via.placeholder.com/300x200.png?text=Image+14",
      "https://via.placeholder.com/300x200.png?text=Image+15",
    ];

    displayImages(images);
  }

  function displayImages(images) {
    imageGallery.innerHTML = "";
    images.forEach((imageUrl) => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      imgContainer.innerHTML = `
                <img src="${imageUrl}" alt="Imagen">
                <button class="favorite-btn" data-url="${imageUrl}">Añadir a Favoritos</button>
            `;
      imageGallery.appendChild(imgContainer);
    });
    addFavoriteListeners();
  }

  function addFavoriteListeners() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const imageUrl = btn.getAttribute("data-url");
        saveToFavorites(imageUrl);
        loadFavorites();
      });
    });
  }

  function saveToFavorites(url) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(url)) {
      favorites.push(url);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoritesGallery.innerHTML = "";
    favorites.forEach((url) => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      imgContainer.innerHTML = `
                <img src="${url}">
                <button class="favorite-btn remove" data-url="${url}">Eliminar</button>
            `;
      favoritesGallery.appendChild(imgContainer);
    });
    addRemoveListeners();
  }

  function addRemoveListeners() {
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const imageUrl = btn.getAttribute("data-url");
        removeFromFavorites(imageUrl);
        loadFavorites();
      });
    });
  }

  function removeFromFavorites(url) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((fav) => fav !== url);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  loadFavorites();
});

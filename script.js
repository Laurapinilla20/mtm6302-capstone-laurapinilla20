const apiKey = 'J7sv6Z8QxaFrbexGtuhoPatOPTYvmlcWfjUWQ7c6'; // My API Key

async function fetchImage(date) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (data.media_type === 'image') {
            document.getElementById('datePhotoDiv').style.display = 'block';
            document.getElementById('datePhotoDiv').innerHTML = `
                <img src="${data.url}" alt="${data.title}" class="modal-image" onclick="viewHDImage('${data.hdurl || data.url}')">
            `;
            document.getElementById('dateCaption1').textContent = data.title;
            document.getElementById('dateCaption2').textContent = data.date;
            document.getElementById('dateCaption3').textContent = data.explanation;
        } else {
            document.getElementById('datePhotoDiv').style.display = 'none';
            alert('No image available for this date.');
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        alert('Error fetching the image. Please try again later.');
    }
}

// Save to Favorites
function addToFavorites() {
    const imageUrl = document.querySelector('#datePhotoDiv img').src;
    const title = document.getElementById('dateCaption1').textContent;
    const date = document.getElementById('dateCaption2').textContent;

    if (imageUrl && title && date) {
        const favorite = { imageUrl, title, date };
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(favorite);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites!');
    } else {
        alert('No image available to save.');
    }
}

// Display Favorites
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteContainer = document.getElementById('favoriteContainer');
    favoriteContainer.innerHTML = ''; 

    favorites.forEach(favorite => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('col-md-4', 'text-center', 'favorite-item');
        favoriteItem.innerHTML = `
            <div class="favorite-box">
                <div class="favorite-image-container">
                    <img src="${favorite.imageUrl}" alt="${favorite.title}" class="favorite-image" onclick="viewHDImage('${favorite.imageUrl}')">
                    <button class="btn btn-danger" onclick="removeFromFavorites('${favorite.imageUrl}')">Remove</button>
                </div>
            </div>
        `;
        favoriteContainer.appendChild(favoriteItem);
    });
}

// View HD Image
function viewHDImage(imageUrl) {
    const modal = document.getElementById('largeImageModal');
    const modalImage = document.getElementById('largeImage');
    modalImage.src = imageUrl;
    $(modal).modal('show');
}

// Remove from Favorites
function removeFromFavorites(imageUrl) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => fav.imageUrl !== imageUrl);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Load Favorites on the Page
if (window.location.pathname.includes('favorites.html')) {
    displayFavorites();
}



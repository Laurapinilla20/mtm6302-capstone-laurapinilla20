document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function(e) {
        if (this.id === 'favoritesLink') {
            localStorage.removeItem('lastVisitedSection');
            return;
        }

        const sectionId = this.getAttribute('href').substring(1);
        localStorage.setItem('lastVisitedSection', sectionId);
    });
});

if (window.location.pathname === '/index.html') {
    const lastSection = localStorage.getItem('lastVisitedSection');
    if (lastSection) {
        window.location.href = `index.html#${lastSection}`;
    }
}

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

function toggleImage() {
    const largeImageModal = $('#largeImageModal');

    if (largeImageModal.hasClass('show')) {
        largeImageModal.modal('hide');
    } else {
        const largeImage = document.getElementById('largeImage');
        largeImage.src = 'img/15.1.png';
        largeImageModal.modal('show');
    }
}

function addToFavorites() {
    alert('Image added to favorites!');
}


document.addEventListener("DOMContentLoaded", () => {
    const favoriteContainer = document.getElementById("favoriteContainer");

    const favoriteItems = [
        { id: 1, title: "JUPITER", date: "Sep. 27th, 2022", description: "Jupiter was closer to our planet and we could see their atmosphere clearer", imgSrc: "img/20.png", largeImgSrc: "img/20.png" },
        { id: 2, title: "SATURN", date: "Oct. 14th, 2022", description: "Saturn's rings were especially visible, a beautiful day to see the sky at night", imgSrc: "img/21.png", largeImgSrc: "img/21.png" },
        { id: 3, title: "MARS", date: "Nov. 18th, 2022", description: "Mars was at its brightest, the red planet was shinnest start on the sky", imgSrc: "img/22.png", largeImgSrc: "img/22.png" },
        { id: 4, title: "VENUS", date: "Dec. 2nd, 2022", description: "Venus was in full view, with its femenine warm vibe was a lovely night for us", imgSrc: "img/23.png", largeImgSrc: "img/23.png" },
        { id: 5, title: "EARTH", date: "Jan. 1st, 2023", description: "A rare Earth capture from space, a strange but magical night was that day", imgSrc: "img/24.png", largeImgSrc: "img/24.png" },
        { id: 6, title: "NEPTUNE", date: "Feb. 28th, 2023", description: "Neptune's vibrant blue, making us fall in love with its magical color", imgSrc: "img/25.png", largeImgSrc: "img/25.png" }
    ];

    favoriteItems.forEach(item => {
        const favoriteBox = document.createElement("div");
        favoriteBox.className = "favorite-box col-lg-3 col-md-4 col-sm-6";

        favoriteBox.innerHTML = `
            <div class="favorite-image-container">
                <button class="heart-icon" onclick="toggleFavorite(${item.id})">
                    <img src="img/iconsave.png" alt="Favorite Icon" class="heart-icon-img">
                </button>
                <button class="remove-icon" onclick="removeFavorite(${item.id})">
                    <img src="img/Remove.png" alt="Remove Icon" class="remove-icon-img">
                </button>
                <img src="${item.imgSrc}" alt="${item.title}" class="favorite-image" onclick="showLargeImage('${item.largeImgSrc}')">
            </div>
            <div class="favorite-details text-right">
                <h3>${item.title}</h3>
                <h4>${item.date}</h4>
                <p>${item.description}</p>
            </div>
        `;

        favoriteContainer.appendChild(favoriteBox);
    });
});

function showLargeImage(imgSrc) {
    const largeImage = document.getElementById("largeImage");
    largeImage.src = imgSrc;

    if (window.innerWidth < 768) {
        largeImage.src = imgSrc.replace('-desktop', '-mobile');
    }

    $('#largeImageModal').modal('show');
}

function toggleFavorite(id) {
    console.log(`Toggling favorite for item with id: ${id}`);
}

function removeFavorite(id) {
    console.log(`Removing favorite for item with id: ${id}`);
}

favoriteBox.className = "favorite-box col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center";

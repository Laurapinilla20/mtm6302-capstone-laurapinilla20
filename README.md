# mtm6302-capstone-laurapinilla20
# mtm6302-capstone-laurapinilla20

CAPSTONE PROJECT PART 4

**Name:** Laura Pinilla  
**Student Number:** 90541117232  
**Project I Intend to Complete:** Astronomy Picture of the Day Search.

CosmicFrame is an interactive web application created to help users explore stunning astronomical images based on any specific date. Whether it's a personal milestone or just a random day, users can search for how the sky looked on that date and even save their favorite images. It aims to provide a unique connection to the universe, showing how the cosmos celebrated special moments with us.

---

### Overview
The main purpose of this project is to create an easy-to-use, dynamic platform that connects users to the NASA Astronomy Picture of the Day (APOD) API. The app lets users enter a specific date to view the associated image or video, and it allows them to save their favorite images for future reference. It’s designed to be responsive and user-friendly.

### Project Structure
- **index.html:** The main page of the web app, where users can input dates and view images.
- **favorites.html:** A dedicated page for users to view and manage their favorite images.
- **style.css:** The styling file that ensures the app looks visually appealing and responsive across devices.
- **script.js:** Contains the JavaScript code responsible for fetching data from the NASA API, handling user interactions, and managing favorites.

---

### Steps to Build
1. **HTML Layout:** Started by building the basic structure of the app with HTML, including the input field for the date, image display area, and a button to submit the date.
2. **CSS Styling:** Used CSS to create a clean and simple design. Ensured the app is responsive, meaning it looks good on both desktop and mobile devices.
3. **JavaScript Functionality:** 
   - **API Integration:** Integrated the NASA API using the Fetch API to get images from the Astronomy Picture of the Day based on the date entered by the user.
   - **Error Handling:** Implemented error handling in case the API does not return a valid image.
   - **Favorites Feature:** Added functionality to save images to the user's favorites using the browser's localStorage.
   - **Modal for HD Images:** Created a modal to view a high-definition version of the image when clicked.
4. **Testing and Debugging:** Ensured that the app is functional, that images are displayed correctly, and that the favorites feature works properly.

---

### Resources Used
- **NASA API (APOD):** Used to fetch astronomical images for the user based on the selected date.
- **Bootstrap:** Helped make the app responsive and provided pre-designed components like buttons and grids.
- **JavaScript Fetch API:** Used for asynchronous requests to the NASA API and for fetching image data.
- **LocalStorage:** Enabled saving favorite images locally so that they persist even after the user leaves the page.

---

### Challenges Faced
1. **Handling API Responses:** One of the biggest challenges was ensuring that the images were shown when a user entered a date. I had to check the media type and handle cases where no image was available.
2. **Making the App Responsive:** While using Bootstrap helped a lot, making sure the app was fully responsive across all devices, especially mobile, required fine-tuning the layout and ensuring no content overflowed.
3. **Managing LocalStorage:** Saving and retrieving data from the localStorage for the favorites list was tricky, especially ensuring that the list updates correctly when items are added or removed.

---

### JavaScript Explanation
In the script.js file, I wrote several functions to handle the interactions with the user and the NASA API:

1. **fetchImage(date):** This function takes a date as input, fetches the corresponding image from NASA's APOD API, and displays it on the page. If the media type is not an image, it shows an alert that no image is available.
2. **Event Listener for Date Search:** When the user clicks the submit button, the app grabs the input date and calls the `fetchImage` function to display the corresponding image.
3. **addToFavorites:** This function saves the current image to the browser's localStorage under the favorites key. It adds the image, title, and date into an array of favorite images.
4. **viewHDImage:** This function opens a modal showing the high-definition version of the selected image. It uses a modal library for smooth display.
5. **displayFavorites:** When the user navigates to the favorites page, this function loads all saved images from localStorage and displays them with options to remove them.
6. **removeFromFavorites:** Allows the user to remove images from the favorites list by filtering out the image they clicked to remove.

---

This project has helped me practice my web development skills, especially in integrating APIs, managing state with localStorage, and ensuring a responsive design. I am excited to continue improving it and making the user experience better!
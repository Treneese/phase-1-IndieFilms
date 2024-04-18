

const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })

      // Select the <h2> element with class "logo"
const logo = document.querySelector('.logo');

// Add event listener for mouseover
logo.addEventListener('mouseover', () => {
    // Change the text content when hovered
    logo.textContent = "Good Cinema Only";
});

// Add event listener for mouseout to revert back to original text
logo.addEventListener('mouseout', () => {
    // Change the text content back to original when mouse leaves
    logo.textContent = "Indie Films";
});

 
// Fetch data from the API and populate buttons with film names
fetch("http://localhost:3000/films")
  .then((resp) => resp.json())
  .then((data) => {
//     const buttonContainer = document.getElementById('buttonContainer');
// console.log(buttonContainer)
    // Loop through the API data
    data.forEach((video, index) => {
      // Create button for each video
      console.log(index)
      const button = document.querySelector(`#showButton${index + 1}`);
  button.textContent = video.name;
      
      // Assign the film ID to the button
      button.dataset.id = video.id; // Assigning the ID as a data attribute

      // Add click event listener to the button
      button.addEventListener('click', () => {
        // Retrieve the film ID associated with the clicked button
        const filmId = button.dataset.id;
        
        // Call the function to fetch film data and populate details
        fetchFilmDataAndPopulate(filmId);

      });
   
      // Append button to the container
      // buttonContainer.appendChild(button);
    });
  })
  .catch((error) => {
    console.error('Error fetching films:', error);
    // Add click event listener to the button
// button.addEventListener('click', () => {
//   // Retrieve the film ID associated with the clicked button
//   const filmId = button.dataset.id;
  
//   // Check a specific condition for this button
//   if (filmId === "1") {
//       // Execute specific code for button 1
//       console.log("Button 1 was clicked");
//   } else if (filmId === "2") {
//       // Execute specific code for button 2
//       console.log("Button 2 was clicked");
//   } else if (filmId === "3") {
//       // Execute specific code for button 3
//       console.log("Button 3 was clicked");
//   } else if (filmId === "4") {
//     // Execute specific code for button 3
//     console.log("Button 4 was clicked");
// } else if (filmId === "5") {
//   // Execute specific code for button 3
//   console.log("Button 5 was clicked");
// } else if (filmId === "6") {
//   // Execute specific code for button 3
//   console.log("Button 6 was clicked");
// }
//   // Add more else-if statements for additional buttons if needed
  
//   // If none of the conditions match, execute default code
//   else {
//       console.log("Some other button was clicked");
//   }
// });

  });

// Function to fetch film data and populate details based on the ID
function fetchFilmDataAndPopulate(id) {
  fetch(`http://localhost:3000/films/${id}`)
    .then((resp) => resp.json())
    .then((video) => {
      // Populate the overlay with video details
      document.querySelector('.video').src = video.video;
      document.querySelector('.name').textContent = `Name: ${video.name}`;
      document.querySelector('.about').textContent = `Summary: ${video.about}`;
      document.querySelector('.director').textContent = `Director: ${video.director}`;
      document.querySelector('.writer').textContent = `Writer: ${video.writer}`;

      document.querySelector('.cast').textContent = `Cast/Crew: ${video['cast/crew']}`;
      
      // Show the overlay
      document.querySelector('.overlay').style.display = 'block';
    })
    .catch((error) => {
      console.error('Error fetching film data:', error);
    });
}



// fetch("http://localhost:3000/films")
//   .then((resp) => resp.json())
//   .then((data) => {
//     const buttonContainer = document.getElementById('buttonContainer');

//     data.forEach((video, index) => {
//       const button = document.createElement('button');
//       button.textContent = video.name;
//       button.dataset.id = video.id;
//       button.classList.add('film-button'); // Add the class 'film-button' to the button

//       button.addEventListener('click', () => {
//         const filmId = button.dataset.id;
//         fetchFilmDataAndPopulate(filmId);
//       });

//       buttonContainer.appendChild(button);
//     });
//   })
//   .catch((error) => {
//     console.error('Error fetching films:', error);
//   });

// function fetchFilmDataAndPopulate(id) {
//   fetch(`http://localhost:3000/films/${id}`)
//     .then((resp) => resp.json())
//     .then((video) => {
//       document.querySelector('.video').innerHTML = video.video;
//       document.querySelector('.name').textContent = `Name: ${video.name}`;
//       document.querySelector('.about').textContent = `Summary: ${video.about}`;
//       document.querySelector('.director').textContent = `Director: ${video.director}`;
//       document.querySelector('.writer').textContent = `Writer: ${video.writer}`;
//       document.querySelector('.cast').textContent = `Cast/Crew: ${video['cast/crew']}`;
//       document.querySelector('.overlay').style.display = 'block';
//     })
//     .catch((error) => {
//       console.error('Error fetching film data:', error);
//     });
// }
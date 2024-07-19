const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Fetch data based on user input (to be implemented next)
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const input = document.getElementById("searchByID").value.trim(); // Get input value and trim whitespace
  
    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found!"); // Handle 404 errors
        }
        return response.json();
      })
      .then((data) => {
        // Display data on the page (to be implemented next)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const input = document.getElementById("searchByID").value.trim();
  
    fetch(`http://localhost:3000/movies/${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found!");
        }
        return response.json();
      })
      .then((data) => {
        const titleElement = document.querySelector("#movieDetails h4");
        const summaryElement = document.querySelector("#movieDetails p");
  
        titleElement.textContent = data.title;
        summaryElement.textContent = data.summary;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
    
  
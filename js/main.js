document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');// Check if this logs the input element

    if (!searchButton || !searchInput) {
        console.error('One or more elements not found!');
        return;
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchPlants(query);
        }
    });

    async function searchPlants(query) {
        try {
            const response = await fetch(`const url = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=0EnoKeLAoYW5UKcMXgxeYOh7F8RFO20q1UdfbIzC0oA&q=monstera';`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            displayResults(data); // Ensure this function is defined and correctly handles the data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    

    function displayResults(plants) {
        resultsContainer.innerHTML = ''; // Clear previous results

        if (plants.length === 0) {
            resultsContainer.innerHTML = 'No plants found.';
            return;
        }

        plants.forEach(plant => {
            const plantElement = document.createElement('div');
            plantElement.className = 'result-item';
            plantElement.innerHTML = `
                <h3>${plant.common_name || 'Unknown Common Name'}</h3>
                <p><strong>Scientific Name:</strong> ${plant.scientific_name || 'Unknown'}</p>
                <p><strong>Family:</strong> ${plant.family || 'Unknown'}</p>
            `;
            resultsContainer.appendChild(plantElement);
        });
    }
});

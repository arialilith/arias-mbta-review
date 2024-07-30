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

    const fetch = require('node-fetch');

    async function searchPlants(query) {
        try {
            const response = await fetch(`http://localhost:3000/search?q=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data); // Handle the data as needed
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

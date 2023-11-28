document.addEventListener('DOMContentLoaded', function() {
  const newQuoteBtn = document.getElementById('newQuoteBtn');
  const quoteElement = document.getElementById('quote');

  // Function to set text in the 'quote' element
  function setRandomText(text) {
    quoteElement.textContent = text;
  }

  // Function to fetch quotes in a specific category
  const fetchQuotesByCategory = (category) => {
    const apiKey = 'GKm3hP7t9PAcGTB07MXxZg==bzw34xIfT0lAh6BF';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        console.log(result);
        // Handle the result as needed, e.g., display the quote on the page
        if (result && result.length > 0) {
          setRandomText(result[0].quote);
        } else {
          setRandomText("No quotes available");
        }
      })
      .catch(error => console.error('Error fetching quotes:', error));
  };

  // Event listener for the "New Quote" button
  newQuoteBtn.addEventListener('click', function() {
    // Specify the category you want to fetch quotes for
    const category = 'life';
    fetchQuotesByCategory(category);
  });

  // Fetch a random quote when the page is loaded
  fetchQuotesByCategory('life');
});

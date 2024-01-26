// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
        const cards = [
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/5.jpg',
            'images/6.jpg',
            'images/7.jpg',
            'images/8.jpg',
            'images/9.jpg',
            'images/10.jpg',
            'images/1.jpg',
            'images/2.jpg',
            'images/3.jpg',
            'images/4.jpg',
            'images/5.jpg',
            'images/6.jpg',
            'images/7.jpg',
            'images/8.jpg',
            'images/9.jpg',
            'images/10.jpg'
        ];
    
    const divs = document.querySelectorAll('.card');
    
    let numberOfClicks = 0;
    let clickedCards = [];

    shuffleCards(cards); 

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i]; 
        const img = div.querySelector('img'); 
        const cardValue = cards[i]; 

        img.classList.add('img-card'); 
        img.setAttribute('src', ''); 
        div.setAttribute('data-card', cardValue); 

        // Add a 'click' event listener to each card element (the div)
        div.addEventListener('click', function() {
            // Check if the card is not face-up and the number of clicks is less than 2
            if (!div.classList.contains('flipped') && numberOfClicks < 2) {
                div.classList.add('flipped'); 
                img.setAttribute('src', cardValue);
                clickedCards.push({ div, cardValue }); 
                numberOfClicks++;
            }

            if (numberOfClicks === 2) {
                setTimeout(function() {
                    if (clickedCards[0].cardValue !== clickedCards[1].cardValue) {
                        // Handle the case when the cards are not a match
                        clickedCards.forEach(({ div, cardValue }) => { 
                            div.classList.remove('flipped'); 
                            div.querySelector('img').setAttribute('src', '');   
                        });
                    }
                    // Reset counters to allow more clicks
                    numberOfClicks = 0;
                    clickedCards = [];
                }, 1000);
            }
        });
    } 
    
    //Declare a function to shuffle the array "cards" (which contains the URLs of card images)
    function shuffleCards (array) {
        for (let i = array.length - 1; i > 0; i--) {
            // Generate a random index (img from 'cards') and swap elements
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }
});



  
  
  
  
    
  
    
  
  
  
  
    
  
    

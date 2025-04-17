// Get all flashcard elements
const flashcards = document.querySelectorAll('.flashcard');

// Add a click event listener to each flashcard
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'flipped' class on the clicked card's container
        card.classList.toggle('flipped');
    });
});

// Note: The 'ontouchstart' attribute in the HTML helps handle hover state
// toggling on touch devices, which don't have a true hover state.
// Clicking/tapping still handles the flip via the JS above.

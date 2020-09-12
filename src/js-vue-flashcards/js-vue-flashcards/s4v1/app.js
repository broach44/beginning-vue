const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  // COMPLETED:  Display our data
  // COMPLETED:  On click: flip cards back and forth
  // Get info for new cards from the user
    // Create data properties for the front and back of new card
    // Bind these properties to the form inputs using v-model
  // Add new card when user hits enter or clicks button
  // Delete cards
  // Animate card flip
  // Display an error message if form fields are blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: ''
    },
    methods: {
      flipCard: function(card){
        card.flipped = !card.flipped;
      }
    }
  });
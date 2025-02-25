import React from 'react';

const quizData = [
  
  [
    { question: "What is the capital of France?", options: ["Paris", "Madrid", "Rome", "Berlin"], answer: "Paris" },
    { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter" },
    { question: "In what year did the Battle of Hastings take place?", options: ["1066", "1466", "1352", "1200"], answer: "1066" },
    { question: "On what island was Napoleon born?", options: ["Château d'If", "Porquerolles", "Corsica", "Oléron"], answer: "Corsica" },
    { question: "What country has the highest life expectancy?", options: ["Hong Kong", "Sweden", "Denmark", "Luxembourg"], answer: "Hong Kong" },
    { question: "What is the most common surname in the United States?", options: ["Rodriquez", "Miller", "Davis", "Smith"], answer: "Smith" },
    { question: "What year was the United Nations established?", options: ["1918", "1945", "1886", "1912"], answer: "1945" },
    { question: "Who was the last Tsar of Russia?", options: ["Yaroslav I", "Nicholas II", "Saint Vladimir", "Yaroslav"], answer: "Nicholas II" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "In which country is the Great Barrier Reef located?", options: ["Australia", "USA", "Mexico", "Brazil"], answer: "Australia" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Saturn"], answer: "Mars" },
    { question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
    { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond" },
    { question: "Who wrote the play Romeo and Juliet?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "George Orwell"], answer: "William Shakespeare" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"], answer: "Antarctic Desert" },
    { question: "What is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Fuji"], answer: "Mount Everest" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen" },
    { question: "What is the largest country in the world by land area?", options: ["USA", "China", "Canada", "Russia"], answer: "Russia" },
    { question: "In which year did World War II end?", options: ["1945", "1939", "1918", "1950"], answer: "1945" },
    { question: "What is the national animal of Canada?", options: ["Lion", "Eagle", "Beaver", "Kangaroo"], answer: "Beaver" }
  ],


  [
    { question: "Which city is known as the Big Apple?", options: ["Los Angeles", "Chicago", "New York", "Miami"], answer: "New York" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"], answer: "Alexander Graham Bell" },
    { question: "In what year did the Titanic sink?", options: ["1912", "1905", "1898", "1920"], answer: "1912" },
    { question: "What element does 'O' represent on the periodic table?", options: ["Oxygen", "Osmium", "Ozone", "Oganesson"], answer: "Oxygen" },
    { question: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
    { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Mars", "Earth"], answer: "Mercury" },
    { question: "Which country is the Great Wall of China located?", options: ["India", "China", "Japan", "Russia"], answer: "China" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "What is the hardest substance in the human body?", options: ["Bone", "Enamel", "Cartilage", "Tendon"], answer: "Enamel" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "What is the largest bird in the world?", options: ["Ostrich", "Eagle", "Albatross", "Penguin"], answer: "Ostrich" },
    { question: "Which country is known for its pyramids?", options: ["Mexico", "Egypt", "Peru", "India"], answer: "Egypt" },
    { question: "What is the chemical symbol for silver?", options: ["Ag", "Au", "Pb", "Sn"], answer: "Ag" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Who is the author of '1984'?", options: ["George Orwell", "J.K. Rowling", "H.G. Wells", "Isaac Asimov"], answer: "George Orwell" },
    { question: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
    { question: "In which city can you find the Eiffel Tower?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
    { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Elephant", "Horse"], answer: "Cheetah" },
    { question: "What year did the Berlin Wall fall?", options: ["1991", "1990", "1989", "1987"], answer: "1989" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], answer: "Asia" }
  ],


  [
    { question: "What was the first human-made object to land on the moon?", options: ["Luna 2", "Apollo 11", "Vostok 1", "Sputnik 1"], answer: "Apollo 11" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
    { question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "French", "Italian"], answer: "Portuguese" },
    { question: "What is the most commonly spoken language in the world?", options: ["English", "Mandarin", "Spanish", "Hindi"], answer: "Mandarin" },
    { question: "In which country would you find the ancient city of Petra?", options: ["Jordan", "Egypt", "Iraq", "Turkey"], answer: "Jordan" },
    { question: "Which element is represented by the symbol 'Na'?", options: ["Neon", "Sodium", "Nitrogen", "Nickel"], answer: "Sodium" },
    { question: "Which famous scientist developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein" },
    { question: "Which ocean is the smallest?", options: ["Arctic", "Atlantic", "Indian", "Pacific"], answer: "Arctic" },
    { question: "Which gas makes up the majority of Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
    { question: "In which country can you find the ancient pyramids of Giza?", options: ["Mexico", "Egypt", "Peru", "China"], answer: "Egypt" },
    { question: "What is the name of the longest mountain range in the world?", options: ["Rockies", "Andes", "Himalayas", "Alps"], answer: "Andes" },
    { question: "Which is the largest country in South America?", options: ["Argentina", "Brazil", "Chile", "Colombia"], answer: "Brazil" },
    { question: "What is the official currency of the United Kingdom?", options: ["Euro", "Pound", "Dollar", "Yen"], answer: "Pound" },
    { question: "Which desert is the largest hot desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Atacama"], answer: "Sahara" },
    { question: "What year did the first manned moon landing occur?", options: ["1965", "1969", "1972", "1980"], answer: "1969" },
    { question: "Who wrote the famous novel 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Virginia Woolf"], answer: "Jane Austen" },
    { question: "Which planet is known for its rings?", options: ["Mars", "Saturn", "Venus", "Jupiter"], answer: "Saturn" },
    { question: "Which is the second most populous country in the world?", options: ["India", "China", "USA", "Indonesia"], answer: "India" },
    { question: "Which is the longest river in the USA?", options: ["Missouri", "Mississippi", "Colorado", "Ohio"], answer: "Missouri" },
    { question: "Who was the first woman to fly solo across the Atlantic Ocean?", options: ["Amelia Earhart", "Bessie Coleman", "Eleanor Roosevelt", "Harriet Quimby"], answer: "Amelia Earhart" }
  ],

  
  [
    { question: "Which planet is the hottest in our solar system?", options: ["Venus", "Mercury", "Mars", "Jupiter"], answer: "Venus" },
    { question: "What is the tallest tree in the world?", options: ["Redwood", "Pine", "Oak", "Birch"], answer: "Redwood" },
    { question: "What is the most populous city in the world?", options: ["Tokyo", "New York", "London", "Shanghai"], answer: "Tokyo" },
    { question: "Who painted the famous 'Starry Night'?", options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Leonardo da Vinci"], answer: "Vincent van Gogh" },
    { question: "In which country is the Eiffel Tower located?", options: ["Spain", "Italy", "France", "Germany"], answer: "France" },
    { question: "What is the longest bone in the human body?", options: ["Femur", "Tibia", "Humerus", "Radius"], answer: "Femur" },
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Pluto"], answer: "Mercury" },
    { question: "What is the capital of Japan?", options: ["Kyoto", "Osaka", "Hiroshima", "Tokyo"], answer: "Tokyo" },
    { question: "Which company created the first iPhone?", options: ["Samsung", "Apple", "Nokia", "Motorola"], answer: "Apple" },
    { question: "Which U.S. state is known as the Sunshine State?", options: ["California", "Florida", "Hawaii", "Texas"], answer: "Florida" },
    { question: "What is the largest volcano in the world?", options: ["Mount St. Helens", "Mount Fuji", "Mauna Loa", "Mount Vesuvius"], answer: "Mauna Loa" },
    { question: "Which instrument is known as the 'king of instruments'?", options: ["Piano", "Violin", "Organ", "Guitar"], answer: "Organ" },
    { question: "Who developed the theory of evolution?", options: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Louis Pasteur"], answer: "Charles Darwin" },
    { question: "What is the longest-running television show in history?", options: ["Friends", "The Simpsons", "The Office", "SNL"], answer: "The Simpsons" },
    { question: "What is the symbol for the chemical element oxygen?", options: ["O", "O2", "O3", "Ox"], answer: "O" },
    { question: "Which ocean is the largest by volume?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "What year was the Declaration of Independence signed?", options: ["1776", "1789", "1791", "1800"], answer: "1776" },
    { question: "Which animal is known for changing its color?", options: ["Chameleon", "Octopus", "Lizard", "Cuttlefish"], answer: "Chameleon" },
    { question: "What is the world's largest country by population?", options: ["China", "India", "USA", "Russia"], answer: "China" }
  ],

 
  [
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Vietnam"], answer: "Japan" },
    { question: "What is the longest river in Africa?", options: ["Nile", "Amazon", "Congo", "Zambezi"], answer: "Nile" },
    { question: "What is the name of the largest island in the world?", options: ["Australia", "Greenland", "New Guinea", "Borneo"], answer: "Greenland" },
    { question: "What is the capital of Spain?", options: ["Lisbon", "Barcelona", "Madrid", "Sevilla"], answer: "Madrid" },
    { question: "Which continent is known as the Dark Continent?", options: ["Asia", "Africa", "South America", "Europe"], answer: "Africa" },
    { question: "Which planet is referred to as Earth's twin?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Venus" },
    { question: "What is the symbol for iron on the periodic table?", options: ["Fe", "Ir", "I", "Fr"], answer: "Fe" },
    { question: "Which U.S. state is known as the Empire State?", options: ["California", "Texas", "New York", "Florida"], answer: "New York" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"], answer: "Harper Lee" },
    { question: "What country is famous for the Taj Mahal?", options: ["India", "China", "Pakistan", "Egypt"], answer: "India" },
    { question: "Which animal is known for having a trunk?", options: ["Elephant", "Rhino", "Giraffe", "Camel"], answer: "Elephant" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "North America", "Europe"], answer: "Asia" },
    { question: "Which is the second largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Atlantic" },
    { question: "What is the most consumed beverage in the world?", options: ["Water", "Coffee", "Tea", "Juice"], answer: "Water" },
    { question: "Which country produces the most coffee?", options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"], answer: "Brazil" },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Dollar", "Pound", "Yen"], answer: "Pound" },
    { question: "Which planet has the most moons?", options: ["Mars", "Earth", "Jupiter", "Saturn"], answer: "Saturn" },
    { question: "Which is the largest bird?", options: ["Eagle", "Penguin", "Ostrich", "Albatross"], answer: "Ostrich" },
    { question: "In which city would you find the Colosseum?", options: ["Paris", "Rome", "Athens", "Istanbul"], answer: "Rome" }
  ]
];

export default quizData;
  
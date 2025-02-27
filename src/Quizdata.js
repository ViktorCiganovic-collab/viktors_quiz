import React from 'react';

const quizData = [
  
 [
    // Geography questions
    { question: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul", "Bangkok"], answer: "Tokyo", category: "Geography" },
    { question: "What is the longest river in Europe?", options: ["Volga", "Danube", "Rhine", "Thames"], answer: "Volga", category: "Geography" },
    { question: "Which country has the most volcanoes?", options: ["Indonesia", "Japan", "Iceland", "Chile"], answer: "Indonesia", category: "Geography" },
    { question: "What is the largest island in the world?", options: ["Greenland", "Australia", "New Guinea", "Borneo"], answer: "Greenland", category: "Geography" },
    { question: "Which ocean is the smallest?", options: ["Arctic", "Atlantic", "Indian", "Pacific"], answer: "Arctic", category: "Geography" },
  
    // History questions
    { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Liu Bang", "Wudi", "Sun Yat-sen"], answer: "Qin Shi Huang", category: "History" },
    { question: "Which empire was ruled by Julius Caesar?", options: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Mongol Empire"], answer: "Roman Empire", category: "History" },
    { question: "In which year did World War II end?", options: ["1945", "1939", "1950", "1918"], answer: "1945", category: "History" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", category: "History" },
    { question: "Which civilization built the Great Pyramids of Giza?", options: ["Egyptians", "Romans", "Greeks", "Aztecs"], answer: "Egyptians", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "N2"], answer: "H2O", category: "Science" },
    { question: "Which element has the atomic number 1?", options: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"], answer: "Hydrogen", category: "Science" },
    { question: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide", category: "Science" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], answer: "Mars", category: "Science" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Iron", "Platinum"], answer: "Diamond", category: "Science" },
  
    // Art & Culture questions
    { question: "Which famous artist is known for the painting 'The Starry Night'?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Edvard Munch"], answer: "Vincent van Gogh", category: "Art & Culture" },
    { question: "Which city is home to the famous art museum, the Louvre?", options: ["Paris", "Rome", "London", "New York"], answer: "Paris", category: "Art & Culture" },
    { question: "Who sculpted the statue of David?", options: ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Auguste Rodin"], answer: "Michelangelo", category: "Art & Culture" },
    { question: "Which city is home to the famous 'Sistine Chapel'?", options: ["Rome", "Paris", "Florence", "London"], answer: "Rome", category: "Art & Culture" },
    { question: "Which artist painted the 'Mona Lisa'?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Claude Monet", "Pablo Picasso"], answer: "Leonardo da Vinci", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the smallest planet in our solar system?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury", category: "General Knowledge" },
    { question: "Who wrote the novel '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"], answer: "George Orwell", category: "General Knowledge" },
    { question: "What is the largest bird in the world?", options: ["Ostrich", "Eagle", "Penguin", "Albatross"], answer: "Ostrich", category: "General Knowledge" },
    { question: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen", category: "General Knowledge" },
    { question: "Which is the largest country in the world by land area?", options: ["Russia", "Canada", "USA", "China"], answer: "Russia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country won the FIFA World Cup in 2018?", options: ["France", "Germany", "Brazil", "Argentina"], answer: "France", category: "Sports" },
    { question: "Who holds the record for most Olympic gold medals?", options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Larisa Latynina"], answer: "Michael Phelps", category: "Sports" },
    { question: "Which team won the NBA Championship in 2020?", options: ["Los Angeles Lakers", "Miami Heat", "Golden State Warriors", "Toronto Raptors"], answer: "Los Angeles Lakers", category: "Sports" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["Brazil", "China", "Greece", "Russia"], answer: "Brazil", category: "Sports" },
    { question: "What is the length of a marathon?", options: ["42.195 kilometers", "40 kilometers", "50 kilometers", "45 kilometers"], answer: "42.195 kilometers", category: "Sports" },
  ],
  

  [
    // Geography questions
    { question: "Which country is known as the Land of the Rising Sun?", options: ["Japan", "China", "South Korea", "Vietnam"], answer: "Japan", category: "Geography" },
    { question: "Which city is known as the Big Apple?", options: ["New York", "Los Angeles", "Chicago", "Miami"], answer: "New York", category: "Geography" },
    { question: "What is the largest continent?", options: ["Asia", "Africa", "Europe", "North America"], answer: "Asia", category: "Geography" },
    { question: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra", category: "Geography" },
    { question: "What is the longest river in Africa?", options: ["Nile", "Amazon", "Congo", "Zambezi"], answer: "Nile", category: "Geography" },
  
    // History questions
    { question: "Who was the last Tsar of Russia?", options: ["Nicholas II", "Ivan the Terrible", "Peter the Great", "Catherine the Great"], answer: "Nicholas II", category: "History" },
    { question: "What year did the Berlin Wall fall?", options: ["1989", "1991", "1990", "1987"], answer: "1989", category: "History" },
    { question: "Which civilization built the Machu Picchu?", options: ["Inca", "Mayan", "Aztec", "Egyptian"], answer: "Inca", category: "History" },
    { question: "Who was the first woman to fly solo across the Atlantic?", options: ["Amelia Earhart", "Harriet Quimby", "Eleanor Roosevelt", "Bessie Coleman"], answer: "Amelia Earhart", category: "History" },
    { question: "Who was the first emperor of Rome?", options: ["Augustus", "Julius Caesar", "Nero", "Caligula"], answer: "Augustus", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au", category: "Science" },
    { question: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Mars", "Earth"], answer: "Mercury", category: "Science" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Opium"], answer: "Oxygen", category: "Science" },
    { question: "What is the process by which plants make their own food?", options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], answer: "Photosynthesis", category: "Science" },
    { question: "Who developed the theory of relativity?", options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Stephen Hawking"], answer: "Albert Einstein", category: "Science" },
  
    // Art & Culture questions
    { question: "Which artist is known for his 'Water Lilies' paintings?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Henri Matisse"], answer: "Claude Monet", category: "Art & Culture" },
    { question: "Which painting is considered Leonardo da Vinci's masterpiece?", options: ["Mona Lisa", "The Last Supper", "Vitruvian Man", "The Baptism of Christ"], answer: "Mona Lisa", category: "Art & Culture" },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Caravaggio"], answer: "Michelangelo", category: "Art & Culture" },
    { question: "Which movie won the Academy Award for Best Picture in 1994?", options: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "Titanic"], answer: "Forrest Gump", category: "Art & Culture" },
    { question: "Who is known as the father of modern physics?", options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "James Clerk Maxwell"], answer: "Albert Einstein", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the largest animal in the world?", options: ["Blue Whale", "Elephant", "Giraffe", "Shark"], answer: "Blue Whale", category: "General Knowledge" },
    { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City", category: "General Knowledge" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"], answer: "Alexander Graham Bell", category: "General Knowledge" },
    { question: "What is the national animal of Canada?", options: ["Beaver", "Moose", "Eagle", "Bison"], answer: "Beaver", category: "General Knowledge" },
    { question: "What is the currency of the United Kingdom?", options: ["Pound Sterling", "Euro", "Yen", "Dollar"], answer: "Pound Sterling", category: "General Knowledge" },
  ],
  
  [
    // Geography questions
    { question: "Which is the tallest mountain in the world?", options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"], answer: "Mount Everest", category: "Geography" },
    { question: "What is the capital city of Canada?", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"], answer: "Ottawa", category: "Geography" },
    { question: "Which desert is the largest in the world?", options: ["Sahara", "Kalahari", "Arabian", "Gobi"], answer: "Sahara", category: "Geography" },
    { question: "In which country can you find the ancient city of Petra?", options: ["Jordan", "Egypt", "Syria", "Israel"], answer: "Jordan", category: "Geography" },
    { question: "Which continent is known as the 'Dark Continent'?", options: ["Africa", "Asia", "Australia", "South America"], answer: "Africa", category: "Geography" },
  
    // History questions
    { question: "Which event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "Treaty of Versailles", "D-Day Landings"], answer: "Assassination of Archduke Franz Ferdinand", category: "History" },
    { question: "Who discovered America in 1492?", options: ["Christopher Columbus", "Leif Erikson", "Marco Polo", "Ferdinand Magellan"], answer: "Christopher Columbus", category: "History" },
    { question: "Who was the first female prime minister of the United Kingdom?", options: ["Margaret Thatcher", "Theresa May", "Queen Elizabeth I", "Eleanor Roosevelt"], answer: "Margaret Thatcher", category: "History" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1921", "1887"], answer: "1912", category: "History" },
    { question: "Which empire was known for its gladiator games?", options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"], answer: "Roman Empire", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for sodium?", options: ["Na", "K", "Fe", "S"], answer: "Na", category: "Science" },
    { question: "Which scientist is known for the laws of motion?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"], answer: "Isaac Newton", category: "Science" },
    { question: "What is the study of the Earth and its processes called?", options: ["Geology", "Biology", "Astronomy", "Chemistry"], answer: "Geology", category: "Science" },
    { question: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Mars", "Earth"], answer: "Jupiter", category: "Science" },
    { question: "What is the boiling point of water in Celsius?", options: ["100°C", "90°C", "110°C", "120°C"], answer: "100°C", category: "Science" },
  
    // Art & Culture questions
    { question: "Which city is home to the famous museum, the Prado?", options: ["Madrid", "Paris", "London", "Rome"], answer: "Madrid", category: "Art & Culture" },
    { question: "Who painted the 'Girl with a Pearl Earring'?", options: ["Johannes Vermeer", "Rembrandt", "Claude Monet", "Leonardo da Vinci"], answer: "Johannes Vermeer", category: "Art & Culture" },
    { question: "Which author wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Charles Dickens"], answer: "Jane Austen", category: "Art & Culture" },
    { question: "Which famous ballet dancer is known for his incredible jumps?", options: ["Mikhail Baryshnikov", "Sergei Polunin", "Rudolf Nureyev", "Vaslav Nijinsky"], answer: "Mikhail Baryshnikov", category: "Art & Culture" },
    { question: "What is the name of the ancient Egyptian queen who is famous for her beauty?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], answer: "Cleopatra", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the most widely spoken language in the world?", options: ["Mandarin", "English", "Spanish", "Hindi"], answer: "Mandarin", category: "General Knowledge" },
    { question: "What is the name of the longest-running TV show?", options: ["The Simpsons", "Friends", "The Office", "Law & Order"], answer: "The Simpsons", category: "General Knowledge" },
    { question: "Who is known as the King of Pop?", options: ["Michael Jackson", "Elvis Presley", "Prince", "George Michael"], answer: "Michael Jackson", category: "General Knowledge" },
    { question: "Which element is represented by the symbol 'He'?", options: ["Helium", "Hydrogen", "Hafnium", "Holmium"], answer: "Helium", category: "General Knowledge" },
    { question: "What is the national flower of Japan?", options: ["Cherry Blossom", "Rose", "Lotus", "Tulip"], answer: "Cherry Blossom", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country won the FIFA Women's World Cup in 2019?", options: ["USA", "Germany", "Japan", "Brazil"], answer: "USA", category: "Sports" },
    { question: "Who is the most decorated Olympian of all time?", options: ["Michael Phelps", "Simone Biles", "Larisa Latynina", "Usain Bolt"], answer: "Michael Phelps", category: "Sports" },
    { question: "Which tennis player has the most Grand Slam singles titles?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], answer: "Margaret Court", category: "Sports" },
    { question: "What is the maximum score in a game of ten-pin bowling?", options: ["300", "100", "200", "400"], answer: "300", category: "Sports" },
    { question: "In which country were the 2008 Summer Olympics held?", options: ["China", "Japan", "South Korea", "Australia"], answer: "China", category: "Sports" },
  ], 
  
  [
    // Geography questions
    { question: "Which country is known as the Land of Ice and Fire?", options: ["Iceland", "Norway", "Canada", "Finland"], answer: "Iceland", category: "Geography" },
    { question: "What is the capital city of Brazil?", options: ["Brasília", "Rio de Janeiro", "São Paulo", "Manaus"], answer: "Brasília", category: "Geography" },
    { question: "Which country has the most time zones?", options: ["Russia", "United States", "Canada", "China"], answer: "Russia", category: "Geography" },
    { question: "What is the only country that is also a continent?", options: ["Australia", "Antarctica", "Africa", "South America"], answer: "Australia", category: "Geography" },
    { question: "Which mountain range separates Europe from Asia?", options: ["Ural Mountains", "Himalayas", "Andes", "Rockies"], answer: "Ural Mountains", category: "Geography" },
  
    // History questions
    { question: "Which ancient civilization built the Colosseum?", options: ["Roman Empire", "Greek Empire", "Persian Empire", "Mayan Civilization"], answer: "Roman Empire", category: "History" },
    { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Li Shimin", "Empress Wu", "Sun Tzu"], answer: "Qin Shi Huang", category: "History" },
    { question: "Which battle marked the end of the Napoleonic Wars?", options: ["Battle of Waterloo", "Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar"], answer: "Battle of Waterloo", category: "History" },
    { question: "Who was the first president of South Africa after apartheid?", options: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Jacob Zuma"], answer: "Nelson Mandela", category: "History" },
    { question: "Which civilization built the Parthenon?", options: ["Ancient Greece", "Ancient Rome", "Ancient Egypt", "Mayan Civilization"], answer: "Ancient Greece", category: "History" },
  
    // Science questions
    { question: "What is the chemical formula for methane?", options: ["CH4", "CO2", "H2O", "C2H6"], answer: "CH4", category: "Science" },
    { question: "What is the primary function of red blood cells?", options: ["Transport oxygen", "Fight infection", "Clot blood", "Regulate body temperature"], answer: "Transport oxygen", category: "Science" },
    { question: "What is the largest organ in the human body?", options: ["Skin", "Liver", "Heart", "Lung"], answer: "Skin", category: "Science" },
    { question: "Who discovered the laws of heredity?", options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Albert Einstein"], answer: "Gregor Mendel", category: "Science" },
    { question: "What is the freezing point of water in Fahrenheit?", options: ["32°F", "0°F", "100°F", "50°F"], answer: "32°F", category: "Science" },
  
    // Art & Culture questions
    { question: "What is the name of the famous painting by Edvard Munch?", options: ["The Scream", "The Kiss", "Starry Night", "Guernica"], answer: "The Scream", category: "Art & Culture" },
    { question: "Which artist is known for the mural 'Guernica'?", options: ["Pablo Picasso", "Salvador Dalí", "Henri Matisse", "Georges Seurat"], answer: "Pablo Picasso", category: "Art & Culture" },
    { question: "Which writer created the character Sherlock Holmes?", options: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "J.K. Rowling"], answer: "Arthur Conan Doyle", category: "Art & Culture" },
    { question: "Which famous French artist is known for his impressionist paintings?", options: ["Claude Monet", "Paul Cézanne", "Henri Matisse", "Georges Braque"], answer: "Claude Monet", category: "Art & Culture" },
    { question: "Which opera composer wrote 'The Magic Flute'?", options: ["Wolfgang Amadeus Mozart", "Giuseppe Verdi", "Ludwig van Beethoven", "Johann Strauss II"], answer: "Wolfgang Amadeus Mozart", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the smallest unit of matter?", options: ["Atom", "Molecule", "Electron", "Proton"], answer: "Atom", category: "General Knowledge" },
    { question: "Which country produces the most coffee?", options: ["Brazil", "Vietnam", "Colombia", "Ethiopia"], answer: "Brazil", category: "General Knowledge" },
    { question: "What is the capital city of Italy?", options: ["Rome", "Florence", "Milan", "Venice"], answer: "Rome", category: "General Knowledge" },
    { question: "Who invented the light bulb?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"], answer: "Thomas Edison", category: "General Knowledge" },
    { question: "What is the world's largest continent by population?", options: ["Asia", "Africa", "Europe", "North America"], answer: "Asia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country is home to the sport of cricket?", options: ["England", "Australia", "India", "South Africa"], answer: "England", category: "Sports" },
    { question: "Which athlete holds the record for most goals in the history of the FIFA World Cup?", options: ["Marta", "Cristiano Ronaldo", "Pelé", "Miroslav Klose"], answer: "Miroslav Klose", category: "Sports" },
    { question: "Which country hosted the 2014 FIFA World Cup?", options: ["Brazil", "South Africa", "Germany", "Russia"], answer: "Brazil", category: "Sports" },
    { question: "Which city is known for hosting the Kentucky Derby?", options: ["Louisville", "New York", "Los Angeles", "Chicago"], answer: "Louisville", category: "Sports" },
    { question: "Who won the 2016 NBA Finals?", options: ["Cleveland Cavaliers", "Golden State Warriors", "Miami Heat", "San Antonio Spurs"], answer: "Cleveland Cavaliers", category: "Sports" },
  ],

  [
    // Geography questions
    { question: "Which country has the most pyramids?", options: ["Sudan", "Egypt", "Mexico", "Italy"], answer: "Sudan", category: "Geography" },
    { question: "In which country would you find the city of Marrakech?", options: ["Morocco", "Tunisia", "Egypt", "Algeria"], answer: "Morocco", category: "Geography" },
    { question: "What is the name of the largest bay in the world?", options: ["Bay of Bengal", "Hudson Bay", "Bering Sea", "Gulf of Mexico"], answer: "Bay of Bengal", category: "Geography" },
    { question: "Which river is the longest in the United States?", options: ["Missouri River", "Colorado River", "Mississippi River", "Columbia River"], answer: "Missouri River", category: "Geography" },
    { question: "Which city is the capital of Spain?", options: ["Madrid", "Barcelona", "Seville", "Valencia"], answer: "Madrid", category: "Geography" },
  
    // History questions
    { question: "Who was the first person to step on the Moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong", category: "History" },
    { question: "In which year did the United States declare independence?", options: ["1776", "1783", "1801", "1765"], answer: "1776", category: "History" },
    { question: "Which battle was Napoleon Bonaparte's last?", options: ["Battle of Waterloo", "Battle of Leipzig", "Battle of Austerlitz", "Battle of Trafalgar"], answer: "Battle of Waterloo", category: "History" },
    { question: "Who is known as the Father of Modern Chemistry?", options: ["Antoine Lavoisier", "Isaac Newton", "Dmitri Mendeleev", "Marie Curie"], answer: "Antoine Lavoisier", category: "History" },
    { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leonid Brezhnev"], answer: "Joseph Stalin", category: "History" },
  
    // Science questions
    { question: "What is the chemical formula for ammonia?", options: ["NH3", "H2O", "CO2", "CH4"], answer: "NH3", category: "Science" },
    { question: "Which organ in the human body is responsible for filtering blood?", options: ["Kidney", "Liver", "Lungs", "Heart"], answer: "Kidney", category: "Science" },
    { question: "What is the main function of white blood cells?", options: ["Fight infection", "Carry oxygen", "Clot blood", "Transmit nerve signals"], answer: "Fight infection", category: "Science" },
    { question: "Which gas do humans exhale during respiration?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"], answer: "Carbon dioxide", category: "Science" },
    { question: "Which is the hottest planet in the solar system?", options: ["Venus", "Mars", "Mercury", "Earth"], answer: "Venus", category: "Science" },
  
    // Art & Culture questions
    { question: "Which artist is famous for his surrealist works?", options: ["Salvador Dalí", "Pablo Picasso", "Henri Matisse", "Claude Monet"], answer: "Salvador Dalí", category: "Art & Culture" },
    { question: "What musical instrument is known as the 'king of instruments'?", options: ["Organ", "Piano", "Violin", "Guitar"], answer: "Organ", category: "Art & Culture" },
    { question: "What is the most famous work of Leonardo da Vinci?", options: ["Mona Lisa", "The Last Supper", "Vitruvian Man", "The Baptism of Christ"], answer: "Mona Lisa", category: "Art & Culture" },
    { question: "Which architectural wonder is located in Petra, Jordan?", options: ["The Treasury", "The Colosseum", "The Great Pyramid", "Taj Mahal"], answer: "The Treasury", category: "Art & Culture" },
    { question: "Which 1960s pop group was known as 'The Fab Four'?", options: ["The Beatles", "The Rolling Stones", "The Beach Boys", "The Who"], answer: "The Beatles", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the currency of the United States?", options: ["Dollar", "Pound", "Euro", "Yen"], answer: "Dollar", category: "General Knowledge" },
    { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City", category: "General Knowledge" },
    { question: "Which animal is known as the 'king of the jungle'?", options: ["Lion", "Tiger", "Elephant", "Giraffe"], answer: "Lion", category: "General Knowledge" },
    { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"], answer: "Pacific Ocean", category: "General Knowledge" },
    { question: "Which country is the largest by area?", options: ["Russia", "Canada", "United States", "China"], answer: "Russia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which sport is associated with Wimbledon?", options: ["Tennis", "Football", "Golf", "Rugby"], answer: "Tennis", category: "Sports" },
    { question: "Who won the 2018 FIFA World Cup?", options: ["France", "Croatia", "Germany", "Brazil"], answer: "France", category: "Sports" },
    { question: "What is the term for scoring three goals in a soccer game?", options: ["Hat trick", "Double", "Triple", "Goal spree"], answer: "Hat trick", category: "Sports" },
    { question: "Who has won the most Grand Slam singles titles in tennis?", options: ["Roger Federer", "Serena Williams", "Rafael Nadal", "Novak Djokovic"], answer: "Margaret Court", category: "Sports" },
    { question: "What is the highest score possible in a game of darts?", options: ["180", "100", "150", "120"], answer: "180", category: "Sports" },
  ]
  
];

export default quizData;
  
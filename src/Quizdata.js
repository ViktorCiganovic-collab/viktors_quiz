import React from 'react';

const quizData = [
  
  [
    // Geography questions
    { question: "What is the capital of Japan?", options: ["Bangkok", "Seoul", "Tokyo", "Beijing"], answer: "Tokyo", category: "Geography" },
    { question: "What is the longest river in Europe?", options: ["Danube", "Volga", "Rhine", "Thames"], answer: "Volga", category: "Geography" },
    { question: "Which country has the most volcanoes?", options: ["Iceland", "Chile", "Japan", "Indonesia"], answer: "Indonesia", category: "Geography" },
    { question: "What is the largest island in the world?", options: ["New Guinea", "Greenland", "Borneo", "Australia"], answer: "Greenland", category: "Geography" },
    { question: "Which ocean is the smallest?", options: ["Arctic", "Indian", "Pacific", "Atlantic"], answer: "Arctic", category: "Geography" },
  
    // History questions
    { question: "Who was the first emperor of China?", options: ["Liu Bang", "Qin Shi Huang", "Wudi", "Sun Yat-sen"], answer: "Qin Shi Huang", category: "History" },
    { question: "Which empire was ruled by Julius Caesar?", options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Byzantine Empire"], answer: "Roman Empire", category: "History" },
    { question: "In which year did World War II end?", options: ["1939", "1945", "1950", "1918"], answer: "1945", category: "History" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", category: "History" },
    { question: "Which civilization built the Great Pyramids of Giza?", options: ["Romans", "Egyptians", "Aztecs", "Greeks"], answer: "Egyptians", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for water?", options: ["CO2", "N2", "O2", "H2O"], answer: "H2O", category: "Science" },
    { question: "Which element has the atomic number 1?", options: ["Nitrogen", "Hydrogen", "Oxygen", "Helium"], answer: "Hydrogen", category: "Science" },
    { question: "What gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide", category: "Science" },
    { question: "Which planet is known as the Red Planet?", options: ["Jupiter", "Venus", "Earth", "Mars"], answer: "Mars", category: "Science" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond", category: "Science" },
  
    // Art & Culture questions
    { question: "Which famous artist is known for the painting 'The Starry Night'?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Edvard Munch"], answer: "Vincent van Gogh", category: "Art & Culture" },
    { question: "Which city is home to the famous art museum, the Louvre?", options: ["London", "Paris", "Rome", "New York"], answer: "Paris", category: "Art & Culture" },
    { question: "Who sculpted the statue of David?", options: ["Pablo Picasso", "Leonardo da Vinci", "Michelangelo", "Auguste Rodin"], answer: "Michelangelo", category: "Art & Culture" },
    { question: "Which city is home to the famous 'Sistine Chapel'?", options: ["Paris", "Rome", "London", "Florence"], answer: "Rome", category: "Art & Culture" },
    { question: "Which artist painted the 'Mona Lisa'?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the smallest planet in our solar system?", options: ["Venus", "Mars", "Mercury", "Earth"], answer: "Mercury", category: "General Knowledge" },
    { question: "Who wrote the novel '1984'?", options: ["George Orwell", "Aldous Huxley", "Mark Twain", "J.K. Rowling"], answer: "George Orwell", category: "General Knowledge" },
    { question: "What is the largest bird in the world?", options: ["Penguin", "Ostrich", "Albatross", "Eagle"], answer: "Ostrich", category: "General Knowledge" },
    { question: "What is the currency of Japan?", options: ["Ringgit", "Yuan", "Won", "Yen"], answer: "Yen", category: "General Knowledge" },
    { question: "Which is the largest country in the world by land area?", options: ["Canada", "USA", "China", "Russia"], answer: "Russia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France", category: "Sports" },
    { question: "Who holds the record for most Olympic gold medals?", options: ["Michael Phelps", "Usain Bolt", "Larisa Latynina", "Carl Lewis"], answer: "Michael Phelps", category: "Sports" },
    { question: "Which team won the NBA Championship in 2020?", options: ["Golden State Warriors", "Miami Heat", "Los Angeles Lakers", "Toronto Raptors"], answer: "Los Angeles Lakers", category: "Sports" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Greece", "Russia"], answer: "Brazil", category: "Sports" },
    { question: "What is the length of a marathon?", options: ["42.195 kilometers", "45 kilometers", "50 kilometers", "40 kilometers"], answer: "42.195 kilometers", category: "Sports" }
  ],
  
  [
    // Geography questions
    { question: "Which is the tallest mountain in the world?", options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Kangchenjunga"], answer: "Mount Everest", category: "Geography" },
    { question: "What is the capital city of Canada?", options: ["Montreal", "Ottawa", "Toronto", "Vancouver"], answer: "Ottawa", category: "Geography" },
    { question: "Which desert is the largest in the world?", options: ["Arabian", "Sahara", "Kalahari", "Gobi"], answer: "Sahara", category: "Geography" },
    { question: "In which country can you find the ancient city of Petra?", options: ["Jordan", "Israel", "Egypt", "Syria"], answer: "Jordan", category: "Geography" },
    { question: "Which continent is known as the 'Dark Continent'?", options: ["Africa", "South America", "Asia", "Australia"], answer: "Africa", category: "Geography" },
  
    // History questions
    { question: "Which event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Invasion of Poland", "D-Day Landings", "Treaty of Versailles"], answer: "Assassination of Archduke Franz Ferdinand", category: "History" },
    { question: "Who discovered America in 1492?", options: ["Marco Polo", "Leif Erikson", "Christopher Columbus", "Ferdinand Magellan"], answer: "Christopher Columbus", category: "History" },
    { question: "Who was the first female prime minister of the United Kingdom?", options: ["Margaret Thatcher", "Eleanor Roosevelt", "Theresa May", "Queen Elizabeth I"], answer: "Margaret Thatcher", category: "History" },
    { question: "What year did the Titanic sink?", options: ["1912", "1905", "1887", "1921"], answer: "1912", category: "History" },
    { question: "Which empire was known for its gladiator games?", options: ["Persian Empire", "Roman Empire", "Ottoman Empire", "Mongol Empire"], answer: "Roman Empire", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for sodium?", options: ["Na", "K", "Fe", "S"], answer: "Na", category: "Science" },
    { question: "Which scientist is known for the laws of motion?", options: ["Marie Curie", "Galileo Galilei", "Isaac Newton", "Albert Einstein"], answer: "Isaac Newton", category: "Science" },
    { question: "What is the study of the Earth and its processes called?", options: ["Astronomy", "Biology", "Geology", "Chemistry"], answer: "Geology", category: "Science" },
    { question: "What planet has the most moons?", options: ["Mars", "Earth", "Saturn", "Jupiter"], answer: "Jupiter", category: "Science" },
    { question: "What is the boiling point of water in Celsius?", options: ["120°C", "90°C", "100°C", "110°C"], answer: "100°C", category: "Science" },
  
    // Art & Culture questions
    { question: "Which city is home to the famous museum, the Prado?", options: ["London", "Rome", "Paris", "Madrid"], answer: "Madrid", category: "Art & Culture" },
    { question: "Who painted the 'Girl with a Pearl Earring'?", options: ["Johannes Vermeer", "Claude Monet", "Leonardo da Vinci", "Rembrandt"], answer: "Johannes Vermeer", category: "Art & Culture" },
    { question: "Which author wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Emily Dickinson", "Charlotte Brontë", "Charles Dickens"], answer: "Jane Austen", category: "Art & Culture" },
    { question: "Which famous ballet dancer is known for his incredible jumps?", options: ["Sergei Polunin", "Vaslav Nijinsky", "Mikhail Baryshnikov", "Rudolf Nureyev"], answer: "Mikhail Baryshnikov", category: "Art & Culture" },
    { question: "What is the name of the ancient Egyptian queen who is famous for her beauty?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], answer: "Cleopatra", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the most widely spoken language in the world?", options: ["Mandarin", "Hindi", "Spanish", "English"], answer: "Mandarin", category: "General Knowledge" },
    { question: "What is the name of the longest-running TV show?", options: ["The Simpsons", "Friends", "The Office", "Law & Order"], answer: "The Simpsons", category: "General Knowledge" },
    { question: "Who is known as the King of Pop?", options: ["George Michael", "Michael Jackson", "Elvis Presley", "Prince"], answer: "Michael Jackson", category: "General Knowledge" },
    { question: "Which element is represented by the symbol 'He'?", options: ["Holmium", "Hydrogen", "Hafnium", "Helium"], answer: "Helium", category: "General Knowledge" },
    { question: "What is the national flower of Japan?", options: ["Tulip", "Rose", "Cherry Blossom", "Lotus"], answer: "Cherry Blossom", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country won the FIFA Women's World Cup in 2019?", options: ["USA", "Germany", "Japan", "Brazil"], answer: "USA", category: "Sports" },
    { question: "Who is the most decorated Olympian of all time?", options: ["Simone Biles", "Michael Phelps", "Larisa Latynina", "Usain Bolt"], answer: "Michael Phelps", category: "Sports" },
    { question: "Which tennis player has the most Grand Slam singles titles?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], answer: "Margaret Court", category: "Sports" },
    { question: "What is the maximum score in a game of ten-pin bowling?", options: ["400", "200", "300", "100"], answer: "300", category: "Sports" },
    { question: "In which country were the 2008 Summer Olympics held?", options: ["China", "Japan", "South Korea", "Australia"], answer: "China", category: "Sports" }
  ], 
  
  [
    // Geography questions
    { question: "Which country is known as the Land of Ice and Fire?", options: ["Finland", "Canada", "Iceland", "Norway"], answer: "Iceland", category: "Geography" },
    { question: "What is the capital city of Brazil?", options: ["Rio de Janeiro", "Manaus", "Brasília", "São Paulo"], answer: "Brasília", category: "Geography" },
    { question: "Which country has the most time zones?", options: ["China", "Canada", "Russia", "United States"], answer: "Russia", category: "Geography" },
    { question: "What is the only country that is also a continent?", options: ["South America", "Australia", "Antarctica", "Africa"], answer: "Australia", category: "Geography" },
    { question: "Which mountain range separates Europe from Asia?", options: ["Rockies", "Ural Mountains", "Andes", "Himalayas"], answer: "Ural Mountains", category: "Geography" },
  
    // History questions
    { question: "Which ancient civilization built the Colosseum?", options: ["Mayan Civilization", "Roman Empire", "Persian Empire", "Greek Empire"], answer: "Roman Empire", category: "History" },
    { question: "Who was the first emperor of China?", options: ["Li Shimin", "Qin Shi Huang", "Empress Wu", "Sun Tzu"], answer: "Qin Shi Huang", category: "History" },
    { question: "Which battle marked the end of the Napoleonic Wars?", options: ["Battle of Austerlitz", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Waterloo"], answer: "Battle of Waterloo", category: "History" },
    { question: "Who was the first president of South Africa after apartheid?", options: ["Nelson Mandela", "Thabo Mbeki", "Desmond Tutu", "Jacob Zuma"], answer: "Nelson Mandela", category: "History" },
    { question: "Which civilization built the Parthenon?", options: ["Ancient Rome", "Ancient Greece", "Ancient Egypt", "Mayan Civilization"], answer: "Ancient Greece", category: "History" },
  
    // Science questions
    { question: "What is the chemical formula for methane?", options: ["CO2", "C2H6", "H2O", "CH4"], answer: "CH4", category: "Science" },
    { question: "What is the primary function of red blood cells?", options: ["Fight infection", "Clot blood", "Transport oxygen", "Regulate body temperature"], answer: "Transport oxygen", category: "Science" },
    { question: "What is the largest organ in the human body?", options: ["Liver", "Heart", "Skin", "Lung"], answer: "Skin", category: "Science" },
    { question: "Who discovered the laws of heredity?", options: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "Albert Einstein"], answer: "Gregor Mendel", category: "Science" },
    { question: "What is the freezing point of water in Fahrenheit?", options: ["50°F", "100°F", "0°F", "32°F"], answer: "32°F", category: "Science" },
  
    // Art & Culture questions
    { question: "What is the name of the famous painting by Edvard Munch?", options: ["The Scream", "The Kiss", "Starry Night", "Guernica"], answer: "The Scream", category: "Art & Culture" },
    { question: "Which artist is known for the mural 'Guernica'?", options: ["Salvador Dalí", "Henri Matisse", "Georges Seurat", "Pablo Picasso"], answer: "Pablo Picasso", category: "Art & Culture" },
    { question: "Which writer created the character Sherlock Holmes?", options: ["Edgar Allan Poe", "Arthur Conan Doyle", "Agatha Christie", "J.K. Rowling"], answer: "Arthur Conan Doyle", category: "Art & Culture" },
    { question: "Which famous French artist is known for his impressionist paintings?", options: ["Henri Matisse", "Claude Monet", "Georges Braque", "Paul Cézanne"], answer: "Claude Monet", category: "Art & Culture" },
    { question: "Which opera composer wrote 'The Magic Flute'?", options: ["Giuseppe Verdi", "Johann Strauss II", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart"], answer: "Wolfgang Amadeus Mozart", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the smallest unit of matter?", options: ["Atom", "Electron", "Proton", "Molecule"], answer: "Atom", category: "General Knowledge" },
    { question: "Which country produces the most coffee?", options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"], answer: "Brazil", category: "General Knowledge" },
    { question: "What is the capital city of Italy?", options: ["Venice", "Florence", "Rome", "Milan"], answer: "Rome", category: "General Knowledge" },
    { question: "Who invented the light bulb?", options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"], answer: "Thomas Edison", category: "General Knowledge" },
    { question: "What is the world's largest continent by population?", options: ["North America", "Europe", "Africa", "Asia"], answer: "Asia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country is home to the sport of cricket?", options: ["South Africa", "Australia", "India", "England"], answer: "England", category: "Sports" },
    { question: "Which athlete holds the record for most goals in the history of the FIFA World Cup?", options: ["Cristiano Ronaldo", "Marta", "Pelé", "Miroslav Klose"], answer: "Miroslav Klose", category: "Sports" },
    { question: "Which country hosted the 2014 FIFA World Cup?", options: ["Germany", "South Africa", "Brazil", "Russia"], answer: "Brazil", category: "Sports" },
    { question: "Which city is known for hosting the Kentucky Derby?", options: ["Los Angeles", "New York", "Chicago", "Louisville"], answer: "Louisville", category: "Sports" },
    { question: "Who won the 2016 NBA Finals?", options: ["Golden State Warriors", "Miami Heat", "Cleveland Cavaliers", "San Antonio Spurs"], answer: "Cleveland Cavaliers", category: "Sports" }
  ],

  [
    // Geography questions
    { question: "Which country has the most pyramids?", options: ["Mexico", "Italy", "Sudan", "Egypt"], answer: "Sudan", category: "Geography" },
    { question: "In which country would you find the city of Marrakech?", options: ["Tunisia", "Morocco", "Egypt", "Algeria"], answer: "Morocco", category: "Geography" },
    { question: "What is the name of the largest bay in the world?", options: ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Bering Sea"], answer: "Bay of Bengal", category: "Geography" },
    { question: "Which river is the longest in the United States?", options: ["Missouri River", "Columbia River", "Mississippi River", "Colorado River"], answer: "Missouri River", category: "Geography" },
    { question: "Which city is the capital of Spain?", options: ["Valencia", "Seville", "Barcelona", "Madrid"], answer: "Madrid", category: "Geography" },
  
    // History questions
    { question: "Who was the first person to step on the Moon?", options: ["Buzz Aldrin", "John Glenn", "Yuri Gagarin", "Neil Armstrong"], answer: "Neil Armstrong", category: "History" },
    { question: "In which year did the United States declare independence?", options: ["1765", "1783", "1776", "1801"], answer: "1776", category: "History" },
    { question: "Which battle was Napoleon Bonaparte's last?", options: ["Battle of Austerlitz", "Battle of Trafalgar", "Battle of Leipzig", "Battle of Waterloo"], answer: "Battle of Waterloo", category: "History" },
    { question: "Who is known as the Father of Modern Chemistry?", options: ["Marie Curie", "Isaac Newton", "Antoine Lavoisier", "Dmitri Mendeleev"], answer: "Antoine Lavoisier", category: "History" },
    { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Leonid Brezhnev", "Vladimir Lenin", "Nikita Khrushchev"], answer: "Joseph Stalin", category: "History" },
  
    // Science questions
    { question: "What is the chemical formula for ammonia?", options: ["NH3", "CH4", "CO2", "H2O"], answer: "NH3", category: "Science" },
    { question: "Which organ in the human body is responsible for filtering blood?", options: ["Heart", "Lungs", "Kidney", "Liver"], answer: "Kidney", category: "Science" },
    { question: "What is the main function of white blood cells?", options: ["Fight infection", "Carry oxygen", "Clot blood", "Transmit nerve signals"], answer: "Fight infection", category: "Science" },
    { question: "Which gas do humans exhale during respiration?", options: ["Methane", "Nitrogen", "Oxygen", "Carbon dioxide"], answer: "Carbon dioxide", category: "Science" },
    { question: "Which is the hottest planet in the solar system?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: "Venus", category: "Science" },
  
    // Art & Culture questions
    { question: "Which artist is famous for his surrealist works?", options: ["Claude Monet", "Salvador Dalí", "Henri Matisse", "Pablo Picasso"], answer: "Salvador Dalí", category: "Art & Culture" },
    { question: "What musical instrument is known as the 'king of instruments'?", options: ["Piano", "Violin", "Organ", "Guitar"], answer: "Organ", category: "Art & Culture" },
    { question: "What is the most famous work of Leonardo da Vinci?", options: ["The Baptism of Christ", "Vitruvian Man", "Mona Lisa", "The Last Supper"], answer: "Mona Lisa", category: "Art & Culture" },
    { question: "Which architectural wonder is located in Petra, Jordan?", options: ["The Treasury", "The Great Pyramid", "Taj Mahal", "The Colosseum"], answer: "The Treasury", category: "Art & Culture" },
    { question: "Which 1960s pop group was known as 'The Fab Four'?", options: ["The Who", "The Rolling Stones", "The Beatles", "The Beach Boys"], answer: "The Beatles", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the currency of the United States?", options: ["Pound", "Yen", "Dollar", "Euro"], answer: "Dollar", category: "General Knowledge" },
    { question: "What is the smallest country in the world?", options: ["San Marino", "Monaco", "Vatican City", "Nauru"], answer: "Vatican City", category: "General Knowledge" },
    { question: "Which animal is known as the 'king of the jungle'?", options: ["Tiger", "Giraffe", "Lion", "Elephant"], answer: "Lion", category: "General Knowledge" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], answer: "Pacific Ocean", category: "General Knowledge" },
    { question: "Which country is the largest by area?", options: ["United States", "Russia", "Canada", "China"], answer: "Russia", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which sport is associated with Wimbledon?", options: ["Golf", "Rugby", "Football", "Tennis"], answer: "Tennis", category: "Sports" },
    { question: "Who won the 2018 FIFA World Cup?", options: ["Germany", "Brazil", "Croatia", "France"], answer: "France", category: "Sports" },
    { question: "What is the term for scoring three goals in a soccer game?", options: ["Hat trick", "Goal spree", "Double", "Triple"], answer: "Hat trick", category: "Sports" },
    { question: "Who has won the most Grand Slam singles titles in tennis?", options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Margaret Court"], answer: "Margaret Court", category: "Sports" },
    { question: "What is the highest score possible in a game of darts?", options: ["120", "150", "100", "180"], answer: "180", category: "Sports" }
  ],

  [
    // Geography questions
    { question: "Which country has the longest coastline?", options: ["Australia", "Canada", "Russia", "United States"], answer: "Canada", category: "Geography" },
    { question: "Which mountain range is the longest in the world?", options: ["Rockies", "Andes", "Himalayas", "Alps"], answer: "Andes", category: "Geography" },
    { question: "Which country is home to the Great Barrier Reef?", options: ["United States", "Australia", "Brazil", "Mexico"], answer: "Australia", category: "Geography" },
    { question: "What is the capital city of Japan?", options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"], answer: "Tokyo", category: "Geography" },
    { question: "Which desert is the largest in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arabian"], answer: "Sahara", category: "Geography" },
  
    // History questions
    { question: "Who was the first emperor of China?", options: ["Li Shimin", "Qin Shi Huang", "Emperor Wu", "Liu Bang"], answer: "Qin Shi Huang", category: "History" },
    { question: "Which year did the Titanic sink?", options: ["1901", "1912", "1923", "1934"], answer: "1912", category: "History" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington", category: "History" },
    { question: "Which war was fought between the North and South in the United States?", options: ["World War I", "Civil War", "Revolutionary War", "War of 1812"], answer: "Civil War", category: "History" },
    { question: "Which famous queen ruled Egypt in the 1st century BC?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Isis"], answer: "Cleopatra", category: "History" },
  
    // Science questions
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au", category: "Science" },
    { question: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], answer: "Mercury", category: "Science" },
    { question: "What is the main function of red blood cells?", options: ["Fight infection", "Transport oxygen", "Clot blood", "Regulate temperature"], answer: "Transport oxygen", category: "Science" },
    { question: "What is the human body's largest organ?", options: ["Liver", "Brain", "Heart", "Skin"], answer: "Skin", category: "Science" },
    { question: "What element does 'O' represent on the periodic table?", options: ["Oxygen", "Osmium", "Oganesson", "Ozone"], answer: "Oxygen", category: "Science" },
  
    // Art & Culture questions
    { question: "Who painted the 'Starry Night'?", options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"], answer: "Vincent van Gogh", category: "Art & Culture" },
    { question: "Which city is home to the Louvre Museum?", options: ["London", "New York", "Paris", "Rome"], answer: "Paris", category: "Art & Culture" },
    { question: "Which film won the Academy Award for Best Picture in 1994?", options: ["Titanic", "The Shawshank Redemption", "Forrest Gump", "Pulp Fiction"], answer: "Forrest Gump", category: "Art & Culture" },
    { question: "Which opera composer wrote 'The Magic Flute'?", options: ["Ludwig van Beethoven", "Johannes Brahms", "Wolfgang Amadeus Mozart", "Richard Wagner"], answer: "Wolfgang Amadeus Mozart", category: "Art & Culture" },
    { question: "Which famous artist is known for painting the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Caravaggio"], answer: "Michelangelo", category: "Art & Culture" },
  
    // General Knowledge questions
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Amazon", category: "General Knowledge" },
    { question: "Which planet is known as the 'Red Planet'?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars", category: "General Knowledge" },
    { question: "Which continent is known as the 'Dark Continent'?", options: ["Asia", "Australia", "Africa", "Europe"], answer: "Africa", category: "General Knowledge" },
    { question: "What is the national animal of Canada?", options: ["Bald eagle", "Moose", "Grizzly bear", "Beaver"], answer: "Beaver", category: "General Knowledge" },
    { question: "Which is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], answer: "Greenland", category: "General Knowledge" },
  
    // Sports questions
    { question: "Which country hosted the 2008 Summer Olympics?", options: ["China", "Australia", "Greece", "United States"], answer: "China", category: "Sports" },
    { question: "What sport is played on a pitch with a white ball?", options: ["Football", "Cricket", "Rugby", "Basketball"], answer: "Cricket", category: "Sports" },
    { question: "Which country won the first Rugby World Cup?", options: ["New Zealand", "South Africa", "England", "Australia"], answer: "New Zealand", category: "Sports" },
    { question: "Who holds the record for the most goals in World Cup history?", options: ["Pelé", "Ronaldo", "Miroslav Klose", "Diego Maradona"], answer: "Miroslav Klose", category: "Sports" },
    { question: "What is the term for a score of 0 in tennis?", options: ["Love", "Zero", "Goose egg", "Nil"], answer: "Love", category: "Sports" }
  ],

  
  [
      // Geography questions
      { question: "What is the largest lake in the world?", options: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Caspian Sea"], answer: "Caspian Sea", category: "Geography" },
      { question: "Which country is known as the Land of the Rising Sun?", options: ["Thailand", "China", "Japan", "South Korea"], answer: "Japan", category: "Geography" },
      { question: "Which African country is the largest by area?", options: ["Nigeria", "Algeria", "Egypt", "Sudan"], answer: "Algeria", category: "Geography" },
      { question: "What is the longest river in Europe?", options: ["Danube", "Rhine", "Dnieper", "Volga"], answer: "Volga", category: "Geography" },
      { question: "What is the capital of Iceland?", options: ["Oslo", "Reykjavik", "Helsinki", "Copenhagen"], answer: "Reykjavik", category: "Geography" },
    
      // History questions
      { question: "Who discovered America in 1492?", options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama"], answer: "Christopher Columbus", category: "History" },
      { question: "What was the ancient city of Troy famous for?", options: ["Hanging Gardens", "Trojan Horse", "Stonehenge", "Pyramids"], answer: "Trojan Horse", category: "History" },
      { question: "Which empire was ruled by Julius Caesar?", options: ["Roman Empire", "Ottoman Empire", "Byzantine Empire", "Mongol Empire"], answer: "Roman Empire", category: "History" },
      { question: "Which year did the Berlin Wall fall?", options: ["1991", "1979", "1985", "1989"], answer: "1989", category: "History" },
      { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Florence Nightingale", "Ada Lovelace", "Rosalind Franklin"], answer: "Marie Curie", category: "History" },
    
      // Science questions
      { question: "What planet is known as the Earth's twin?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Venus", category: "Science" },
      { question: "What is the chemical formula for water?", options: ["H2", "O2", "H2O", "CO2"], answer: "H2O", category: "Science" },
      { question: "What is the powerhouse of the cell?", options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi Apparatus"], answer: "Mitochondria", category: "Science" },
      { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen", category: "Science" },
      { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: "300,000 km/s", category: "Science" },
    
      // Art & Culture questions
      { question: "What instrument has 88 keys?", options: ["Violin", "Guitar", "Piano", "Harp"], answer: "Piano", category: "Art & Culture" },
      { question: "Which Shakespeare play features the characters Romeo and Juliet?", options: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello"], answer: "Romeo and Juliet", category: "Art & Culture" },
      { question: "Which museum is famous for housing the Mona Lisa?", options: ["Metropolitan Museum of Art", "British Museum", "Louvre", "Rijksmuseum"], answer: "Louvre", category: "Art & Culture" },
      { question: "What is the dance form associated with Spain?", options: ["Tango", "Waltz", "Samba", "Flamenco"], answer: "Flamenco", category: "Art & Culture" },
      { question: "Who directed the movie 'Inception'?", options: ["Martin Scorsese", "Quentin Tarantino", "James Cameron", "Christopher Nolan"], answer: "Christopher Nolan", category: "Art & Culture" },
    
      // Sports questions
      { question: "How many players are on a soccer team during a match?", options: ["11", "10", "12", "9"], answer: "11", category: "Sports" },
      { question: "Which country has won the most Cricket World Cups?", options: ["India", "England", "Australia", "West Indies"], answer: "Australia", category: "Sports" },
      { question: "Which athlete has the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"], answer: "Michael Phelps", category: "Sports" },
      { question: "What sport uses a shuttlecock?", options: ["Table Tennis", "Badminton", "Squash", "Tennis"], answer: "Badminton", category: "Sports" },
      { question: "What is the highest score possible in a single frame of bowling?", options: ["10", "20", "30", "40"], answer: "30", category: "Sports" }    
  ]
  
  
];

export default quizData;
  
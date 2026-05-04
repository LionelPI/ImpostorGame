const wordPairs = [

    /* 🎬 FILMS */
    ["Titanic", "Avatar"],
    ["Inception", "Interstellar"],
    ["Gladiator", "Spartacus"],
    ["Matrix", "Inception"],
    ["Joker", "The Batman"],
    ["Avengers", "Justice League"],
    ["Fast & Furious", "Need for Speed"],
    ["Jurassic Park", "King Kong"],
    ["Harry Potter", "Fantastic Beasts"],
    ["Star Wars", "Star Trek"],

    /* 🦸‍♂️ SUPER-HÉROS */
    ["Iron Man", "Batman"],
    ["Spider-Man", "Flash"],
    ["Thor", "Aquaman"],
    ["Hulk", "Abomination"],
    ["Captain America", "Superman"],
    ["Deadpool", "Venom"],
    ["Wolverine", "Logan"],
    ["Doctor Strange", "Scarlet Witch"],
    ["Black Panther", "Killmonger"],
    ["Green Lantern", "Doctor Fate"],

    /* 🎌 ANIMÉS */
    ["Naruto", "Luffy"],
    ["Goku", "All Might"],
    ["Eren", "Deku"],
    ["Gojo", "Kakashi"],
    ["Tanjiro", "Zenitsu"],
    ["Levi", "Mikasa"],
    ["Itachi", "Hisoka"],
    ["Killua", "Sasuke"],
    ["Meliodas", "Escanor"],
    ["Light", "L"],

    /* 🏷️ MARQUES */
    ["Nike", "Adidas"],
    ["Apple", "Samsung"],
    ["Coca-Cola", "Pepsi"],
    ["McDonald's", "Burger King"],
    ["Louis Vuitton", "Gucci"],
    ["Rolex", "Omega"],
    ["Netflix", "Amazon Prime"],
    ["Uber", "Bolt"],
    ["Zara", "H&M"],
    ["Puma", "Reebok"],

    /* 🌟 CÉLÉBRITÉS */
    ["Cristiano Ronaldo", "Lionel Messi"],
    ["Kylian Mbappé", "Neymar"],
    ["LeBron James", "Stephen Curry"],
    ["Drake", "Travis Scott"],
    ["Kanye West", "Jay-Z"],
    ["Taylor Swift", "Ariana Grande"],
    ["Zendaya", "Rihanna"],
    ["Leonardo DiCaprio", "Brad Pitt"],
    ["Tom Holland", "Timothée Chalamet"],
    ["MrBeast", "Squeezie"],

    /* 🐶 ANIMAUX */
    ["Lion", "Tigre"],
    ["Chien", "Loup"],
    ["Chat", "Panthère"],
    ["Requin", "Orque"],
    ["Aigle", "Faucon"],
    ["Serpent", "Dragon"],
    ["Ours", "Gorille"],
    ["Renard", "Coyote"],
    ["Dauphin", "Baleine"],
    ["Hibou", "Chouette"],

    /* 🍔 NOURRITURE */
    ["Pizza", "Burger"],
    ["Pâtes", "Riz"],
    ["Sushi", "Makis"],
    ["Tacos", "Burrito"],
    ["Frites", "Chips"],
    ["Glace", "Milkshake"],
    ["Gâteau", "Tarte"],
    ["Pain", "Baguette"],
    ["Fromage", "Yaourt"],
    ["Steak", "Poulet"],

    /* 🧱 OBJETS */
    ["Téléphone", "Tablette"],
    ["Ordinateur", "Clavier"],
    ["Chaise", "Canapé"],
    ["Lampe", "Lustre"],
    ["Stylo", "Crayon"],
    ["Sac", "Valise"],
    ["Montre", "Bracelet"],
    ["Lunettes", "Masque"],
    ["Télévision", "Projecteur"],
    ["Casque", "Écouteurs"],

    /* 👨‍⚕️ MÉTIERS */
    ["Médecin", "Chirurgien"],
    ["Policier", "Détective"],
    ["Professeur", "Instituteur"],
    ["Pompier", "Sauveteur"],
    ["Avocat", "Juge"],
    ["Cuisinier", "Chef"],
    ["Chauffeur", "Pilote"],
    ["Architecte", "Ingénieur"],
    ["Journaliste", "Reporter"],
    ["Acteur", "Réalisateur"],

    /* 🌍 LIEUX */
    ["Paris", "Londres"],
    ["New York", "Los Angeles"],
    ["Tokyo", "Séoul"],
    ["Plage", "Montagne"],
    ["Désert", "Forêt"],
    ["Cinéma", "Théâtre"],
    ["Restaurant", "Bar"],
    ["École", "Université"],
    ["Hôpital", "Clinique"],
    ["Stade", "Arena"],

    /* 📺 DESSINS ANIMÉS */
    ["SpongeBob", "Patrick"],
    ["Tom", "Jerry"],
    ["Scooby-Doo", "Shaggy"],
    ["Mickey", "Donald"],
    ["Bugs Bunny", "Daffy Duck"],
    ["Gumball", "Darwin"],
    ["Ben 10", "Generator Rex"],
    ["Aang", "Korra"],
    ["Phineas", "Ferb"],
    ["Rick", "Morty"],

    /* 📺 SÉRIES */
    ["Breaking Bad", "Better Call Saul"],
    ["Stranger Things", "Dark"],
    ["Game of Thrones", "House of the Dragon"],
    ["The Office", "Parks and Rec"],
    ["Peaky Blinders", "Narcos"],
    ["Squid Game", "Alice in Borderland"],
    ["The Boys", "Invincible"],
    ["Friends", "HIMYM"],
    ["Prison Break", "Money Heist"],
    ["Euphoria", "Skins"],

    /* 😄 ÉMOTIONS */
    ["Joie", "Bonheur"],
    ["Tristesse", "Dépression"],
    ["Colère", "Rage"],
    ["Peur", "Stress"],
    ["Amour", "Passion"],
    ["Jalousie", "Envie"],
    ["Fierté", "Ego"],
    ["Honte", "Gêne"],
    ["Surprise", "Choc"],
    ["Dégoût", "Mépris"],

    /* 🧠 CONCEPTS */
    ["Liberté", "Pouvoir"],
    ["Justice", "Vengeance"],
    ["Richesse", "Succès"],
    ["Temps", "Destin"],
    ["Vie", "Mort"],
    ["Chaos", "Ordre"],
    ["Force", "Intelligence"],
    ["Réalité", "Illusion"],
    ["Chance", "Malchance"],
    ["Courage", "Peur"],

    /* 😈 DÉFAUTS / QUALITÉS */
    ["Gentil", "Naïf"],
    ["Courageux", "Téméraire"],
    ["Intelligent", "Manipulateur"],
    ["Honnête", "Brutal"],
    ["Calme", "Froid"],
    ["Drôle", "Lourd"],
    ["Sociable", "Collant"],
    ["Travailleur", "Obsédé"],
    ["Ambitieux", "Égoïste"],
    ["Patient", "Passif"],

    /* 🧍 PERSONNALITÉS */
    ["Leader", "Suiveur"],
    ["Introverti", "Timide"],
    ["Extraverti", "Bavard"],
    ["Créatif", "Rêveur"],
    ["Logique", "Froid"],
    ["Émotif", "Impulsif"],
    ["Optimiste", "Naïf"],
    ["Pessimiste", "Réaliste"],
    ["Indépendant", "Solitaire"],
    ["Charismatique", "Manipulateur"]

    /* 🎬 FILMS (suite) */
    ["The Dark Knight", "The Batman"],
    ["Interstellar", "Gravity"],
    ["Mad Max", "Dune"],
    ["Black Panther", "Creed"],
    ["Avatar 2", "Aquaman"],
    ["John Wick", "Nobody"],
    ["Shutter Island", "Seven"],
    ["The Wolf of Wall Street", "The Big Short"],
    ["Mission Impossible", "Jason Bourne"],
    ["The Hunger Games", "Divergent"],

    /* 🦸‍♂️ SUPER-HÉROS (suite) */
    ["Ant-Man", "The Atom"],
    ["Hawkeye", "Green Arrow"],
    ["Vision", "Martian Manhunter"],
    ["Scarlet Witch", "Raven"],
    ["Black Widow", "Catwoman"],
    ["Star-Lord", "Han Solo"],
    ["Gamora", "Nebula"],
    ["Loki", "Joker"],
    ["Thanos", "Darkseid"],
    ["Deadshot", "Bullseye"],

    /* 🎌 ANIMÉS (suite) */
    ["Vegeta", "Bakugo"],
    ["Gohan", "Deku"],
    ["Frieza", "Muzan"],
    ["Cell", "Meruem"],
    ["Shanks", "Jiraiya"],
    ["Obito", "Reiner"],
    ["Minato", "Shanks"],
    ["Kurapika", "Itachi"],
    ["Zenitsu", "Inosuke"],
    ["Asta", "Deku"],

    /* 🏷️ MARQUES (suite) */
    ["Tesla", "BMW"],
    ["Mercedes", "Audi"],
    ["PlayStation", "Xbox"],
    ["Nintendo", "Sega"],
    ["Amazon", "Alibaba"],
    ["Google", "Microsoft"],
    ["Snapchat", "Instagram"],
    ["TikTok", "YouTube"],
    ["Discord", "Skype"],
    ["Red Bull", "Monster"],

    /* 🌟 CÉLÉBRITÉS (suite) */
    ["Zlatan Ibrahimović", "Erling Haaland"],
    ["Karim Benzema", "Lewandowski"],
    ["Antoine Griezmann", "Paulo Dybala"],
    ["Kevin De Bruyne", "Bruno Fernandes"],
    ["Serena Williams", "Naomi Osaka"],
    ["Usain Bolt", "Noah Lyles"],
    ["Michael Jordan", "Kobe Bryant"],
    ["Shaquille O'Neal", "Giannis Antetokounmpo"],
    ["Billie Eilish", "Lorde"],
    ["Justin Bieber", "Shawn Mendes"],

    /* 🐶 ANIMAUX (suite) */
    ["Cheval", "Zèbre"],
    ["Vache", "Bison"],
    ["Mouton", "Chèvre"],
    ["Lapin", "Lièvre"],
    ["Singe", "Chimpanzé"],
    ["Éléphant", "Mammouth"],
    ["Girafe", "Okapi"],
    ["Crocodile", "Alligator"],
    ["Pingouin", "Manchot"],
    ["Panda", "Koala"],

    /* 🍔 NOURRITURE (suite) */
    ["Lasagnes", "Cannelloni"],
    ["Spaghetti", "Tagliatelles"],
    ["Hot-dog", "Sandwich"],
    ["Crêpe", "Gaufre"],
    ["Donut", "Beignet"],
    ["Croissant", "Pain au chocolat"],
    ["Salade", "Soupe"],
    ["Omelette", "Œufs brouillés"],
    ["Poisson", "Saumon"],
    ["Kebab", "Panini"],

    /* 🧱 OBJETS (suite) */
    ["Bouteille", "Verre"],
    ["Assiette", "Bol"],
    ["Fourchette", "Couteau"],
    ["Cadenas", "Clé"],
    ["Porte", "Fenêtre"],
    ["Horloge", "Réveil"],
    ["Clé USB", "Disque dur"],
    ["Chargeur", "Batterie"],
    ["Microphone", "Haut-parleur"],
    ["Caméra", "Appareil photo"],

    /* 👨‍⚕️ MÉTIERS (suite) */
    ["Dentiste", "Orthodontiste"],
    ["Pharmacien", "Infirmier"],
    ["Boulanger", "Pâtissier"],
    ["Serveur", "Barman"],
    ["Plombier", "Électricien"],
    ["Mécanicien", "Garagiste"],
    ["Coiffeur", "Barbier"],
    ["Vendeur", "Commercial"],
    ["Banquier", "Comptable"],
    ["Informaticien", "Développeur"],

    /* 🌍 LIEUX (suite) */
    ["Rome", "Athènes"],
    ["Berlin", "Madrid"],
    ["Dubaï", "Doha"],
    ["Sydney", "Melbourne"],
    ["Forêt amazonienne", "Jungle"],
    ["Mont Everest", "Mont Blanc"],
    ["Île", "Archipel"],
    ["Aéroport", "Gare"],
    ["Musée", "Galerie"],
    ["Bibliothèque", "Librairie"],

    /* 📺 DESSINS ANIMÉS (suite) */
    ["Elsa", "Anna"],
    ["Simba", "Mufasa"],
    ["Buzz", "Woody"],
    ["Shrek", "Fiona"],
    ["Aladdin", "Genie"],
    ["Hercule", "Achille"],
    ["Tarzan", "Mowgli"],
    ["Stitch", "Grogu"],
    ["Pikachu", "Raichu"],
    ["Dora", "Diego"],

    /* 📺 SÉRIES (suite) */
    ["The Walking Dead", "The Last of Us"],
    ["Vikings", "The Last Kingdom"],
    ["Lucifer", "Supernatural"],
    ["Riverdale", "Gossip Girl"],
    ["Elite", "13 Reasons Why"],
    ["Blacklist", "Mindhunter"],
    ["Arrow", "Flash"],
    ["Smallville", "Superman & Lois"],
    ["Lost", "From"],
    ["Dexter", "You"],

    /* 😄 ÉMOTIONS (suite) */
    ["Stress", "Anxiété"],
    ["Amusement", "Rire"],
    ["Admiration", "Respect"],
    ["Envie", "Jalousie"],
    ["Pitié", "Compassion"],
    ["Excitation", "Adrénaline"],
    ["Nostalgie", "Souvenir"],
    ["Doute", "Incertitude"],
    ["Motivation", "Ambition"],
    ["Frustration", "Colère"],

    /* 🧠 CONCEPTS (suite) */
    ["Argent", "Pouvoir"],
    ["Échec", "Réussite"],
    ["Ordre", "Contrôle"],
    ["Liberté", "Indépendance"],
    ["Risque", "Sécurité"],
    ["Tradition", "Modernité"],
    ["Innovation", "Création"],
    ["Destin", "Choix"],
    ["Nature", "Technologie"],
    ["Réalité", "Fiction"],

    /* 😈 DÉFAUTS / QUALITÉS (suite) */
    ["Humble", "Timide"],
    ["Autoritaire", "Dominant"],
    ["Généreux", "Naïf"],
    ["Sincère", "Brutal"],
    ["Drôle", "Sarcastique"],
    ["Patient", "Lent"],
    ["Rapide", "Précipité"],
    ["Organisé", "Rigide"],
    ["Flexible", "Instable"],
    ["Curieux", "Intrusif"],

    /* 🧍 PERSONNALITÉS (suite) */
    ["Calme", "Zen"],
    ["Énergique", "Hyperactif"],
    ["Réservé", "Discret"],
    ["Audacieux", "Impulsif"],
    ["Créatif", "Artistique"],
    ["Logique", "Mathématique"],
    ["Stratégique", "Manipulateur"],
    ["Rêveur", "Distrait"],
    ["Ambitieux", "Obsédé"],
    ["Indépendant", "Solitaire"]

    /* 🎬 FILMS (suite) */
    ["The Matrix", "Blade Runner"],
    ["Django", "The Revenant"],
    ["Inglourious Basterds", "Fury"],
    ["Fight Club", "American Psycho"],
    ["The Prestige", "Now You See Me"],
    ["Pirates des Caraïbes", "Treasure Island"],
    ["Cars", "Fast & Furious"],
    ["Toy Story", "Monsters Inc"],
    ["Frozen", "Moana"],
    ["The Lion King", "The Jungle Book"],

    /* 🦸‍♂️ SUPER-HÉROS (suite) */
    ["Batman", "Moon Knight"],
    ["Superman", "Shazam"],
    ["Flash", "Kid Flash"],
    ["Aquaman", "Namor"],
    ["Spider-Man", "Miles Morales"],
    ["Iron Man", "War Machine"],
    ["Thor", "Hercule"],
    ["Doctor Strange", "Constantine"],
    ["Black Widow", "Elektra"],
    ["Captain Marvel", "Supergirl"],

    /* 🎌 ANIMÉS (suite) */
    ["Sasuke", "Killua"],
    ["Naruto", "Ichigo"],
    ["Goku", "Saitama"],
    ["Eren", "Kaneki"],
    ["Gojo", "Levi"],
    ["Tanjiro", "Edward Elric"],
    ["Luffy", "Natsu"],
    ["Zoro", "Mikasa"],
    ["Deku", "Asta"],
    ["All Might", "Escanor"],

    /* 🏷️ MARQUES (suite) */
    ["Gucci", "Prada"],
    ["Balenciaga", "Off-White"],
    ["Supreme", "Palace"],
    ["Ferrari", "Lamborghini"],
    ["Porsche", "Bugatti"],
    ["Huawei", "Xiaomi"],
    ["Sony", "Panasonic"],
    ["Canon", "Nikon"],
    ["Dell", "HP"],
    ["Lenovo", "Asus"],

    /* 🌟 CÉLÉBRITÉS (suite) */
    ["Booba", "Kaaris"],
    ["Ninho", "Damso"],
    ["SCH", "PNL"],
    ["Jul", "Gazo"],
    ["Orelsan", "Bigflo"],
    ["Chris Brown", "Usher"],
    ["Will Smith", "Jamie Foxx"],
    ["Bradley Cooper", "Ryan Gosling"],
    ["Dwayne Johnson", "John Cena"],
    ["Kevin Hart", "Eddie Murphy"],

    /* 🐶 ANIMAUX (suite) */
    ["Chien", "Renard"],
    ["Chat", "Lynx"],
    ["Loup", "Hyène"],
    ["Lion", "Jaguar"],
    ["Tigre", "Panthère"],
    ["Ours", "Grizzly"],
    ["Aigle", "Condor"],
    ["Requin", "Barracuda"],
    ["Dauphin", "Marsouin"],
    ["Serpent", "Vipère"],

    /* 🍔 NOURRITURE (suite) */
    ["Burger", "Cheeseburger"],
    ["Pizza", "Calzone"],
    ["Sushi", "Sashimi"],
    ["Riz", "Quinoa"],
    ["Poulet", "Dinde"],
    ["Steak", "Entrecôte"],
    ["Glace", "Sorbet"],
    ["Chocolat", "Cacao"],
    ["Bonbon", "Caramel"],
    ["Café", "Expresso"],

    /* 🧱 OBJETS (suite) */
    ["Télécommande", "Manette"],
    ["Clavier", "Souris"],
    ["Écran", "Moniteur"],
    ["Casque", "AirPods"],
    ["Sac à dos", "Cartable"],
    ["Bureau", "Table"],
    ["Lit", "Matelas"],
    ["Rideau", "Voilage"],
    ["Miroir", "Vitre"],
    ["Balai", "Aspirateur"],

    /* 👨‍⚕️ MÉTIERS (suite) */
    ["Pilote", "Aviateur"],
    ["Policier", "Gendarme"],
    ["Soldat", "Mercenaire"],
    ["Chef", "Cuisinier"],
    ["Serveur", "Commis"],
    ["Journaliste", "Présentateur"],
    ["Acteur", "Cascadeur"],
    ["Professeur", "Formateur"],
    ["Coach", "Entraîneur"],
    ["Photographe", "Vidéaste"],

    /* 🌍 LIEUX (suite) */
    ["Plage", "Côte"],
    ["Montagne", "Colline"],
    ["Forêt", "Bois"],
    ["Ville", "Village"],
    ["Centre commercial", "Marché"],
    ["Hôtel", "Motel"],
    ["Piscine", "Spa"],
    ["Salle de sport", "Stade"],
    ["Boîte de nuit", "Bar"],
    ["Cinéma", "Drive-in"],

    /* 📺 DESSINS ANIMÉS (suite) */
    ["Scooby-Doo", "Samy"],
    ["Mickey", "Goofy"],
    ["Donald", "Daisy"],
    ["Tom", "Spike"],
    ["Jerry", "Tuffy"],
    ["Bob l'éponge", "Carlo"],
    ["Patrick", "Plankton"],
    ["Gumball", "Anaïs"],
    ["Darwin", "Nicole"],
    ["Finn", "Jake"],

    /* 📺 SÉRIES (suite) */
    ["Narcos", "El Chapo"],
    ["Prison Break", "Oz"],
    ["Breaking Bad", "Narcos"],
    ["The Witcher", "Game of Thrones"],
    ["The Boys", "Watchmen"],
    ["Stranger Things", "The Umbrella Academy"],
    ["Dark", "1899"],
    ["Elite", "Control Z"],
    ["You", "Dexter"],
    ["House of Cards", "Scandal"],

    /* 😄 ÉMOTIONS (suite) */
    ["Joie", "Euphorie"],
    ["Tristesse", "Mélancolie"],
    ["Colère", "Furie"],
    ["Peur", "Terreur"],
    ["Amour", "Attachement"],
    ["Jalousie", "Possession"],
    ["Fierté", "Vanité"],
    ["Honte", "Culpabilité"],
    ["Surprise", "Étonnement"],
    ["Dégoût", "Répulsion"],

    /* 🧠 CONCEPTS (suite) */
    ["Liberté", "Rébellion"],
    ["Pouvoir", "Autorité"],
    ["Justice", "Équité"],
    ["Richesse", "Luxe"],
    ["Succès", "Réussite"],
    ["Temps", "Éternité"],
    ["Vie", "Existence"],
    ["Mort", "Néant"],
    ["Ordre", "Discipline"],
    ["Chaos", "Désordre"],

    /* 😈 DÉFAUTS / QUALITÉS (suite) */
    ["Gentil", "Bienveillant"],
    ["Courageux", "Brave"],
    ["Intelligent", "Brillant"],
    ["Honnête", "Franc"],
    ["Calme", "Posé"],
    ["Drôle", "Amusant"],
    ["Sociable", "Ouvert"],
    ["Travailleur", "Diligent"],
    ["Ambitieux", "Déterminé"],
    ["Patient", "Endurant"],

    /* 🧍 PERSONNALITÉS (suite) */
    ["Leader", "Chef"],
    ["Suiveur", "Assistant"],
    ["Introverti", "Réservé"],
    ["Extraverti", "Expressif"],
    ["Créatif", "Inventif"],
    ["Logique", "Analytique"],
    ["Émotif", "Sensible"],
    ["Optimiste", "Positif"],
    ["Pessimiste", "Négatif"],
    ["Indépendant", "Libre"]

    /* 🎬 FILMS (suite) */
    ["Oppenheimer", "Tenet"],
    ["Barbie", "Mean Girls"],
    ["The Avengers", "Guardians of the Galaxy"],
    ["Deadpool", "Kick-Ass"],
    ["The Notebook", "Titanic"],
    ["Fast Five", "Fast 7"],
    ["Transformers", "Pacific Rim"],
    ["The Conjuring", "Insidious"],
    ["Saw", "Hostel"],
    ["The Purge", "Hunger Games"],

    /* 🦸‍♂️ SUPER-HÉROS (suite) */
    ["Deadpool", "Red Hood"],
    ["Spider-Man", "Nightwing"],
    ["Batman", "Daredevil"],
    ["Superman", "Omni-Man"],
    ["Thor", "Kratos"],
    ["Hulk", "Juggernaut"],
    ["Flash", "Zoom"],
    ["Iron Man", "Lex Luthor"],
    ["Doctor Strange", "Doctor Fate"],
    ["Black Panther", "Blade"],

    /* 🎌 ANIMÉS (suite) */
    ["Ichigo", "Yusuke"],
    ["Saitama", "Mob"],
    ["Kaneki", "Eren"],
    ["Natsu", "Luffy"],
    ["Zoro", "Killer"],
    ["Mikasa", "Akame"],
    ["Levi", "Giyu"],
    ["Gojo", "Sukuna"],
    ["Tanjiro", "Inosuke"],
    ["Deku", "Shoto"],

    /* 🏷️ MARQUES (suite) */
    ["Airbnb", "Booking"],
    ["PayPal", "Stripe"],
    ["Visa", "Mastercard"],
    ["Uber Eats", "Deliveroo"],
    ["KFC", "Popeyes"],
    ["Subway", "Quick"],
    ["Domino’s Pizza", "Pizza Hut"],
    ["Starbucks", "Costa Coffee"],
    ["Danone", "Nestlé"],
    ["Samsung", "LG"],

    /* 🌟 CÉLÉBRITÉS (suite) */
    ["Elon Musk", "Jeff Bezos"],
    ["Mark Zuckerberg", "Bill Gates"],
    ["Cristiano Ronaldo", "Neymar"],
    ["Mbappé", "Haaland"],
    ["Travis Scott", "Future"],
    ["Drake", "Lil Wayne"],
    ["Rihanna", "Beyoncé"],
    ["Ariana Grande", "Selena Gomez"],
    ["Zendaya", "Bella Hadid"],
    ["Tom Cruise", "Keanu Reeves"],

    /* 🐶 ANIMAUX (suite) */
    ["Panthère", "Jaguar"],
    ["Guépard", "Léopard"],
    ["Loup", "Chacal"],
    ["Renard", "Fennec"],
    ["Aigle", "Faucon"],
    ["Chouette", "Hibou"],
    ["Serpent", "Python"],
    ["Crocodile", "Alligator"],
    ["Requin", "Mégalodon"],
    ["Baleine", "Orque"],

    /* 🍔 NOURRITURE (suite) */
    ["Hamburger", "Double Burger"],
    ["Pizza", "Pizza 4 fromages"],
    ["Sushi", "California Roll"],
    ["Ramen", "Udon"],
    ["Nouilles", "Spaghetti"],
    ["Poulet frit", "Nuggets"],
    ["Steak", "Burger steak"],
    ["Glace vanille", "Glace chocolat"],
    ["Tarte aux pommes", "Tarte aux fraises"],
    ["Pain", "Pain complet"],

    /* 🧱 OBJETS (suite) */
    ["Téléphone", "Smartphone"],
    ["Ordinateur portable", "PC fixe"],
    ["Clavier", "Clavier mécanique"],
    ["Souris", "Trackpad"],
    ["Casque audio", "Écouteurs"],
    ["Télévision", "Écran OLED"],
    ["Lampe", "Lampe LED"],
    ["Table", "Table basse"],
    ["Chaise", "Fauteuil"],
    ["Lit", "Canapé-lit"],

    /* 👨‍⚕️ MÉTIERS (suite) */
    ["Docteur", "Médecin"],
    ["Avocat", "Procureur"],
    ["Policier", "Inspecteur"],
    ["Soldat", "Capitaine"],
    ["Pilote", "Commandant de bord"],
    ["Cuisinier", "Chef étoilé"],
    ["Serveur", "Maître d'hôtel"],
    ["Professeur", "Directeur"],
    ["Ingénieur", "Technicien"],
    ["Développeur", "Programmeur"],

    /* 🌍 LIEUX (suite) */
    ["Paris", "Versailles"],
    ["New York", "Brooklyn"],
    ["Tokyo", "Osaka"],
    ["Londres", "Manchester"],
    ["Rome", "Milan"],
    ["Plage", "Station balnéaire"],
    ["Montagne", "Station de ski"],
    ["Forêt", "Parc naturel"],
    ["Désert", "Oasis"],
    ["Île", "Archipel"],

    /* 📺 DESSINS ANIMÉS (suite) */
    ["Simba", "Scar"],
    ["Mufasa", "Sarabi"],
    ["Woody", "Buzz"],
    ["Buzz", "Zurg"],
    ["Shrek", "Donkey"],
    ["Fiona", "Dragon"],
    ["Elsa", "Anna"],
    ["Olaf", "Kristoff"],
    ["Mickey", "Mini"],
    ["Donald", "Dingo"],

    /* 📺 SÉRIES (suite) */
    ["Breaking Bad", "Ozark"],
    ["Stranger Things", "The 100"],
    ["Game of Thrones", "Vikings"],
    ["The Office", "Brooklyn 99"],
    ["Friends", "Big Bang Theory"],
    ["Prison Break", "Escape Plan"],
    ["Narcos", "Snowfall"],
    ["Peaky Blinders", "Boardwalk Empire"],
    ["Dexter", "Hannibal"],
    ["You", "Elite"],

    /* 😄 ÉMOTIONS (suite) */
    ["Bonheur", "Joie"],
    ["Tristesse", "Chagrin"],
    ["Colère", "Irritation"],
    ["Peur", "Angoisse"],
    ["Amour", "Affection"],
    ["Jalousie", "Envie"],
    ["Fierté", "Orgueil"],
    ["Honte", "Embarras"],
    ["Surprise", "Étonnement"],
    ["Dégoût", "Aversion"],

    /* 🧠 CONCEPTS (suite) */
    ["Liberté", "Indépendance"],
    ["Pouvoir", "Influence"],
    ["Justice", "Loi"],
    ["Richesse", "Argent"],
    ["Succès", "Victoire"],
    ["Temps", "Durée"],
    ["Vie", "Existence"],
    ["Mort", "Fin"],
    ["Ordre", "Structure"],
    ["Chaos", "Désordre"],

    /* 😈 DÉFAUTS / QUALITÉS (suite) */
    ["Gentillesse", "Bonté"],
    ["Courage", "Bravoure"],
    ["Intelligence", "Sagesse"],
    ["Honnêteté", "Sincérité"],
    ["Calme", "Sérénité"],
    ["Humour", "Ironie"],
    ["Sociabilité", "Ouverture"],
    ["Travail", "Discipline"],
    ["Ambition", "Motivation"],
    ["Patience", "Endurance"],

    /* 🧍 PERSONNALITÉS (suite) */
    ["Leader", "Manager"],
    ["Suiveur", "Assistant"],
    ["Introverti", "Solitaire"],
    ["Extraverti", "Sociable"],
    ["Créatif", "Artiste"],
    ["Logique", "Scientifique"],
    ["Émotif", "Sensible"],
    ["Optimiste", "Espoir"],
    ["Pessimiste", "Sceptique"],
    ["Indépendant", "Libre"]

];

let players = [];
let eliminatedPlayers = [];
let currentPlayer = 0;
let impostorIndex = 0;
let normalWord = "";
let impostorWord = "";

const homeScreen = document.getElementById("home");
const setupScreen = document.getElementById("setup");
const revealScreen = document.getElementById("reveal");
const discussionScreen = document.getElementById("discussion");
const voteScreen = document.getElementById("vote");
const eliminatedScreen = document.getElementById("eliminated");
const resultScreen = document.getElementById("result");

const playerInput = document.getElementById("playerInput");
const playersList = document.getElementById("playersList");
const playerTurn = document.getElementById("playerTurn");
const playerCount = document.getElementById("playerCount");
const revealContent = document.getElementById("revealContent");
const resultContent = document.getElementById("resultContent");
const eliminatedContent = document.getElementById("eliminatedContent");
const voteList = document.getElementById("voteList");
const firstSpeaker = document.getElementById("firstSpeaker");

window.addEventListener("load", () => {
    setTimeout(() => {
        const intro = document.getElementById("intro");
        if (intro) intro.style.display = "none";
    }, 4000);
});

function showScreen(screen) {
    [
        homeScreen,
        setupScreen,
        revealScreen,
        discussionScreen,
        voteScreen,
        eliminatedScreen,
        resultScreen
    ].forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

function updatePlayersList() {
    playersList.innerHTML = "";

    players.forEach((player, index) => {
        playersList.innerHTML += `
      <div class="player">
        <span>${index + 1}. ${player}</span>
        <button class="remove-btn" onclick="removePlayer(${index})">×</button>
      </div>
    `;
    });
}

function removePlayer(index) {
    players.splice(index, 1);
    updatePlayersList();
}

function addPlayer() {
    const name = playerInput.value.trim();

    if (name === "") return;

    players.push(name);
    playerInput.value = "";
    updatePlayersList();
}

function startGame() {
    if (players.length < 3) {
        alert("Il faut au moins 3 joueurs.");
        return;
    }

    eliminatedPlayers = [];
    currentPlayer = 0;
    impostorIndex = Math.floor(Math.random() * players.length);

    const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    normalWord = randomPair[0];
    impostorWord = randomPair[1];

    prepareReveal();
    showScreen(revealScreen);
}

function prepareReveal() {
    playerCount.textContent = `JOUEUR ${currentPlayer + 1} / ${players.length}`;
    playerTurn.textContent = `Tour de ${players[currentPlayer]}`;
    revealContent.textContent = "?";
}

function revealWord() {
    revealContent.textContent = currentPlayer === impostorIndex ? impostorWord : normalWord;
}

function nextPlayer() {
    currentPlayer++;

    if (currentPlayer >= players.length) {
        chooseFirstSpeaker();
        showScreen(discussionScreen);
        return;
    }

    prepareReveal();
}

function chooseFirstSpeaker() {
    const availablePlayers = players.filter((_, index) => !eliminatedPlayers.includes(index));
    const randomPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    firstSpeaker.textContent = randomPlayer;
}

function openVote() {
    voteList.innerHTML = "";

    players.forEach((player, index) => {
        if (!eliminatedPlayers.includes(index)) {
            voteList.innerHTML += `
        <button class="vote-player" onclick="votePlayer(${index})">
          Éliminer ${player}
        </button>
      `;
        }
    });

    showScreen(voteScreen);
}

function showFinalResult(titleText) {
    resultContent.innerHTML = `
    <p>${titleText}</p>
    <h2>${players[impostorIndex]}</h2>

    <div class="result-words">
      <div class="result-box">
        <p>Mot des joueurs</p>
        <h4>${normalWord}</h4>
      </div>

      <div class="result-box">
        <p>Mot de l’imposteur</p>
        <h4>${impostorWord}</h4>
      </div>
    </div>
  `;

    showScreen(resultScreen);
}

function votePlayer(index) {
    if (eliminatedPlayers.includes(index)) return;

    eliminatedPlayers.push(index);

    if (index === impostorIndex) {
        showFinalResult("L’imposteur a été trouvé !");
        return;
    }

    const remainingPlayers = players.filter((_, i) => !eliminatedPlayers.includes(i));
    const impostorStillAlive = !eliminatedPlayers.includes(impostorIndex);
    const innocentRemaining = remainingPlayers.length - 1;

    if (impostorStillAlive && innocentRemaining <= 1) {
        showFinalResult("L’imposteur a gagné !");
        return;
    }

    eliminatedContent.innerHTML = `
    <p class="eliminated-small">Joueur éliminé</p>
    <h2>${players[index]}</h2>
    <p class="eliminated-text">Ce n’était pas l’imposteur...</p>
    <p class="eliminated-warning">La partie continue.</p>
  `;

    showScreen(eliminatedScreen);
}

function continueGame() {
    chooseFirstSpeaker();
    showScreen(discussionScreen);
}

function restartGame() {
    eliminatedPlayers = [];
    currentPlayer = 0;
    resultContent.innerHTML = "";
    eliminatedContent.innerHTML = "";
    revealContent.textContent = "?";
    updatePlayersList();
    showScreen(setupScreen);
}

document.getElementById("playBtn").addEventListener("click", () => showScreen(setupScreen));
document.getElementById("addPlayerBtn").addEventListener("click", addPlayer);
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("revealBtn").addEventListener("click", revealWord);
document.getElementById("nextPlayerBtn").addEventListener("click", nextPlayer);
document.getElementById("goVoteBtn").addEventListener("click", openVote);
document.getElementById("continueBtn").addEventListener("click", continueGame);
document.getElementById("restartBtn").addEventListener("click", restartGame);

playerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addPlayer();
    }
});
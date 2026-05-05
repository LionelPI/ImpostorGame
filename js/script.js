document.addEventListener("DOMContentLoaded", () => {
    const screens = document.querySelectorAll(".screen");

const pairs = [

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


    let state = {
        players: [],
        alive: [],
        roles: [],
        current: 0,
        shown: false,
        settings: {
            players: 4,
            impostors: 1,
            whites: 0
        },
        words: ["", ""]
    };

    const $ = id => document.getElementById(id);

    window.go = function (id) {
        screens.forEach(screen => screen.classList.remove("active"));
        $(id).classList.add("active");
    };

    window.toast = function (message) {
        $("toast").textContent = message;
        $("toast").classList.add("show");

        setTimeout(() => {
            $("toast").classList.remove("show");
        }, 1800);
    };

    setTimeout(() => {
        go("home");
    }, 1700);

    window.preparePlayers = function () {
        const players = Number($("playerCount").value);
        const impostors = Number($("impostorCount").value);
        const whites = Number($("whiteCount").value);

        if (players < 3) return toast("Minimum 3 joueurs.");
        if (impostors < 1) return toast("Minimum 1 imposteur.");
        if (impostors + whites >= players) {
            return toast("Trop d’imposteurs / Mister White.");
        }

        state.settings = { players, impostors, whites };
        state.players = [];

        renderPlayers();
        go("names");
    };

    window.addPlayer = function () {
        const input = $("nameInput");
        const name = input.value.trim();

        if (!name) return toast("Entre un nom.");
        if (state.players.length >= state.settings.players) {
            return toast("Tous les joueurs sont déjà ajoutés.");
        }

        state.players.push(name);
        input.value = "";

        renderPlayers();
    };

    window.removePlayer = function (index) {
        state.players.splice(index, 1);
        renderPlayers();
    };

    function renderPlayers() {
        $("playerList").innerHTML = state.players.map((player, index) => `
      <div class="player-pill">
        <span>${index + 1}. ${player}</span>
        <span class="x" onclick="removePlayer(${index})">×</span>
      </div>
    `).join("");
    }

    $("nameInput").addEventListener("keydown", e => {
        if (e.key === "Enter") addPlayer();
    });

    window.startGame = function () {
        if (state.players.length !== state.settings.players) {
            return toast(`Il manque ${state.settings.players - state.players.length} joueur(s).`);
        }

        const pair = pairs[Math.floor(Math.random() * pairs.length)];
        state.words = pair;

        const total = state.players.length;
        const roles = Array(total).fill("civil");
        const ids = Array.from({ length: total }, (_, i) => i).sort(() => Math.random() - 0.5);

        for (let i = 0; i < state.settings.impostors; i++) {
            roles[ids.pop()] = "impostor";
        }

        for (let i = 0; i < state.settings.whites; i++) {
            roles[ids.pop()] = "white";
        }

        state.roles = roles;
        state.alive = state.players.map((_, i) => i);
        state.current = 0;
        state.shown = false;

        renderReveal();
        go("reveal");
    };

    function renderReveal() {
        const index = state.current;

        $("turnCount").textContent = `Joueur ${index + 1} / ${state.players.length}`;
        $("turnName").textContent = `Tour de ${state.players[index]}`;
        $("wordDisplay").textContent = "?";
        $("wordDisplay").className = "question";
        $("showWordBtn").style.visibility = "visible";

        state.shown = false;
    }

    window.showWord = function () {
        const role = state.roles[state.current];

        let word = state.words[0];

        if (role === "impostor") word = state.words[1];
        if (role === "white") word = "MISTER WHITE";

        $("wordDisplay").textContent = word;
        $("wordDisplay").className = "word";
        $("showWordBtn").style.visibility = "hidden";

        state.shown = true;
    };

    window.nextReveal = function () {
        if (!state.shown) return toast("Regarde ton mot avant de passer.");

        if (state.current < state.players.length - 1) {
            state.current++;
            renderReveal();
        } else {
            const randomPlayer = state.alive[Math.floor(Math.random() * state.alive.length)];
            $("firstSpeaker").textContent = state.players[randomPlayer];
            go("discussion");
        }
    };

    window.goVote = function () {
        $("voteList").innerHTML = state.alive.map(index => `
      <button class="btn" onclick="eliminate(${index})">
        Éliminer ${state.players[index]}
      </button>
    `).join("");

        go("vote");
    };

    window.eliminate = function (index) {
        state.alive = state.alive.filter(i => i !== index);

        $("elimName").textContent = state.players[index];

        const role = state.roles[index];

        if (role === "impostor") {
            $("elimText").textContent = "C’était un imposteur.";
        } else if (role === "white") {
            $("elimText").textContent = "C’était un Mister White.";
        } else {
            $("elimText").textContent = "Ce n’était pas l’imposteur... Le vote continue.";
        }

        const impostorsLeft = state.alive.filter(i => state.roles[i] === "impostor").length;
        const whitesLeft = state.alive.filter(i => state.roles[i] === "white").length;
        const civilsLeft = state.alive.filter(i => state.roles[i] === "civil").length;

        if (impostorsLeft === 0 && whitesLeft === 0) {
            return endGame("players", index);
        }

        if (impostorsLeft + whitesLeft >= civilsLeft) {
            return endGame("impostor", index);
        }

        go("elimination");
    };

    window.continueGame = function () {
        goVote();
    };

    function endGame(winner, lastEliminated) {
        const impostorIndex = state.roles.findIndex(role => role === "impostor");

        if (winner === "players") {
            $("winnerText").textContent = "L’imposteur a été trouvé !";
            $("winnerName").textContent = state.players[lastEliminated];
            $("victoryText").textContent = "Victoire des joueurs.";
        } else {
            $("winnerText").textContent = "L’imposteur a gagné !";
            $("winnerName").textContent = state.players[impostorIndex];
            $("victoryText").textContent = "Victoire de l’imposteur.";
        }

        $("civilWord").textContent = state.words[0];
        $("impostorWord").textContent = state.words[1];

        go("result");
    }

    window.resetGame = function () {
        state.alive = [];
        state.roles = [];
        state.current = 0;
        state.shown = false;
        state.words = ["", ""];

        startGame();
    };
});
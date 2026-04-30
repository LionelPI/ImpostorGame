const wordPairs = [
    ["Naruto", "Luffy"],
    ["Sasuke", "Zoro"],
    ["Goku", "All Might"],
    ["Eren", "Deku"],
    ["Gojo", "Kakashi"],
    ["Tanjiro", "Naruto"],
    ["Meliodas", "Goku"],
    ["Light", "L"],
    ["Killua", "Zenitsu"],
    ["Levi", "Mikasa"],

    ["Vegeta", "Bakugo"],
    ["Gohan", "Deku"],
    ["Frieza", "Muzan"],
    ["Cell", "Meruem"],
    ["Escanor", "All Might"],
    ["Shanks", "Jiraiya"],
    ["Itachi", "Hisoka"],
    ["Obito", "Reiner"],
    ["Minato", "Shanks"],
    ["Kurapika", "Itachi"],

    ["Cristiano Ronaldo", "Karim Benzema"],
    ["Lionel Messi", "Antoine Griezmann"],
    ["Kylian Mbappé", "Vinicius Jr"],
    ["Neymar", "Ronaldinho"],
    ["Zlatan Ibrahimović", "Erling Haaland"],
    ["LeBron James", "Kevin Durant"],
    ["Stephen Curry", "Damian Lillard"],
    ["Novak Djokovic", "Rafael Nadal"],
    ["Roger Federer", "Andy Murray"],
    ["Usain Bolt", "Noah Lyles"],

    ["Paul Pogba", "Marcus Rashford"],
    ["Sadio Mané", "Mohamed Salah"],
    ["Kanté", "Modric"],
    ["Kevin De Bruyne", "Bruno Fernandes"],
    ["Mbappé", "Henry"],
    ["Michael Jordan", "Kobe Bryant"],
    ["Shaquille O'Neal", "Giannis Antetokounmpo"],
    ["Tony Parker", "Stephen Curry"],
    ["Serena Williams", "Naomi Osaka"],
    ["Simone Biles", "Nadia Comaneci"],

    ["Iron Man", "Batman"],
    ["Spider-Man", "Flash"],
    ["Thor", "Aquaman"],
    ["Hulk", "Thanos"],
    ["Captain America", "Superman"],
    ["Joker", "Loki"],
    ["Darth Vader", "Kylo Ren"],
    ["Harry Potter", "Percy Jackson"],
    ["Doctor Strange", "Scarlet Witch"],
    ["Black Widow", "Catwoman"],

    ["Deadpool", "Venom"],
    ["Wolverine", "Logan"],
    ["Rocky", "Creed"],
    ["John Wick", "Jason Bourne"],
    ["James Bond", "Ethan Hunt"],
    ["Neo", "Trinity"],
    ["Matrix", "Inception"],
    ["Avatar", "Titanic"],
    ["Fast & Furious", "Need for Speed"],
    ["Gladiator", "Spartacus"],

    ["Mario", "Luigi"],
    ["Sonic", "Shadow"],
    ["Link", "Zelda"],
    ["Kratos", "Thor"],
    ["Geralt", "Aragorn"],
    ["Lara Croft", "Nathan Drake"],
    ["Master Chief", "Doom Slayer"],
    ["Pikachu", "Kirby"],
    ["Donkey Kong", "Bowser"],
    ["Cloud", "Sephiroth"],

    ["Sub-Zero", "Scorpion"],
    ["Ryu", "Ken"],
    ["Ezio", "Altair"],
    ["Trevor", "Michael"],
    ["CJ", "Franklin"],
    ["Krillin", "Mineta"],
    ["Gollum", "Dobby"],
    ["Hulk", "Abomination"],
    ["Flash", "Quicksilver"],
    ["Superman", "Homelander"],

    ["The Rock", "John Cena"],
    ["Leonardo DiCaprio", "Brad Pitt"],
    ["Tom Holland", "Timothée Chalamet"],
    ["Zendaya", "Rihanna"],
    ["Drake", "Travis Scott"],
    ["Kanye West", "Jay-Z"],
    ["Billie Eilish", "Lorde"],
    ["Taylor Swift", "Ariana Grande"],
    ["Elon Musk", "Mark Zuckerberg"],
    ["MrBeast", "Squeezie"],

    ["Booba", "Kaaris"],
    ["Ninho", "Damso"],
    ["PNL", "SCH"],
    ["Jul", "Gazo"],
    ["Orelsan", "Bigflo"],
    ["Justin Bieber", "Shawn Mendes"],
    ["Selena Gomez", "Dua Lipa"],
    ["Beyoncé", "Nicki Minaj"],
    ["Will Smith", "Jamie Foxx"],
    ["Chris Brown", "Usher"]
];

let players = [];
let eliminatedPlayers = [];
let currentPlayer = 0;
let impostorIndex = 0;
let normalWord = "";
let impostorWord = "";
let timerSeconds = 300;
let timerInterval = null;

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
const timer = document.getElementById("timer");
const voteList = document.getElementById("voteList");

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

    resetTimer();
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
        resetTimer();
        showScreen(discussionScreen);
        return;
    }

    prepareReveal();
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 300;
    displayTimer();

    const timerBtn = document.getElementById("timerBtn");
    if (timerBtn) {
        timerBtn.textContent = "LANCER LE CHRONO";
    }
}

function displayTimer() {
    const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
    const seconds = String(timerSeconds % 60).padStart(2, "0");
    timer.textContent = `${minutes}:${seconds}`;
}

function toggleTimer() {
    const timerBtn = document.getElementById("timerBtn");

    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerBtn.textContent = "REPRENDRE";
        return;
    }

    timerBtn.textContent = "PAUSE";

    timerInterval = setInterval(() => {
        timerSeconds--;
        displayTimer();

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerBtn.textContent = "TEMPS ÉCOULÉ";
            openVote();
        }
    }, 1000);
}

function openVote() {
    clearInterval(timerInterval);
    timerInterval = null;

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
    resetTimer();
    showScreen(discussionScreen);
}

function restartGame() {
    eliminatedPlayers = [];
    currentPlayer = 0;
    resultContent.innerHTML = "";
    eliminatedContent.innerHTML = "";
    revealContent.textContent = "?";
    resetTimer();
    updatePlayersList();
    showScreen(setupScreen);
}

document.getElementById("playBtn").addEventListener("click", () => showScreen(setupScreen));
document.getElementById("addPlayerBtn").addEventListener("click", addPlayer);
document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("revealBtn").addEventListener("click", revealWord);
document.getElementById("nextPlayerBtn").addEventListener("click", nextPlayer);
document.getElementById("timerBtn").addEventListener("click", toggleTimer);
document.getElementById("goVoteBtn").addEventListener("click", openVote);
document.getElementById("continueBtn").addEventListener("click", continueGame);
document.getElementById("restartBtn").addEventListener("click", restartGame);

playerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addPlayer();
    }
});

displayTimer();
// game.js
const secretNumber = localStorage.getItem("secretNumber");
const playerName = localStorage.getItem("playerName");
const numberOfDigits = 4; // Always set the length to 4

let attempts = 0;
const guessHistory = document.getElementById("guessHistory");

document.getElementById("guessBtn").addEventListener("click", () => {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.trim();
  console.log(`Player's guess: ${guess}`);
  console.log(`Secret Number: ${secretNumber}`); // Show the secret number for debugging

  // Check if the guess has the correct number of digits (4)
  if (guess.length !== numberOfDigits || isNaN(guess)) {
    alert(`Enter a valid ${numberOfDigits}-digit number.`);
    return;
  }

  // Check if all digits in the guess are unique
  const uniqueDigits = new Set(guess);
  if (uniqueDigits.size !== guess.length) {
    alert("All digits in the guess must be unique.");
    return;
  }

  attempts++;
  
  // Calculate cows and bulls
  const cows = [...guess].filter(
    (d, i) => secretNumber.includes(d) && secretNumber[i] !== d
  ).length;
  const bulls = [...guess].filter((d, i) => secretNumber[i] === d).length;

  // Create list item for the guess history
  const li = document.createElement("li");
  li.textContent = `Guess: ${guess}, Cows: ${cows}, Bulls: ${bulls}`;
  guessHistory.appendChild(li);

  // Show the guess and feedback in the console for debugging
  console.log(`Guess: ${guess}, Cows: ${cows}, Bulls: ${bulls}`);

  // Clear the input field after processing the guess
  guessInput.value = "";

  // Check if the player has guessed the secret number correctly
  if (bulls === numberOfDigits) {
    document.getElementById("winnerName").textContent = playerName;
    document.getElementById("guessCount").textContent = attempts;

    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.push({ name: playerName, attempts });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    document.getElementById("modal").style.display = "flex";
  }
});

document.getElementById("leaderboardBtn").addEventListener("click", () => {
  window.location.href = "../pages/leaderbord.html";
});

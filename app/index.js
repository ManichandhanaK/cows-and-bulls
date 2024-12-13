// index.js
document.getElementById('startGame').addEventListener('click', () => {
  const playerName = document.getElementById('playerName').value.trim();

  if (!playerName) {
    alert('Please enter your name!');
    return;
  }

  // Store the player name in localStorage
  localStorage.setItem('playerName', playerName);
  
  // Set the number of digits to 4
  const numberOfDigits = 3;
  localStorage.setItem('numberOfDigits', numberOfDigits);

  // Generate a secret number with 4 unique digits
  const secretNumber = generateSecretNumber(numberOfDigits);
  localStorage.setItem('secretNumber', secretNumber);

  // Log the secret number to the console for debugging
  console.log(`Secret Number: ${secretNumber}`);

  // Redirect to the game page
  window.location.href = '../pages/game.html';
});

// Function to generate a secret number with unique digits based on the selected length (4)
function generateSecretNumber(digitOption) {
  let secretNumber = '';
  while (secretNumber.length < digitOption) {
    const digit = Math.floor(Math.random() * 10);
    if (!secretNumber.includes(digit.toString())) {
      secretNumber += digit;
    }
  }
  return secretNumber;
}

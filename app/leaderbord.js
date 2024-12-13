const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]')
  .sort((a, b) => a.attempts - b.attempts);

const leaderboardList = document.getElementById('leaderboard');
leaderboard.forEach(player => {
  const li = document.createElement('li');
  li.textContent = `${player.name} - ${player.attempts} attempts`;
  leaderboardList.appendChild(li);
});

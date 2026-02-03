const seedData = () => {
  console.log("Seeding data...");

  // Seed User Details
  const user = {
    username: "SpeedSter",
    password: "password123",
  };
  localStorage.setItem("userDetails", JSON.stringify(user));
  console.log("User 'SpeedSter' created with password 'password123'");

  // Seed Leaderboard
  const leaderboardData = [
    { username: "Flash", score: 120, timestamp: Date.now() - 100000 },
    { username: "TypingNinja", score: 115, timestamp: Date.now() - 200000 },
    { username: "KeyboardWarrior", score: 110, timestamp: Date.now() - 300000 },
    { username: "SpeedSter", score: 105, timestamp: Date.now() },
    { username: "SlowPoke", score: 40, timestamp: Date.now() - 400000 },
    { username: "Alice", score: 95, timestamp: Date.now() - 500000 },
    { username: "Bob", score: 88, timestamp: Date.now() - 600000 },
    { username: "Charlie", score: 92, timestamp: Date.now() - 700000 },
    { username: "Dave", score: 100, timestamp: Date.now() - 800000 },
    { username: "Eve", score: 108, timestamp: Date.now() - 900000 },
  ];

  localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
  console.log("Leaderboard seeded with 10 entries");

  // Auto-login the seeded user
  localStorage.setItem("loggedInUser", user.username);
  console.log("User 'SpeedSter' logged in");

  alert(
    "Data Seeded Successfully!\n\nUser: SpeedSter\nPassword: password123\n\nRedirecting to Leaderboard...",
  );
  window.location.href = "leaderboard.html";
};

// Run immediately
seedData();

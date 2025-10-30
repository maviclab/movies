// Search simulation
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-box").value.trim();
  if (query) {
    alert(`Searching for "${query}"...`);
  } else {
    alert("Please enter a title to search.");
  }
});

// Play button simulation
document.querySelector(".play").addEventListener("click", () => {
  alert("🎬 Playing movie... (demo)");
});
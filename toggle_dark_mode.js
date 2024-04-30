function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Toggle dark mode class on body
    const isDarkMode = body.classList.contains("dark-mode");
    // Save user preference to localStorage
    localStorage.setItem("darkMode", isDarkMode);
    applyDarkModeToOtherScripts(isDarkMode); // Apply dark mode to other scripts
}

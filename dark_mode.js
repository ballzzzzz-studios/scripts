// Function to apply dark mode based on localStorage preference
function applyDarkModeFromLocalStorage() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const body = document.body;
    if (isDarkMode) {
        body.classList.add("dark-mode"); // Apply dark mode class to body
        applyDarkModeToOtherScripts(true); // Apply dark mode to other scripts
    } else {
        body.classList.remove("dark-mode"); // Remove dark mode class from body
        applyDarkModeToOtherScripts(false); // Apply light mode to other scripts
    }
}

// Call the function when the page loads to apply dark mode from localStorage
applyDarkModeFromLocalStorage();

function toggleDarkMode() {
     const body = document.body;
     body.classList.toggle("dark-mode"); // Toggle dark mode class on body
     const isDarkMode = body.classList.contains("dark-mode");
      // Save user preference to localStorage
      localStorage.setItem("darkMode", isDarkMode);
 }

    function applyDarkModeFromLocalStorage() {
            const isDarkMode = localStorage.getItem("darkMode") === "true";
            const body = document.body;
            if (isDarkMode) {
                body.classList.add("dark-mode"); // Apply dark mode class to body
            } else {
                body.classList.remove("dark-mode"); // Remove dark mode class from body
            }
        }

        // Call the function when the page loads to apply dark mode from localStorage
        applyDarkModeFromLocalStorage();

        // Add event listener to the toggle button
        document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

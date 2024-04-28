function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle("dark-mode"); // Toggle dark mode class on body
        const isDarkMode = body.classList.contains("dark-mode");
        // Save user preference to localStorage
        localStorage.setItem("darkMode", isDarkMode);
    }

    // Check if dark mode preference is saved in localStorage
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
        document.body.classList.add("dark-mode"); // Apply dark mode class to body
    }

    // Add event listener to the toggle button
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

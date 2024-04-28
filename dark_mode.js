<script>
    // Function to apply dark mode based on localStorage preference
    function applyDarkModeFromLocalStorage() {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        const body = document.body;
        if (isDarkMode) {
            body.classList.add("dark-mode"); // Apply dark mode class to body
            // You can add additional code here to adjust styles of other elements based on dark mode
        } else {
            body.classList.remove("dark-mode"); // Remove dark mode class from body
            // You can add additional code here to adjust styles of other elements based on light mode
        }
    }

    // Call the function when the page loads to apply dark mode from localStorage
    applyDarkModeFromLocalStorage();
</script>

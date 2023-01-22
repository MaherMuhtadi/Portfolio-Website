function toggle_theme() {
    /**
     * toggles between light and dark theme of the site
     */
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
    }
    else {
        document.body.classList.add("light");
    }
}
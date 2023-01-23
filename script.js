function toggle_theme() {
    /**
     * toggles between light and dark theme of the site
     */
    let images = document.getElementsByTagName("img");
    
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("/light/", "/dark/");
        }
    }
    else {
        document.body.classList.add("light");
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("/dark/", "/light/");
        }
    }
}
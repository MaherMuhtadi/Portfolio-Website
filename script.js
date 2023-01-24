function init_theme() {
    /**
     * chooses theme for the webpages according to saved preference
     */
    if (localStorage.getItem("theme") == "light") {
        document.body.classList.add("light");
        // switch images to their light theme counterpart by retrieving them from the 'light' subdirectory
        let images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("dark/", "light/");
        }
    }
}

function toggle_theme() {
    /**
     * toggles between light and dark theme of the site
     * and saves the theme preference in the local storage of browser
     */
    let images = document.getElementsByTagName("img");
    
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        // switch images to their dark theme counterpart by retrieving them from the 'dark' subdirectory
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("light/", "dark/");
        }
        localStorage.setItem("theme", "dark");
    }
    else {
        document.body.classList.add("light");
        // switch images to their light theme counterpart by retrieving them from the 'light' subdirectory
        for (var i = 0; i < images.length; i++) {
            images[i].src = images[i].src.replace("dark/", "light/");
        }
        localStorage.setItem("theme", "light");
    }
}
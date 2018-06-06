document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("menu-button");
    var menu = document.querySelector(".menu__list");
    var menuItems = document.getElementsByClassName("menu__list-item");
    var nav = document.querySelector(".navbar");
    
    window.addEventListener('scroll', function() {
        var currentPosition = pageYOffset;
        if(currentPosition > 100) {
            nav.classList.add("nav_sticky");
        } else {
            nav.classList.remove("nav_sticky");
        }
    });
    
    for(var i = 0; i< menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            if(menu.classList.contains("menu-visible")) {
                menu.classList.remove("menu-visible");
            }
        });
    }
      
    button.addEventListener('click', function() {
        menu.classList.toggle("menu-visible");
    })
})
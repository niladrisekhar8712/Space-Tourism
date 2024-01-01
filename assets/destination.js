document.getElementsByClassName("nav-link")[1].style.color = "gray";
// document.getElementsByClassName("nav-link")[1].style.border = "2px solid white";
var mainNav = document.getElementsByClassName("main-nav-item");
for (var i = 0; i < mainNav.length; i++) {
    mainNav[i].addEventListener("click", function () {
        for (var i = 0; i < mainNav.length; i++) {
            mainNav[i].style.color = "white";
        }
        this.style.color = "gray";
        document.getElementById("destination").innerHTML = this.innerHTML;
        if (this.innerHTML == "Mars") {
            document.getElementById("image").src = "assets/destination/image-mars.png";
            document.getElementById("description").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
            document.getElementsByClassName("main-footer-2-item")[0].innerHTML = "225 mil. km";
            document.getElementsByClassName("main-footer-2-item")[1].innerHTML = "9 months";
        }
        else if (this.innerHTML == "Europa") {
            document.getElementById("image").src = "assets/destination/image-europa.png";
            document.getElementById("description").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
            document.getElementsByClassName("main-footer-2-item")[0].innerHTML = "628 mil. km";
            document.getElementsByClassName("main-footer-2-item")[1].innerHTML = "3 years";
        }
        else if (this.innerHTML == "Titan") {
            document.getElementById("image").src = "assets/destination/image-titan.png";
            document.getElementById("description").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            document.getElementsByClassName("main-footer-2-item")[0].innerHTML = "1.6 bil. km";
            document.getElementsByClassName("main-footer-2-item")[1].innerHTML = "7 years";
        }
        else {
            document.getElementById("image").src = "assets/destination/image-moon.png";
            document.getElementById("description").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2, Apollo 11 and Chandrayaan 3 landing sites.";
            document.getElementsByClassName("main-footer-2-item")[0].innerHTML = "384,400 km";
            document.getElementsByClassName("main-footer-2-item")[1].innerHTML = "3 days";
        }
    });
}
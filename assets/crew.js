document.getElementsByClassName("nav-link")[2].style.color = "gray";
var button = document.querySelectorAll(".button");
button[0].classList.add("button-clicked");
button[1].addEventListener("click",function(){
    dummy();
    button[1].classList.add("button-clicked");
    document.querySelector(".role").innerHTML = "Mission Specialist";
    document.querySelector(".name").innerHTML = "Mark Shuttleworth";
    document.querySelector(".description").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.querySelector(".pic").src = "assets/crew/image-mark-shuttleworth.png";
});

button[2].addEventListener("click",function(){
    dummy();
    button[2].classList.add("button-clicked");
    document.querySelector(".role").innerHTML = "Pilot";
    document.querySelector(".name").innerHTML = "Victor Glover";
    document.querySelector(".description").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.querySelector(".pic").src = "assets/crew/image-victor-glover.png";
});

button[3].addEventListener("click",function(){
    dummy();
    button[3].classList.add("button-clicked");
    document.querySelector(".role").innerHTML = "Flight Engineer";
    document.querySelector(".name").innerHTML = "Anousheh Ansari";
    document.querySelector(".description").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.querySelector(".pic").src = "assets/crew/image-anousheh-ansari.png";
});

button[0].addEventListener("click",function(){
    dummy();
    button[0].classList.add("button-clicked");
    document.querySelector(".role").innerHTML = "Commander";
    document.querySelector(".name").innerHTML = "Douglas Hurley";
    document.querySelector(".description").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    document.querySelector(".pic").src = "assets/crew/image-douglas-hurley.png";
});

function dummy(){
    var button = document.querySelectorAll(".button");
    for(var i = 0;i<button.length;i++){
        button[i].classList.remove("button-clicked");
    }
}
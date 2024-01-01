var button = document.querySelectorAll(".group-copy");
button[0].classList.add("active-group");
function dummy(){
    var button = document.querySelectorAll(".group-copy");
    for(var i = 0;i<button.length;i++){
        button[i].classList.remove("active-group");
    }
}
button[1].addEventListener("click",function(){
    dummy();
    button[1].classList.add("active-group");
    document.querySelector(".main-plot-2-heading").innerHTML = "SPACEPORT";
    document.querySelector(".main-plot-2-description").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    document.querySelector(".pic").src = "assets/technology/image-spaceport-portrait.jpg";
});

button[2].addEventListener("click",function(){
    dummy();
    button[2].classList.add("active-group");
    document.querySelector(".main-plot-2-heading").innerHTML = "SPACE CAPSULE";
    document.querySelector(".main-plot-2-description").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    document.querySelector(".pic").src = "assets/technology/image-space-capsule-portrait.jpg";
});
button[0].addEventListener("click",function(){
    dummy();
    button[0].classList.add("active-group");
    document.querySelector(".main-plot-2-heading").innerHTML = "LAUNCH VEHICLE";
    document.querySelector(".main-plot-2-description").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    document.querySelector(".pic").src = "assets/technology/image-launch-vehicle-portrait.jpg";
});

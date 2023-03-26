let coll = document.getElementsByClassName("showText");
let i;
let img = document.getElementById("imagPlus");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    img.src = "images/plus.png";
    
    if (content.style.display === "block") {
      content.style.display = "none";
     
    } else {
      content.style.display = "block";
      img.src = "images/minus.png";
    }
  });
}



document.getElementById("hobbySectionClick").addEventListener("click", function(){
    window.open("https://shmuhammad.github.io/hobby.github.io/");
  });

document.getElementById("movieSectionClick").addEventListener("click", function(){
    window.open("https://shmuhammad.github.io/movieData/");
  });

document.getElementById("gameSectionClick").addEventListener("click", function(){
    window.open("https://shmuhammad.github.io/game/");
  });

document.getElementById("websiteSectionClick").addEventListener("click", function(){
    window.open("https://shmuhammad.github.io/myWebsite/");
  });

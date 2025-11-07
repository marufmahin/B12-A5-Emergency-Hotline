// Count hearts
const hearts = document.getElementsByClassName("heart");

const heartCountDesktop = document.getElementById("heart-count-desktop");
const heartCountMobile = document.getElementById("heart-count-mobile");

let count = 0;

for (let heart of hearts) {
    
  heart.addEventListener("click", function() {
    count = count + 1; 
    heartCountDesktop.innerText = count;
    heartCountMobile.innerText = count;
  });
}


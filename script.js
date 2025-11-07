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

//Copy Button
const copyButtons = document.querySelectorAll(".copy-btn");

for (const btn of copyButtons) {
    btn.addEventListener('click', function() {
        
        const number = btn.parentNode.parentNode.children[2].querySelector("h2").innerText;
        navigator.clipboard.writeText(number);

       
        let totalCopyDesktop = document.getElementById('copy-count-desktop');
        let crrCopyDesktop = Number(totalCopyDesktop.innerText);
        crrCopyDesktop++;
        totalCopyDesktop.innerText = crrCopyDesktop;

        let totalCopyMobile = document.getElementById('copy-count-mobile');
        let crrCopyMobile = Number(totalCopyMobile.innerText);
        crrCopyMobile++;
        totalCopyMobile.innerText = crrCopyMobile;

        alert("Number copied: "+ number);
    });
}


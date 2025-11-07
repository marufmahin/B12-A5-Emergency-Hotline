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


//Call Button

const callButtons = document.querySelectorAll(".call-btn");

for(const btn of callButtons){
    btn.addEventListener('click',function(){

      let  totalCoinDesktop = document.getElementById('coin-count-desktop');
      let currentCoinDesktop = Number(totalCoinDesktop.innerText);

      let  totalCoinMobile = document.getElementById('coin-count-mobile');
      let currentCoinMobile = totalCoinMobile && totalCoinMobile.innerText? Number(totalCoinMobile.innerText): currentCoinDesktop;

      if(currentCoinDesktop < 20 || currentCoinMobile < 20){
        alert("❌ Insufficient Coin")
        return
      }
      else{
        const subTitle = btn.parentNode.parentNode.children[1].querySelector("h3").innerText;
        const num = btn.parentNode.parentNode.children[2].querySelector("h2").innerText;

       currentCoinDesktop -= 20;
       currentCoinMobile = currentCoinDesktop;

      totalCoinDesktop.innerText = currentCoinDesktop;
      totalCoinMobile.innerText = currentCoinMobile;

        alert("📞 Calling " + subTitle +" "+ num + "...");
        


    //History

    const historyContainerDesktop = document.getElementById("history-container-desktop");
    const historyContainerMobile = document.getElementById("history-container-mobile");

    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();

    li.innerHTML = `
    <div class="flex justify-between items-center bg-[#FAFAFA] shadow-sm rounded-xl p-2 mb-2">
        <div>
            <h3 class="font-semibold text-sm text-black">${subTitle}</h3>
            <span class="text-[#5C5C5C]">${num}</span>
        </div>
        <span class="text-sm text-[#111111]">${time}</span>
      </div> 
    `;

    historyContainerDesktop.appendChild(li)
    
    const liClone = li.cloneNode(true);
    historyContainerMobile.appendChild(liClone);
      }

    })
   
}




  



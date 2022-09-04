const button = document.querySelector(".button");
const input = document.querySelector(".box input");
const peddings = document.querySelector(".peddings");
const day = document.querySelector(".day");
const time = document.querySelector(".time");

function currentDate() {
    const date = new Date().toLocaleDateString("hu-HU", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });

      const dateNow = new Date().toLocaleDateString("hu-HU", {
        weekday: "long",
      });
      day.innerHTML = dateNow.charAt(0).toUpperCase() + dateNow.slice(1);
      time.innerHTML = date;
    }
    
    currentDate();


button.onclick = function () {
    if (input.value.length == 0) {
        alert(`The input is empty`)
    }
    else {
        peddings.innerHTML += `
        <div class="pedding">
            <span class="peddingName" >${input.value}</span>
        
        <button class="trash">
        <i class="fa-thin fa-trash-alt"></i>
            </button>
            </div>`;

            const trash = document.querySelectorAll(".trash");
            for (let i = 0; i < trash.length; i++) {
                trash[i].onclick = function () {
                    this.parentNode.remove();
                }
            }
    }
}
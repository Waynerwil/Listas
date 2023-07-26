const input = document.querySelector(".agregar");
const addBtn = document.querySelector(".boton1");
const ul = document.querySelector("ul");

const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;
      if (text !=='') {
        if (text.length >= 2){
            const li = document.createElement("li");
          const p = document.createElement("p");
          const input = document.createElement("input");
          input.type = "checkbox";
          p.textContent = text;
            input.addEventListener('change',()=>{
                if (micheckbox.checked) {
                    contador++;
                  } else {
                    contador--;
                  }
            })
          li.appendChild(input);
          li.appendChild(p);
          li.appendChild(addDeletebtn());
          ul.appendChild(li);

          input.value = "";
          empty.style.display = "none";
        }
          
      }
      input.value = ''
});
function addDeletebtn() {
  const deleteBtn = document.createElement('buton');

  deleteBtn.textContent ="Delete";
  deleteBtn.className = "boton1";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
     const items = document.querySelectorAll('li');

      if (items.length == 0) {
        empty.style.display = "block";
      }

  });
  return deleteBtn;
}

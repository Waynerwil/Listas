const input = document.querySelector(".agregar");
const addBtn = document.querySelector(".boton1");
const ul = document.querySelector("ul");

const empty = document.querySelector(".empty");
const cont = document.querySelector(".cont");

var prueba = parseInt(cont.textContent);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text !== "" && text.length >= 0) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    p.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(addDeletebtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }else{
    alert("Ingrese texto")
  }
});

ul.addEventListener("click", (e) => {
  
  if (e.target.type === "checkbox") {
    const checkbox = e.target;
    const isChecked = checkbox.checked;
    const tarea = checkbox.parentElement; // El <li> que contiene el checkbox

    if (isChecked) {
      if (confirm("¿Estás seguro de que está lista?")) {
        prueba++;
        cont.textContent = prueba;
      } else {
        checkbox.checked = false; // Si el usuario cancela, desmarca el checkbox
      }
    } else {
      prueba--;
      cont.textContent = prueba;
    }
  }
});

function addDeletebtn() {
  const deleteBtn = document.createElement("buton");
  deleteBtn.innerHTML = '<img src="imagenes/borrar.png">';
  deleteBtn.className = "butonDelete";
  deleteBtn.addEventListener("click", (e) => {
    if(parseInt(cont.textContent) == 0){
      // prueba--;
      // cont.textContent = prueba;
      const item = e.currentTarget.parentNode;
      ul.removeChild(item);
      const items = document.querySelectorAll("li");
      if (items.length == 0) {
        empty.style.display = "block";
      }

    }
    else{
      const item = e.currentTarget.parentNode;
      ul.removeChild(item);
      const items = document.querySelectorAll("li");
      if (items.length == 0) {
        empty.style.display = "block";
      }
      prueba--;
      cont.textContent = prueba;
    }
  });
  return deleteBtn;
}
let inputCaja = document.querySelector('#inputCaja');
let lista = document.querySelector('#lista');

inputCaja.addEventListener("keyup", function(event){
if (event.key == "Enter") {
    addItem(this.value)
    this.value = ""
    }
})
let addItem = (inputCaja) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputCaja}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('dode');
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    lista.appendChild(listItem);
}

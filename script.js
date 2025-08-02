let inputCaja = document.querySelector('#inputCaja');
let lista = document.querySelector('#lista');

inputCaja.addEventListener("keyup", function(event){
if (event.key=="enter"){
    addItem(this.value)
    this.value=""
    }
})
let addItem = (inputCaja)=> {
    let listaItem = document.createElement("li");
    listaItem.innerHTML = `${inputCaja}<i><i>`;
    lista.appendChild(listaItem);
}

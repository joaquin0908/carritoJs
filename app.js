const inputColor = document.querySelector("#inputColor")
const btnVisualizar  = document.querySelector("#btnVisualizar")
const parrafoHexa  = document.querySelector("#parrafoHexa")
const containerColor  = document.querySelector("#containerColor")




btnVisualizar.addEventListener("click", () =>{
    console.log("me diste click");
    console.log(inputColor.value);
    parrafoHexa.textContent = inputColor.value;
    containerColor.style.backgroundColor = inputColor.value;
})
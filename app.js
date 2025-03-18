// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

//alert("Entro");

function agregarAmigo()
{
       
 let ingresaAmigo = document.getElementById("amigo");
 let nombreAmigo = ingresaAmigo.value;
 
 if (!nombreAmigo){
  alert("Debes ingresar el nombre de tu amigo");
  return;
 }
  //alert("agrega amigo a la lista");
  amigo.push(nombreAmigo);
  console.log(amigo);
  ingresaAmigo.value="";
  ingresaAmigo.focus();
  ordenarAmigos();
}

function ordenarAmigos(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";

    //recorrer lista de amigos
   for(let i=0; i < amigo.length; i++){
    let item = document.createElement("li");



 //let listaHTML = document.createElement("li");
   // listaHTML.textContent = element;
    //listaAmigos.appendChild(listaHTML);


          
          
    item.textContent= amigo[i];
    listaAmigos.appendChild(item);

   }
}
function sortearAmigo(){
    //alert("sorteo");

    if(amigo.length ===0){
     alert("no hay amigos para el sorteo");
     return;
    }
    let amigoSorteado =  amigo[Math.floor(Math.random() * amigo.length)]
    let resultado= document.getElementById("resultado");
    resultado.innerHTML=`El amigo ganador es :${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML="";

}


function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

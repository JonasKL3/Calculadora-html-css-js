

//creat paragraph
var p = document.createElement("p")

p.id="meup"

var node = document.createTextNode("0");

p.appendChild(node);

var div = document.getElementById("rslt");

div.appendChild(p);



//function for insert value
function insertValue(userInput){
  
  if(meup.textContent == "0") {
    meup.textContent= "";
  }
  meup.textContent += userInput;
}


//delet all element on clicked 'C'
var delet= false;
function del(){
  if(delet = true){
    meup.textContent= "0";
  }
  else{
    delet= false;
  }
}


//check special caracter repeations
/*
function checkout(meup) {
return !isNaN(meup[meup.textContent.length - 1]);
}
*/




let int = document.getElementsByClassName("button");



         function calcular() {
          
         
        // Pegando o conteúdo do parágrafo
        let conteudoParagrafo = document.getElementById("meup").innerText;

        // Calculando a equação usando eval (Cuidado: eval pode ser perigoso se usado com entrada do usuário)
        let resultado = eval(conteudoParagrafo);

        // Substituindo o conteúdo do parágrafo pelo resultado
        document.getElementById("meup").innerText = resultado;

}

var negative = true

function mid(){
  if (negative == false ){
    meup.textContent = meup/2;
  }
  else {
    negative == true;
  }
}


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



//this function for calculate result
         function calcular() {
          
        let conteudoParagrafo = document.getElementById("meup").innerText;

        
        let resultado = eval(conteudoParagrafo);

        
        document.getElementById("meup").innerText = resultado;

}


//this function return negative number
function mid(){
  if (true) {
    meup.textContent=-meup.textContent;
  }
  
}
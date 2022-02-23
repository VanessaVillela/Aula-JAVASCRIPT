var nome = "Vanessa Villela";
var idade = 30;
var idade2 = 20;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";

alert("Bem vindo " + nome + " de " + idade + " anos"); 
alert(idade+idade2); // cria um alerta somando duas variaveis reconhece que é numero não texto
alert(frase.replace("Japão", "Brasil")); //Cria o alerta da var  frase trocando o item pelo outro
console.log(nome);
console.log(idade);//Mostra no ocnsole a var pedida
console.log(frase.replace("Japão" , "Brasil"));//Mostra no ocnsole um item trocado pelo outro 
console.log(frase.toUpperCase()); //TODAS AS LETRAS EM MAIUSCULO
console.log(frase.toLowerCase()); //TODAS AS LETRAS EM minusculo
console.log(n1*n2); // Multiplicação


//arrys -------------------------------------------------------------------------------------------

var lista = ["maca","pera","laranja"];
lista.push("uva"); //adiciona a lista
lista.pop(); // retira ultimo item da lista
console.log(lista);
console.log(lista[1]);
console.log(lista.length); //quantidade de itens da lista
console.log(lista.reverse()); //muda a ordem da lista
console.log(lista.toString()); //muda a texto a lista
console.log(lista.join("-")); //muda o caracter de separação, exemplo
alert(lista[1]);


//dicionario---------------------------------------------------------------------------------------

var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
console.log(frutas.nome);
alert(frutas[1].nome);


//Condicionais---------------------------------------------------------------------------------------

var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}


//Laço de repetição---------------------------------------------------------------------------------------

var count = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
};

var counts;
for(counts=1; counts <= 5; counts++){
    alert(counts);
};


//date---------------------------------------------------------------------------------------

var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
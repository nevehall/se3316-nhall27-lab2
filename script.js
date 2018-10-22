
var limeQuantity = "20";
var lemonQuantity = "24";

var limePurchase = "0";

function onload(){

    document.getElementById("limeQuantity").innerHTML = limeQuantity; 
    document.getElementById("lemonQuantity").innerHTML = lemonQuantity; 

}

function englishLanguage(){
    document.getElementById("fruitShelf").innerHTML = "Fruit Shelf";
    document.getElementById("limes").innerHTML = "Limes"; 
    document.getElementById("pickFruit").innerHTML = "Pick a fruit";

}

function frenchLanguage(){
    document.getElementById("limes").innerHTML = "Citrons Verts";
    document.getElementById("fruitShelf").innerHTML = "Plateau de Fruits";
    document.getElementById("pickFruit").innerHTML = "Cueillir un Fruit";

}

function limes(){
    var l = document.getElementById("limesInput").value; //getting the input value
   
    //if the user inputs more than what's in stock
    if (l > limeQuantity){
        alert("You fatso, we only have " + limeQuantity + " limes in stock");
    }

    else{
        limeQuantity -= l;
        limePurchase += parseInt(l);
        var basket = document.getElementById("basket");
        var limeToBasket = document.getElementById("limesInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(limeToBasket + " lime(s) added to basket $" + parseFloat(l*0.44).toFixed(2)));
        basket.appendChild(list);

    }

    document.getElementById("limeQuantity").innerHTML = limeQuantity;

}

function addLime(){
    //if( )
}



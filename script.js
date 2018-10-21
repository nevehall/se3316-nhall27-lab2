
var limeQuantity = "20";
var lemonQuantity = "24";

function onload(){

    document.getElementById('limeQuantity').innerHTML = limeQuantity; 
    document.getElementById('lemonQuantity').innerHTML = lemonQuantity; 

}

function englishLanguage(){
    document.getElementById("fruitShelf").innerHTML = "Fruit Shelf";
    document.getElementById("limes").innerHTML = "Limes"; 
    document.getElementById("pickFruit").innerHTML = "Pick a Fruit";

}

function frenchLanguage(){
    document.getElementById("limes").innerHTML = "Citrons Verts";
    document.getElementById("fruitShelf").innerHTML = "Plateau de Fruits";
    document.getElementById("pickFruit").innerHTML = "Cueillir un Fruit";

}

function limes(){
    var l = document.getElementById("limesInput").value; //getting the input value
    
    //alert(l);
   
    //if the user inputs more than what's in stock
    if (l.length != 0 && (l > limeQuantity)){
        alert("You fatso, we only have " + limeQuantity + " limes in stock");
    }

    /*if (l.length < document.getElementById('limeQuantity').innerHTML){
        alert("Easy, we don't have that many limes left!");
    }*/

    //otherwise, the quantity in stock will be updated and the desired amount 
    //will be added to their cart
   /* else{
        limeQuantity = limeQuantity - l;

    }*/

}



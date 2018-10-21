
var limeQuantity = "20";
var lemonQuantity = "24";

function onload(){

    document.getElementById("limeQuantity").innerHTML = limeQuantity; 
    document.getElementById("lemonQuantity").innerHTML = lemonQuantity; 

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
    
    // alert(limeQuantity);
    /*if(l.length < 1){
        limeQuantity -= 1;
        
    }*/
   
    //if the user inputs more than what's in stock
    if (l > limeQuantity){
        alert("You fatso, we only have " + limeQuantity + " limes in stock");
    }

    if(l < limeQuantity){
        limeQuantity -= l;
    }
    /*if (l.length < document.getElementById('limeQuantity').innerHTML){
        alert("Easy, we don't have that many limes left!");
    }*/

  


    document.getElementById("limeQuantity").innerHTML = limeQuantity;

}




var limeQuantity = "20";
var lemonQuantity = "24";
var appleQuantity = "31";
var grapeQuantity = "30";
var watermelonQuantity = "8";
var strawbQuantity = "12";
var raspQuantity = "14";
var bluebQuantity = "21";
var plumQuantity = "26";
var pineappleQuantity = "13";
var pearQuantity = "28";
var peachQuantity = "32";
var orangeQuantity = "29";
var mangoQuantity = "11";
var kiwiQuantity = "19";
var grapefruitQuantity = "10";
var bananaQuantity = "42";

var limePurchase = "0";
var lemonPurchase = "0";

function onload(){

    document.getElementById("limeQuantity").innerHTML = limeQuantity; 
    document.getElementById("lemonQuantity").innerHTML = lemonQuantity; 

}

function englishLanguage(){
    document.getElementById("fruitShelf").innerHTML = "Fruit Shelf";
    document.getElementById("pickFruit").innerHTML = "Pick a fruit";
    document.getElementById("limes").innerHTML = "Limes"; 
    document.getElementById("lemons").innerHTML = "Lemons";
    document.getElementById("apples").innerHTML = "Apples";
    document.getElementById("grapes").innerHTML = "Grapes";
    document.getElementById("watermelon").innerHTML = "Watermelon";
    document.getElementById("strawberries").innerHTML = "Strawberries";
    document.getElementById("raspberries").innerHTML = "Raspberries";
    document.getElementById("blueberries").innerHTML = "Blueberries";
    document.getElementById("plums").innerHTML = "Plums";
    document.getElementById("pineapple").innerHTML = "Pineapple";
    document.getElementById("pear").innerHTML = "Pears";
    document.getElementById("peaches").innerHTML = "Peaches";
    document.getElementById("oranges").innerHTML = "Oranges";
    document.getElementById("mango").innerHTML = "Mango";
    document.getElementById("kiwi").innerHTML = "Kiwi";
    document.getElementById("grapefruit").innerHTML = "Grapefruit";
    document.getElementById("bananas").innerHTML = "Bananas";

}

function frenchLanguage(){
    document.getElementById("fruitShelf").innerHTML = "Plateau de Fruits";
    document.getElementById("pickFruit").innerHTML = "Cueillir un Fruit";
    document.getElementById("limes").innerHTML = "Citrons Verts";
    document.getElementById("lemons").innerHTML = "Citrons";
    document.getElementById("apples").innerHTML = "Pommes";
    document.getElementById("grapes").innerHTML = "Les Raisins";
    document.getElementById("watermelon").innerHTML = "Patèque";
    document.getElementById("strawberries").innerHTML = "Des Fraises";
    document.getElementById("raspberries").innerHTML = "Framboises";
    document.getElementById("blueberries").innerHTML = "Bleuets";
    document.getElementById("plums").innerHTML = "Prunes";
    document.getElementById("pineapple").innerHTML = "Ananas";
    document.getElementById("pear").innerHTML = "Poires";
    document.getElementById("peaches").innerHTML = "Les Pêches";
    document.getElementById("oranges").innerHTML = "Des Oranges";
    document.getElementById("mango").innerHTML = "Mangue";
    document.getElementById("kiwi").innerHTML = "Kiwi";
    document.getElementById("grapefruit").innerHTML = "Pamplemousse";
    document.getElementById("bananas").innerHTML = "Bananes";

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

function totalPurchase(){
    var subtotal = "0";
    var tax = "0";
    var total = "0";

    subtotal = parseFloat(limePurchase) + parseFloat()
}




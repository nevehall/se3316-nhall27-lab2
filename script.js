
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
var applePurchase = "0";
var grapePurchase = "0";
var watermelonPurchase = "0";
var strawbPurchase = "0";
var raspPurchase = "0";
var bluebPurchase = "0";
var plumPurchase = "0";
var pineapplePurchase = "0";
var pearPurchase = "0";
var peachPurchase = "0";
var orangePurchase = "0";
var mangoPurchase = "0";
var kiwiPurchase = "0";
var grapefruitPurchase = "0";
var bananaPurchase = "0";

function onload(){

    document.getElementById("limeQuantity").innerHTML = limeQuantity; 
    document.getElementById("lemonQuantity").innerHTML = lemonQuantity; 
    document.getElementById("appleQuantity").innerHTML = appleQuantity; 
    document.getElementById("grapeQuantity").innerHTML = grapeQuantity; 
    document.getElementById("watermelonQuantity").innerHTML = watermelonQuantity; 
    document.getElementById("strawbQuantity").innerHTML = strawbQuantity; 
    document.getElementById("raspQuantity").innerHTML = raspQuantity;
    document.getElementById("bluebQuantity").innerHTML = bluebQuantity;
    document.getElementById("plumQuantity").innerHTML = plumQuantity;
    document.getElementById("pineappleQuantity").innerHTML = pineappleQuantity;
    document.getElementById("pearQuantity").innerHTML = pearQuantity;
    document.getElementById("peachQuantity").innerHTML = peachQuantity;
    document.getElementById("orangeQuantity").innerHTML = orangeQuantity;
    document.getElementById("mangoQuantity").innerHTML = mangoQuantity;
    document.getElementById("kiwiQuantity").innerHTML = kiwiQuantity;
    document.getElementById("grapefruitQuantity").innerHTML = grapefruitQuantity;
    document.getElementById("bananaQuantity").innerHTML = bananaQuantity;

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
    var lim = document.getElementById("limesInput").value; //getting the input value
   
    //if the user inputs more than what's in stock
    if (lim > limeQuantity){
        alert("You fatso, we only have " + limeQuantity + " limes in stock");
    }

    else{
        limeQuantity -= lim;
        limePurchase += parseInt(lim);
        var basket = document.getElementById("basket");
        var limeToBasket = document.getElementById("limesInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(limeToBasket + " lime(s) added to basket, $" + parseFloat(lim*0.44).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("limeQuantity").innerHTML = limeQuantity;

}

function lemons(){
    var lem = document.getElementById("lemonInput").value;

    if (lem > lemonQuantity){
        alert("EASY! We only have " +lemonQuantity+ " lemons in stock!");
    }

    else{
        lemonQuantity -= lem;
        lemonPurchase += parseInt(lem);
        var basket = document.getElementById("basket");
        var lemonToBasket = document.getElementById("lemonInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(lemonToBasket + " lemon(s) added to basket, $" + parseFloat(lem*0.38).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("lemonQuantity").innerHTML = lemonQuantity;
}

function apples(){
    var app = document.getElementById("appleInput").value;

    if(app > appleQuantity){
        alert("Easy there Steve Jobs, we only have " + appleQuantity+ " apples in stock!");
    }

    else{
        appleQuantity -= app;
        applePurchase += parseInt(app);
        var basket = document.getElementById("basket");
        var appleToBasket = document.getElementById("appleInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(appleToBasket + " apple(s) added to basket, $" + parseFloat(app*0.6).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("appleQuantity").innerHTML = appleQuantity;
}

function grapes(){
    var grap = document.getElementById("grapeInput").value;

    if (grap > grapeQuantity){
        alert("Settle, we only have " +grapeQuantity+ " pounds of grapes in stock.");
    }

    else{
        grapeQuantity -= grap;
        grapePurchase += parseInt(grap);
        var basket = document.getElementById("basket");
        var grapeToBasket = document.getElementById("grapeInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(grapeToBasket + " pounds of grapes added to basket, $" + parseFloat(app*0.6).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("grapeQuantity").innerHTML = grapeQuantity;
}

function watermelons(){
    var wat = document.getElementById("watermelonInput").value;

    if(wat > watermelonQuantity){
        alert("That's a lot of watermeLOOON, we only have " + watermelonQuantity + " in stock.");
    }

    else{
        watermelonQuantity -= wat;
        watermelonPurchase += parseInt(wat);
        var basket = document.getElementById("basket");
        var watermelonToBasket = document.getElementById("watermelonInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(watermelonToBasket + " watermelons added to basket, $" + parseFloat(wat*6).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("watermelonQuantity").innerHTML = watermelonQuantity;
}

function strawberries(){
    var straw = document.getElementById("strawbInput").value;

    if (straw > strawbQuantity){
        alert("We only have " + strawbQuantity+ " quarts of strawberries in stock.");
    }

    else{
        strawbQuantity -= straw;
        strawbPurchase += parseInt(straw);
        var basket = document.getElementById("basket");
        var strawbToBasket = document.getElementById("strawbInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(strawbToBasket + " quarts of strawberries added to basket, $" + parseFloat(straw*3.99).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("strawbQuantity").innerHTML = strawbQuantity;

}

function raspberries(){
    var ras = document.getElementById("raspInput").value;

    if(ras > raspQuantity){
        alert("We only have " +raspQuantity+ "pints of raspberries.");
    }

    else{
        raspQuantity -= ras;
        raspPurchase += parseInt(ras);
        var basket = document.getElementById("basket");
        var raspToBasket = document.getElementById("raspInput").value;
        var list = document.createElement("li")
        list.appendChild(document.createTextNode(raspToBasket + " pints of raspberries added to basket, $" + parseFloat(ras*2.99).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("raspQuantity").innerHTML = raspQuantity;
}

function blueberries(){
    var blueb = document.getElementById("bluebInput").value;

    if(blueb > bluebQuantity){
        alert("We only have " + bluebQuantity+ " pints of blueberries.");
    }

    else{
        bluebQuantity -= blueb;
        bluebPurchase += parseInt(blueb);
        var basket = document.getElementById("basket");
        var bluebToBasket = document.getElementById("bluebInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(bluebToBasket + " pints of blueberries added to basket, $" + parseFloat(blueb*1.8).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("bluebQuantity").innerHTML = bluebQuantity;
}

function plums(){
    var plum = document.getElementById("plumInput").value;

    if(plum > plumQuantity){
        alert("We only have " +plumQuantity+ " plums in stock.");
    }

    else{
        plumQuantity -= plum;
        plumPurchase += parseInt(plum);
        var basket = document.getElementById("basket");
        var plumToBasket = document.getElementById("plumInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(plumToBasket + " plums added to the basket, $" + parseFloat(plum*0.68).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("plumQuantity").innerHTML = plumQuantity;
}

function pineapple(){
    var pin = document.getElementById("pinInput").value;

    if(pin > pineappleQuantity){
        alert("We only have" + pineappleQuantity + " in stock.");
    }

    else{
        pineappleQuantity -= pin;
        pineapplePurchase += parseInt(pin);
        var basket = document.getElementById("basket");
        var pinToBasket = document.getElementById("pinInput").value;
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(pinToBasket + " pineapples added to the basket, $" + parseFloat(pin*4).toFixed(2)));
        basket.appendChild(list);
    }

    document.getElementById("pineappleQuantity").innerHTML = pineappleQuantity;

}


function totalPurchase(){
    var subtotal = "0";
    var tax = "0";
    var total = "0";

    subtotal = parseFloat(limePurchase*0.44) + parseFloat(lemonPurchase*0.38) + parseFloat(applePurchase*0.6) + parseFloat(grapePurchase*2.61) + parseFloat(watermelonPurchase*6) + parseFloat(strawbPurchase*3.99) + parseFloat(raspPurchase*2.99) + parseFloat(bluebPurchase*1.8) + parseFloat(plum*0.68) + parseFloat(pineapplePurchase*4);
    tax = 0.13*(parseFloat(pineapplePurchase*4) + parseFloat(bluebPurchase*1.8) + parseFloat(watermelonPurchase*6) + parseFloat(grapePurchase*2.61));
    total = subtotal + tax;
    
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = tax.toFixed(2);
    document.getElementById("total").innerHTML = total.toFixed(2);
}





window.onload = function(){
   var limeQuantity = 20;
   document.getElementById('limeQuantity').innerHTML = limeQuantity; 

   var lemonQuantity = 24;
   document.getElementById('lemonQuantity').innerHTML = lemonQuantity; 

}


function tooManyFruits(){
    /*var inputAmount = parseInt(document.getElementById('inputAmount').value);
    if (limeQuantity.innerHTML < inputAmount.value){
        alert("You fatso, we only have " + limeQuantity.innerHTML + "limes in stock");
    }*/

    var inputAmount = function(){
        foo = inputAmount.value;  //assign input value to foo
        inputAmount.value = '';  //set the inputAmount to empty string
    }
    
    alert("alert" + limeQuantity.innerHTML + inputAmount.value);
}

function updateFruitQuantity(){

}
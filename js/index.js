// user interface logic
$(document).ready(function() {
    $('.pizza1').click(function() {
        $('.pizza1-text').slideDown('slow');
    });
    $('.pizza2').click(function() {
        $('.pizza2-text').slideDown('slow');
    });
    $('.pizza3').click(function() {
        $('.pizza3-text').slideDown('slow');
    });

});


// Business logic

function sizePrice () {
    var size = $(".size").val();
    if(size === "Small-500") {
        var pizzaSizePrice = 500 ;
    }
    else if(size === "Medium-700") {
        var pizzaSizePrice = 700 ;
    }
    else  {
        var pizzaSizePrice = 1000 ;
    }

    return pizzaSizePrice;
}
function crustPrice () {
    var crust = $(".crust").val();
    if(crust === 'Crispy-100') {
        var pizzaCrustPrice = 100;
    }
    else if (crust === 'Thin-50') {
        var pizzaCrustPrice = 50;
    }
    else if(crust === 'Stuffed-150') {
        var pizzaCrustPrice = 150;
    }
    else {
        var pizzaCrustPrice = 200;
    }
    return pizzaCrustPrice;
}
function toppingsPrice () {
    var toppings = $(".toppings").val();
    var pizzaToppingPrice =  50;
    return pizzaToppingPrice;
}
function numberOfPizzaPrice () {
    var pizzaquantity = $(".quantity").val();
    var numberOfPizza = parseInt(pizzaquantity);
    if (pizzaquantity < 1) {
        alert('Invalid number of Pizzas!');
        return false;
    }
    else {
       return numberOfPizza; 
    }
}

function pizzaPrice () {
    var totalPrice = (sizePrice() + crustPrice() + toppingsPrice()) * numberOfPizzaPrice();
    alert('Your order has been put in the cart successfully!');
    alert('The price is : ' + totalPrice);
    $("#price").text(+ totalPrice);
}

function Pizza( type,size,crust,toppings,pizzanumber) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzanumber = pizzanumber;
}

Pizza.prototype.sumup = function () {
    return '<strong>Your order is : </strong>' +  this.size  + ", " + this.type + ", with a crust of " + this.crust + ", with " + this.toppings + ", " + this.pizzanumber + ' of them.'; 
}

function deliveryPizza () {
    var locationDelivery = $("#location").val();
    alert("Your order will be delivered to " + locationDelivery);
}


function resetFields() {
    var type = $("select#type").val("");
    var size = $("select.size").val("");
    var crust = $("select.crust").val("");
    var toppings = $("select.toppings").val("");
    var pizzanumber =$("input.quantity").val("");
   }

$(document).ready(function(){
    $("#pickup").click(function(event){
        event.preventDefault();
        $("#pickup").show();
        $("#deliverpizza").hide();

    })

    $("#deliverpizza").click(function(event){
        event.preventDefault();

        $("#pickup").hide();
        $('#deliverpizza').hide();
        var location = prompt('Where do you want it to be delivered?');
        alert('Your order shall be delivered to ' + location + '.');
        alert('The delivery fee is Kshs. 250.');

    })
    $(".btn-cart").click(function(){

        var type = $("#type").val();
        var size = $(".size").val();
        var crust = $(".crust").val();
        var topping = $(".toppings").val();
        var pizzanumber =$(".quantity").val();
        var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber);
        $("ol#finalorder").append("<li>" + pizzaOrder.sumup() + "</li>");

        resetFields();

    });
    $('#purchase').click(function() {
       alert("Thank you for buying from us. Your order will be ready in 20min!");
       location.reload(); 
    });
});
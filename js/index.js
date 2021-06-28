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


    $('.btn-cart').click(function() {
        alert('Your order has been put in the cart successfully!');
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
    var pizzas = $(".quantity").val();
    var numberOfPizza = parseInt(pizzas);
    return numberOfPizza;
}
function pizzaPrice () {
    var totalPrice = (sizePrice()+ crustPrice()+ toppingsPrice()) * numberOfPizzaPrice();
    alert(totalPrice);

    $("#price").text(+ totalPrice);
}

function Pizza( type,size,crust,toppings,pizzanumber) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzanumber = pizzanumber;
}

Pizza.prototype.addEverything = function () {
    return this.type + "," + this.size + "," + this.crust + "," + this.toppings + "," + this.pizzanumber +" pizzas"; 
}

function deliveryPizza () {
    var locationDelivery = $("#location").val();
    alert("Your order will be delivered to " + locationDelivery);
}

function pickUpPizza () {
    alert("Your order will be ready in 20min!");
}
function resetFields() {
    var type = $("select#pizzaType").val("");
    var size = $("select.size").val("");
    var crust = $("select.crust").val("");
    var toppings = $("select.toppings").val("");
    var pizzanumber =$("input.quantity").val("");
   }

$(document).ready(function(){
    $("#pickUp").click(function(event){
        event.preventDefault();

        $("#pickUp").show();
        $("#deliverpizza").hide();

     var type = $("#type").val();
     var size = $("#size").val();
     var crust = $("#crustrust").val();
     var topping = $("#toppings").val();
     var pizzanumber =$(".quantity").val();

     var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)

     $("#pizzaForPickUp").show();
     $("#pizzaForDelivery").hide();
     $("ul#pizzaForPickUp").append("<li>" + pizzaOrder.addEverything() + "</li>");

    })
    $("#deliverpizza").click(function(event){
        event.preventDefault();

        $("#deliverpizza").show();
        $("#pickUp").hide();
        
        var locate=$("#location").val();
        $("#deliverpizza").text("The order will be delivered at " + locate)

     var type = $("#type").val();
     var size = $("#size").val();
     var crust = $("#crust").val();
     var topping = $("#toppings").val();
     var pizzanumber =$("#quantity").val();

     var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)

     $("#pizzaForPickUp").hide();
     $("#pizzaForDelivery").show();
     $("ul#pizzaForDelivery").append("<li>" + pizzaOrder.addEverything() + "</li>");

    })
    $("#purchase").click(function(event){
        event.preventDefault();

        var type = $("#type").val();
        var size = $("#size").val();
        var crust = $("#pizzaCrust").val();
        var topping = $("#toppings").val();
        var pizzanumber =$("#quantity").val();
   
        var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)
   
        $("ul#finalList").append("<li>" + pizzaOrder.addEverything() + "</li>");

    resetFields();

    });
   

});
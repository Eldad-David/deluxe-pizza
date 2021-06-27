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
    var size = $("#size-classic").val();
    if(size==="Small-500") {
        var pizzaSizePrice = 500 ;
    }
    else if(size==="Medium-700") {
        var pizzaSizePrice = 700 ;
    }
    else  {
        var pizzaSizePrice = 900 ;
    }
    return pizzaSizePrice;
}
function crustPrice () {
    var crust= $(".crust").val();
    if(crust==='Crispy-100') {
        var pizzaCrustPrice = 100;
    }
    else if (crust==='Thin-50') {
        var pizzaCrustPrice = 50;
    }
    else if(crust==='Stuffed-150') {
        var pizzaCrustPrice = 150;
    }
    else {
        var pizzaCrustPrice = 200;
    }
    return pizzaCrustPrice;
}
function toppingsPrice () {
    var toppings =$(".toppings").val();
    var pizzaToppingPrice=  50;
    return pizzaToppingPrice;
}
function numberOfPizzaPrice () {
    var pizzas = $("#numberOfPizzas").val();
    var numberOfPizza = parseInt(pizzas);
    return numberOfPizza;
}
function pizzaPrice () {
    var totalPrice = (sizePrice()+ crustPrice()+ toppingsPrice()) * numberOfPizzaPrice();
    console.log(totalPrice);

    $("#price").text(+ totalPrice)
}

function Pizza( type,size,crust,topping,pizzanumber) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.pizzanumber = pizzanumber;
}

Pizza.prototype.addEverything = function () {
    return this.type + "," + this.size + "," + this.crust + "," + this.topping + "," + this.pizzanumber +" pizzas"; 
}

function deliveryPizza () {
    var deliverypoint = $("#location").val();
    alert("Your order shall be delivered to " + deliverypoint);
}

function pickUpPizza () {
    alert("Your order will be ready in 20min!");
}
function resetFields() {
    var type = $("select#pizzaType").val("");
    var size = $("select#pizzaSize").val("");
    var crust = $("select#pizzaCrust").val("");
    var topping = $("select#toppings").val("");
    var pizzanumber =$("input#numberOfPizzas").val("");
   }



$(document).ready(function(){
    $("#pickUp").click(function(event){
        event.preventDefault();

        $("#pickUp").show();
        $("#delivery").hide();

     var type = $("#pizzaType").val();
     var size = $("#pizzaSize").val();
     var crust = $("#pizzaCrust").val();
     var topping = $("#toppings").val();
     var pizzanumber =$("#numberOfPizzas").val();

     var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)

     $("#pizzaForPickUp").show();
     $("#pizzaForDelivery").hide();
     $("ul#pizzaForPickUp").append("<li>" + pizzaOrder.addEverything() + "</li>");

    })
    $("#delivery").click(function(event){
        event.preventDefault();

        $("#delivery").show();
        $("#pickUp").hide();
        
        var address=$("#location").val();
        $("#delivery").text("The order will be delivered at " + address)

     var type = $("#pizzaType").val();
     var size = $("#pizzaSize").val();
     var crust = $("#pizzaCrust").val();
     var topping = $("#toppings").val();
     var pizzanumber =$("#numberOfPizzas").val();

     var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)

     $("#pizzaForPickUp").hide();
     $("#pizzaForDelivery").show();
     $("ul#pizzaForDelivery").append("<li>" + pizzaOrder.addEverything() + "</li>");

    })
    $("#purchase").click(function(event){
        event.preventDefault();

        var type = $("#pizzaType").val();
        var size = $("#pizzaSize").val();
        var crust = $("#pizzaCrust").val();
        var topping = $("#toppings").val();
        var pizzanumber =$("#numberOfPizzas").val();
   
        var pizzaOrder = new Pizza(type, size, crust, topping, pizzanumber)
   
        $("ul#finalList").append("<li>" + pizzaOrder.addEverything() + "</li>");

    resetFields();

    });
   

});
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
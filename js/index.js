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

$(document).ready(function() {
    var subtotal = $('.small').val() * $('.quantity').val();
    var removeBtn = $('<button class="remove"></button>').text('Remove');
    $('.btn-cart').click(function tot() {
        alert(subtotal);
        $('.subtotal').show();
        $(".subtotal").append("Kshs. " + subtotal);
        $('.subtotal').append(removeBtn);
        $('.remove').click(function() {
            $('.subtotal').empty();
            $('.subtotal').hide();
        });
    });
});
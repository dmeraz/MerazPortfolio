$(document).ready(function () { //anonymous function
    $("#code1").mouseover(400).fadeOut(function () {
        $(this).attr('src', 'images/virtual-pet-code.png').fadeIn(500);
    });
});
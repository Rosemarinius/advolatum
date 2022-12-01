let itemInCart = 0;

$(".header-burger").click(function() {
    $(".burger-menu").slideDown("slow");
    $("body").addClass("lock");
})
$(".burger-menu__close").click(function() {
    $(".burger-menu").fadeOut("slow");
    $("body").removeClass("lock");
})


$(".actual-card__photo").click(function() {
    $(this).closest(".actual-card-flip").css("transform", "rotateY(180deg)");
})
$(".actual-card__bg").click(function() {
    $(this).closest(".actual-card-flip").css("transform", "rotateY(0)");
})
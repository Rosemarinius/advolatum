$(".actual-card__photo").click(function() {
    $(this).closest(".actual-card-flip").css("transform", "rotateY(180deg)");
})
$(".actual-card__bg").click(function() {
    $(this).closest(".actual-card-flip").css("transform", "rotateY(0)");
})
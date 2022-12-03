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



$(".put-in-cart, .more").click(function() {
    const card = this.closest(".product");

    const productInfo = {
        id: card.dataset.id,
        img: card.querySelector(".product-image").getAttribute("src"),
        productName: card.querySelector(".product-name").innerText,
        price: card.querySelector(".product-price").innerText,
    };

    const productCardHTML = `<div class="product-card centered">
<div class="product-card__image">
    <img src="${productInfo.img}" alt="product-img">
</div>
<div class="product-card__info">
    <i class="product-card__close icon-cross"></i>
    <h3 class="product-card__price product-price">${productInfo.price}</h3>
    <p class="product-card__description product-description">
        Описание товара или состав
        ткани, в общем любая информация
        которая может потребоваться
        покупателю</p>
    <ul class="product-card__sizes">
        <li class="product-card__size hover-yellow">XS</li>
        <li class="product-card__size hover-yellow">S</li>
        <li class="product-card__size hover-yellow">M</li>
        <li class="product-card__size hover-yellow">L</li>
        <li class="product-card__size hover-yellow">XL</li>
    </ul>
    <ul class="product-card__colors">
        <li class="product-card__color"><img src="img/svg/color-white.svg" alt="purple"></li>
        <li class="product-card__color"><img src="img/svg/color-green.svg" alt="purple"></li>
        <li class="product-card__color"><img src="img/svg/color-blue.svg" alt="purple"></li>
        <li class="product-card__color"><img src="img/svg/color-purple.svg" alt="purple"></li>
        <li class="product-card__color"><img src="img/svg/color-yellow.svg" alt="purple"></li>
    </ul>
    <div class="product-cart-button-wrapper">
        <button class="product-card__button product-card-button button">
            <img src="img/svg/wing.svg" alt="wing">
            <a class="product-card-button__text link-reset">В корзину</a>
        </button>
    </div>
</div>
</div>`

    $(".dark-bg-product-card").css("display", "flex").fadeIn("slow").append(productCardHTML);
    $("body").addClass("lock");
    $(".product-card__close").click(function() {
        $(".dark-bg-product-card").fadeOut("slow");
        $(".product-card").remove();
        $("body").removeClass("lock");
    })
});
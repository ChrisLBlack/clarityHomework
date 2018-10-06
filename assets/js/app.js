itemsArr.map((p) => {
    let itemString = '<div class="card"><img class="card-img-top" src="' + p.image + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + p.title + '</h5><p class="card-text">' + p.body + '</p></div><div class="card-footer"><span>' + p.price + '</span><button data-title="' + p.title + '" data-price="' + p.price + '"> Add To Cart</button></div></div>'

    $(".card-deck").append(itemString);
});

let cartItems = [];

$("button").click(function () {
    let itemTitle = $(this).attr("data-title");
    let itemPrice = $(this).attr("data-price");
    cartItems.push({
        title: itemTitle,
        price: itemPrice
    });
});

// let checkOut = function (){

// }

$('button').click('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
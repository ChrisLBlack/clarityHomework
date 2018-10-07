//this pulls the items from the object in items.js, loops throught them and appends it to the page in the index.html file
itemsArr.map((p) => {
    let itemString = '<div class="card"><img class="card-img-top" src="' + p.image + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + p.title + '</h5><p class="card-text">' + p.body + '</p></div><div class="card-footer"><span>' + p.price + '</span><button class="add" data-title="' + p.title + '" data-price="' + p.price + '"> Add To Cart</button></div></div>'

    $(".card-deck").append(itemString);
});
//items in the users cart
let cartItems = [];
//event listener to to add items to the cartItems array when the "add to cart" button is clicked
$(".add").click(function () {
    let itemTitle = $(this).attr("data-title");
    let itemPrice = $(this).attr("data-price");
    cartItems.push({
        title: itemTitle,
        price: itemPrice
    });
    displayCart();
});
//this function loops through the items in the cartItemsArray array and appends them to the index.html
function displayCart() {
    cartItemsArray = [];
    cartItems.map(function (item) {
        let cartItemHtml = '<li class="list-group-item">Item: ' + item.title + '. Price: ' + item.price + '</li>'
        cartItemsArray.push(cartItemHtml);
    });
    cartItemsStr = cartItemsArray.join(' ');
    $(".cartItems").html(cartItemsStr);
    $(".checkoutItems").html(cartItemsStr)
}

let totalPrice = 0;

$(".check-out").click(function () {
    totalArr = [];

    cartItems.map(function (number) {
        totalArr.push(number.price.split('')[1]);
    })
    totalArr.reduce(function(a,b) {
        totalPrice = parseInt(a) + parseInt(b);
    })
    $("#total").html('Total: $' + totalPrice + '.00');
})
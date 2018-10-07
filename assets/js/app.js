//this pulls the items from the object in items.js, loops throught them and appends it to the page in the index.html file
itemsArr.map((p) => {
    let itemString = '<div class="card"><img class="card-img-top" src="' + p.image + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + p.title + '</h5><p class="card-text">' + p.body + '</p></div><div class="card-footer"><span>' + p.price + '</span><button class="add" data-title="' + p.title + '" data-price="' + p.price + '"> Add To Cart</button></div></div>'

    $(".card-deck").append(itemString);
});
//items in the users cart array
let cartItems = [];
//event listener to to add items to the cartItems array when the "add to cart" button is clicked.
//I didn't have enough time to add a button to remove the items from the cart if wanted to by the user.
$(".add").click(function () {
    let itemTitle = $(this).attr("data-title");
    let itemPrice = $(this).attr("data-price");
    cartItems.push({
        title: itemTitle,
        price: itemPrice
    });
    displayCart();
});

//this function loops through the items in the cartItemsArray array and appends them to the index.html page and diplays them in a container for the user.
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

//This function list the items in the cart inside of the "check out" modal and calculates the total price of the items.
$(".check-out").click(function () {
    let totalPrice = 0;
    totalArr = [];
    //maps through all items added in cart and pulls out the first two numbers, concatenates them, and parses them to integers.
    cartItems.map(function (number) {
        let a = number.price.split('')[1];
        let b = number.price.split('')[2];
        let c = a + '' + b;
        totalArr.push(parseInt(c));
    });
    
    //if only one item in cart, no need to loop.  Total price is the price of the only item in the cart
    if (totalArr.length <= 1){
        totalPrice = totalArr[0];
    }
    //loops through prices added to the "totalArr" array and adds up total
    totalArr.reduce(function (a,b) {
         return totalPrice = a + b;
    });
    //
    $("#total").html('Total: $' + totalPrice + '.00');
});
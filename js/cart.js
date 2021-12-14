class Cart {

    displayCart() {

        let user = JSON.parse(localStorage.user)
        const data = {
            userId: user['userId']
        };

        fetch("http://localhost/api-for-shop/api/v1/pages/displaycart", {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

            .then((response) => response.json())
            .then((data) => {
                var temp = ""
                
                if (data['response'] == undefined) {
                  
                    const cart = document.querySelector('.cart')
                    if (cart) {
                        document.querySelector('.cart').style.display = 'none'
                    }
                    const emptycart = document.querySelector('.empty-cart')
                    if (emptycart) {
                        emptycart.innerHTML = 'Your cart is currently empty.'
                    }
                }

                //start loop
                else if (data['response'].length > 0) {
                    data['response'].forEach((cart) => {

                        temp += "<tr>";
                        temp += "<td><a class='text-dark' href='cart.html?item="
                            + cart.cartId + "' class='btn btn-light'>x</a></td>";
                        temp += "<td><a class='text-dark' href='product.html?product="
                            + cart.slug + "'>"
                            + cart.title + "</a><br><small>R" + Math.round(cart.price) + "</small></td>";

                        temp += "<td><img class='img-thumbnail' src='" + cart.image + "' style='max-width:70px;''> </td></tr>";
                        // temp += "<td class='text-end'>1</td></tr>";


                        let total = document.getElementById('totalPrice')
                        if (total) { total.innerHTML = "R" + data['count'] * cart.price }
                        let cartCountDisplay = document.querySelector('.cartCount')
                        if (cartCountDisplay) { cartCountDisplay.innerHTML = data['count'] }
                    })
                    //close the for loop

                    let cartdata = document.getElementById("cartdata")
                    if (cartdata) { cartdata.innerHTML = temp }

                    localStorage.setItem('cart', JSON.stringify(data['response']))
                }

            })

            .catch((error) => {
                console.error('Error:', error)
            })
    }

}



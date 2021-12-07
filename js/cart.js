class Cart {

    // findUserCart() {

    // }

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
                console.log('Success:', data['response'])

                var temp = ""

                //start loop
                if (data['response'].length > 0) {
                    data['response'].forEach((cart) => {

                        temp += "<tr>";
                        temp += "<td><a class='text-dark' href='cart.html?item="
                            + cart.cartId + "' class='btn btn-light'>x</a></td>";
                        temp += "<td><a class='text-dark' href='product.html?product="
                            + cart.slug + "'>"
                            + cart.title + "</a><br><br><small>R" + Math.round(cart.price) + "</small></td>";

                        temp += "<td><img class='img-thumbnail' src='" + cart.image + "' style='max-width:70px;''> </td>";
                        temp += "<td class='text-end'>1</td></tr>";


                        let total = document.getElementById('totalPrice')
                        if (total) { total.innerHTML = data['count'] * cart.price }
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


        // fetch("http://localhost/api-for-shop/api/v1/pages/displaycart").then(
        //     res => {
        //         res.json().then(
        //             data => {
        //                 console.log(data['response'])   
        //                 console.log(data)                    

        //                 if (data['response'].length >= 0) {
        //                     var temp = ""

        //                     //start loop
        //                     data['response'].forEach((cart) => {

        //                         temp += "<tr>";
        //                         temp += "<td><a class='text-dark' href='cart.html?item="
        //                         + cart.cartId + "' class='btn btn-light'>x</a></td>";
        //                         temp += "<td><a class='text-dark' href='product.html?product=" 
        //                         + cart.slug + "'>" 
        //                         + cart.title + "</a><br><br><small>R" + Math.round(cart.price) + "</small></td>";

        //                         temp += "<td><img class='img-thumbnail' src='" + cart.image + "' style='max-width:70px;''> </td>";
        //                         temp += "<td class='text-end'>1</td></tr>";


        //                         let total = document.getElementById('totalPrice')
        //                         if(total){total.innerHTML = data['count'] * cart.price}                             
        //                         let cartCountDisplay = document.querySelector('.cartCount')
        //                         if(cartCountDisplay){cartCountDisplay.innerHTML = data['count']}
        //                     })

        //                     //close the for loop
        //                     let cartdata = document.getElementById("cartdata")
        //                     if(cartdata){ cartdata.innerHTML = temp}

        //                     localStorage.setItem('cart', JSON.stringify(data['response']))

        //                 }
        //             }
        //         )
        //     }
        // )
    }

}



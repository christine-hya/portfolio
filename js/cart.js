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
                if(total){total.innerHTML = data['count'] * cart.price}                             
                let cartCountDisplay = document.querySelector('.cartCount')
                if(cartCountDisplay){cartCountDisplay.innerHTML = data['count']}
            })

            //close the for loop
            let cartdata = document.getElementById("cartdata")
            if(cartdata){ cartdata.innerHTML = temp}
          
            localStorage.setItem('cart', JSON.stringify(data['response']))
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
//     getCartDisplay(products) {
//         let totalPrice = 0
//         let count = 0
//         $(products).each(function (index, product) {
//             console.log(product)
//             count += product.qty


//             let price = product.qty * product.price
//             totalPrice += price
//             $(".cartDisplay tbody").prepend(
//                 '<tr><td><div><h6>'
//                 + product.qty + '</h6></td><td> <a href="' 
//                 + product.productURL + '" class="text-dark"><img src="' 
//                 + product.image + '" class="img-thumbnail" style="max-width:50px;"></a></td><td><h6>'
//                 + product.title + '</h6><small>' 
//                 + product.price + '</small></td><td class="text-end"><span class="text-muted">$'              
//                 + price.toFixed(2) + '</span></td></tr>'
//             )
//         })
//         $(".price").html(totalPrice)
//         localStorage.setItem("cartCount", count)
//         $('span.cartCount.badge').html(count)


//     }
// }



    //     $.ajax({

    //         type: 'GET',
    //         url: apiURL + "carts/user/" + userId,
    //         success: function (data) {


    //             $(data).each(function (index, cart) {

    //                 let carts = []
    //                 $(cart.products).each(function (index, products) {
    //                     let singleProduct = {} 
    //                     $.ajax({
    //                         type: "GET",
    //                         url: apiURL + "products/" + products.productId,
    //                         success: function (product) {

    //                             // console.log(product)
    //                             singleProduct['productId'] = product.id
    //                             singleProduct['productURL'] = "/product.html?productid=" + product.id
    //                             singleProduct['title'] = product.title
    //                             singleProduct['price'] = product.price
    //                             singleProduct['image'] = product.image
    //                             singleProduct['qty'] = products.quantity
    //                             carts.push(singleProduct)
    //                             localStorage.setItem('cart', JSON.stringify(carts))
    //                         }
    //                     })
    //                 })

    //             })

    //         }
    //     })
    // }
 

class Products {
    constructor() {
        this.apiUrl = "http://localhost/api-for-shop/api/v1/pages/"
    }

    getNewProducts(limit) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "/services",
            success: function (data) {
                console.log(data)
                $(data['response']).each(function(index, product){
                    $(".products").append(
                        '<div class="col-md-3"><p>' + product.title + ' </p></div>'
                    )
                    console.log(product.title)
                })
            },
        })
    }

    // getSingleProduct(id) {
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiUrl + "products/" + id,
    //         success: function (data) {
    //         console.log(data)
    //         $('.product_image').html('<img src="' + data.image + '" class="img-fluid">')

    //         $('.product_title').html(data.title)
    //         $('.product_price').html('$' + data.price.toFixed(2))
    //         $('.product_description').html('<p>' + data.description + '</p>')
    //         },
    //     })
    // }
}
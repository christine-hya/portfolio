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
                        '<div class="col-md-3"><img src="'+ product.image +
                        '" class="img-fluid"><a href="product.html?product=' 
                        + product.slug + 
                        '">' + product.title + '</a></div>'
                    )
                    console.log(product.slug)
                })
            },
        })
    }

    getSingleProduct(slug) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "single?product=" + slug,
            success: function (data) {
            console.log(data)
            console.log(data['response'])
            $(data['response']).each(function(index, product){
            $('.product_image').html('<img src="' + product.image + '" class="img-fluid">')

            $('.product_title').html(product.title)
            $('.product_price').html('R' + product.price)
            $('.product_description').html('<p>' + product.description + '</p>')

            })
     
            },
        })
    }
}
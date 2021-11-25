class Products {
    constructor() {
        this.apiUrl = "https://fakestoreapi.com/"
    }

    getNewProducts(limit) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "products?limit=" + limit + "&sort=desc",
            success: function (data) {
                console.log(data)
                $(data).each(function(index, product){
                    $(".products").append(
                        '<div class="col-md-3"><a href="/product.html?productid=' 
                        + product.id + 
                        '"><img src="'+ product.image +
                        '" class="img-fluid">' 
                        + product.title + 
                        "</a></div>"
                    )
                })
            },
        })
    }

    getSingleProduct(id) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "products/" + id,
            success: function (data) {
            console.log(data)
            $('.product_image').html('<img src="' + data.image + '" class="img-fluid">')

            $('.product_title').html(data.title)
            $('.product_price').html('$' + data.price.toFixed(2))
            $('.product_description').html('<p>' + data.description + '</p>')
            },
        })
    }
}
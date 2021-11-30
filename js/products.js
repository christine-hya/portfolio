class Products {
    constructor() {
        this.apiUrl = "http://localhost/api-for-shop/api/v1/pages/"
    }

    getNewProducts() {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "/services",
            success: function (data) {
                console.log(data)
                $(data['response']).each(function(index, product){
                    $(".products").append(
                        '<div class="col-md-3"><div class="product"><div class="image"><img src="'+ product.image +
                        '" class="img-fluid"></div><div class="info"><a href="product.html?product=' 
                        + product.slug + 
                        '"><div class="title">' + product.title + '<br>R' + Math.round(product.price) + '</div></div></a></div></div>'
                    )
                })
            },
        })
    }

    getSingleProduct(slug) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "single?product=" + slug,
            success: function (data) {
          
            $(data['response']).each(function(index, product){
            $('.product_image').html('<img src="' + product.image + '" class="img-fluid">')

            $('.product_title').html(product.title)
            $('.product_price').html('R' + Math.round(product.price))
            $('.product_description').html('<p>' + product.description + '</p>')
            $('.breadcrumb').html(
                '<a class="text-dark" href="index.html">Home</a><span class="sep">></span><a class="text-dark" href="/category.html?category='
                + product.categories
                + '">' + toTitleCase(product.categories) + '</a><span class="sep">></span>'  + product.title             
            )
            })
     
            },
        })
    }
}
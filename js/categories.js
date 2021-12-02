class Categories {
    constructor() {
        this.apiUrl = "http://localhost/api-for-shop/api/v1/pages"
    }

    //display in nav
    getAllCategories() {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "/categories",
            success: function (data) {
                $(data['response']).each(function(index, category){
                    $('.categories').append(
                        '<li class="text-center"><a class="dropwdown-item" href="/category.html?category='
                        + encodeURIComponent(category.categories) 
                        + '">' + 
                        toTitleCase(category.categories) + 
                        "</a></li>" 
                    )
                })
            }
        })
    }

    getSingleCategory(slug) {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + '/' + slug,
            success: function (data) {
            
            console.log(data['response'])
            $(data['response']).each(function(index, product){
                $(".products-category").append(
                    '<div class="col-md-3"><div class="product"><div class="image"><img src="'+ product.image +
                    '" class="img-fluid"></div><div class="info"><a href="product.html?product=' 
                    + product.slug + 
                    '"><div class="title">' + product.title + '<br>R' + Math.round(product.price) + '</div></div></a></div></div>'
                )
            
            })    
            },
        })
    }
}
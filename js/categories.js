class Categories {
    constructor() {
        this.apiUrl = "http://localhost/api-for-shop/api/v1/pages"
    }

    getAllCategories() {
        $.ajax({
            type: 'GET',
            url: this.apiUrl + "/categories",
            success: function (data) {
                $(data['response']).each(function(index, category){
                    $('.categories').append(
                        '<a class="dropwdown-item" href="/category.html?category='
                        + encodeURIComponent(category.categories) 
                        + '">' + 
                        category.categories + 
                        "</a><br>" 
                    )
                })
            }
        })
    }

    // getSingleCategory(slug) {
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiUrl + "category/" + slug,
    //         success: function (data) {
    //             console.log(data)
    //             $(data).each(function(index, product){
    //                 $(".products").append(
    //                     '<div class="col-md-3"><a href="/product.html?productid=' 
    //                     + product.id + 
    //                     '"><img src="'+ product.image +
    //                     '" class="img-fluid">' 
    //                     + product.title + 
    //                     "</a></div>"
    //                 )
    //             })
    //         }
    //     })
    // }
}
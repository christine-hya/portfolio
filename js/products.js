class Products {
    constructor() {
        this.apiUrl = "http://localhost/api-for-shop/api/v1/pages/"
    }

    getNewProducts() {

        fetch(this.apiUrl + "/services").then(
            res => {
                res.json().then(
                    data => {
                        var temp = "";

                        //start loop
                        data['response'].forEach((product) => {
                            temp += '<div class="col-lg-3"><div class="product m-3 bg-light"><div class="image"><img src="'
                                + product.image +
                                '" class="img-fluid"></div><div class="info"><a class="fw-bold fs-4 product-links" href="product.html?product='
                                + product.slug +
                                '"><div class="title">'
                                + product.title + '<br>R' + Math.round(product.price) + '</div></div></a></div></div>';

                        })
                        //close the for loop
                        document.querySelector('.products').innerHTML = temp;
                    }
                )
            }
        )
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    getSingleProduct(slug) {
        fetch(this.apiUrl + "single?product=" + slug).then(
            res => {
                res.json().then(
                    data => {

                        //start loop
                        data['response'].forEach((product) => {
                            document.querySelector('.product_image').innerHTML = '<img src="' + product.image + '" class="img-fluid">'
                            document.querySelector('.product_title').innerHTML = product.title
                            document.querySelector('.product_price').innerHTML = 'From R' + Math.round(product.price)
                            document.querySelector('.product_description').innerHTML = '<p>' + product.description + '</p>'
                            document.querySelector('.breadcrumb').innerHTML = '<a class="yellow-links" href="index.html">Home</a><span class="sep">></span><a class="yellow-links" href="/category.html?category='
                                + product.categories + '">' + toTitleCase(product.categories) + '</a><span class="sep">></span>' + product.title
                        })
                        //close the for loop                      
                    }
                )
            }
        )
            .catch((error) => {
                console.error('Error:', error)
            })
    }
}
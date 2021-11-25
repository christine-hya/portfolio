$.get('/templates/navigation.html', function (data){
    $('#nav-placeholder').replaceWith(data)
})

$.get('/templates/footer.html', function (data){
    $('#footer-placeholder').replaceWith(data)
})

$(function () {
    loadScript('js/categories.js', categoriesSetup)
    loadScript('js/products.js', productsSetup)
});

var categoriesSetup = function () {
    let categories = new Categories()
    categories.getAllCategories()
    if(urlParam('category')){
    categories.getSingleCategory(decodeURIComponent(urlParam('category')))
    }
}

var productsSetup = function () {
    let products = new Products()
    if($('.products.new').length){
        products.getNewProducts(8) 
    }
    if (urlParam('productid')){
    products.getSingleProduct(urlParam('productid'))
    }
}

function loadScript (url, callback){
     var head = document.head
     var script = document.createElement('script')
     script.src = url
     script.onreadystatechange = callback
     script.onload = callback
     head.appendChild(script)
}

//title case to reuse
function toTitleCase(str){
    return str.replace(/(?:^|\s)\w/g, function(match){
        return match.toUpperCase()
    })
}

function urlParam(name){
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href)
    if(results == null) {
        return null
    }else {
        return results[1] || 0
    }
}
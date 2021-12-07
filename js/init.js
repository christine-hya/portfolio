//load content
$(function () {
    // make account page and logout inaccessible
    if (localStorage.getItem('user') == null && $('.auth').length) {
        window.location.href = "/login.html"
    }
    loadScript('js/categories.js', categoriesSetup)
    loadScript('js/products.js', productsSetup)
    loadScript('js/addtocart.js', addtoCart)
    loadScript('js/auth.js', userInfo)
    loadScript('js/signup.js')
    loadScript('js/login.js')
    loadScript('js/contact.js')
    loadScript('js/cart.js', cartInfo)
    loadScript('js/delete.js', deletefromCart)
});

//display header 
$.get('/templates/navigation.html', function (data) {
    $('#nav-placeholder').replaceWith(data)

    if (localStorage.getItem('user') == null) {
        document.querySelector('.accountNav').innerHTML = '<li class="nav-item"><a class="nav-link active" aria-current="page" href="login.html">Log in</a></li>'
    } else {
        document.querySelector('.accountNav').innerHTML = '<li class="nav-item"><a class="nav-link active logout" aria-current="page" href="#">Log out</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="account.html">Account</a></li>'
    }
})

//display footer
$.get('/templates/footer.html', function (data) {
    $('#footer-placeholder').replaceWith(data)
})

//get categories from api
const categoriesSetup = function () {
    let categories = new Categories()
    categories.getAllCategories()
    if (urlParam('category')) {
        categories.getSingleCategory(decodeURIComponent(urlParam('category')))
    }
}

//get products from api
const productsSetup = function () {
    let products = new Products()
    if ($('.products.new').length) {
        products.getNewProducts(8)
    }
    if (urlParam('product')) {
        products.getSingleProduct(urlParam('product'))
    }
}

const cartInfo = function () {
    let cart = new Cart()

    if (localStorage.getItem("user") != null) {
        // cart.findUserCart()
        cart.displayCart()
        //     let user = JSON.parse(localStorage.user)
        //     cart.getCart(user.id)
        //     setTimeout(() => {
        //         let cartItems = JSON.parse(localStorage.getItem('cart'))
        //         cart.getCartDisplay(cartItems)
        //     },1000)
    }
}

//add to cart
const addtoCart = function () {
    let addtoCartButton = document.querySelector('#addtoCart')
    let loginMsg = document.querySelector('.login-cart')
    if (addtoCartButton) {

        //when user is not logged in    
        if (localStorage.getItem("user") == null) {
            addtoCartButton.style.display = "none"
            loginMsg.style.display = "block"
        }
        //when user is logged in
        else {
            addtoCartButton.style.display = "block"
            loginMsg.style.display = "none"

            addtoCartButton.addEventListener("click", (e) => {

                let cartItem = new Cartitem
                if (urlParam('product')) {
                    cartItem.addItem(urlParam('product'))
                }
            });
        }

    }
}

//delete item from cart
const deletefromCart = function () {
    if (urlParam('item')) {
        let deleteItem = new Deleteitem
        deleteItem.deleteItem(urlParam('item'))
    }
}

//log in
const userInfo = function () {
    const auth = new Auth()
    let logoutLink = document.querySelector(".logout")

    if (logoutLink) {
        logoutLink.addEventListener("click", (e) => {
            auth.logOut()
        });
    }
}


//function to load js scripts
function loadScript(url, callback) {
    var head = document.head
    var script = document.createElement('script')
    script.src = url
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}

//title case to reuse
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase()
    })
}

//creating the url
function urlParam(name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href)
    if (results == null) {
        return null
    } else {
        return results[1] || 0
    }
}
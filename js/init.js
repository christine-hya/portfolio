//load content
$(function () {
    // make account page and logout inaccessible
    if (localStorage.getItem('user') == null && $('.auth').length) {
        window.location.href = "/login.html"
    }
    loadScript('js/categories.js', categoriesSetup)
    loadScript('js/products.js', productsSetup)
    loadScript('js/auth.js', userInfo)
    loadScript('js/signup.js', signupUser)
    loadScript('js/login.js')
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
var categoriesSetup = function () {
    let categories = new Categories()
    categories.getAllCategories()
    if (urlParam('category')) {
        categories.getSingleCategory(decodeURIComponent(urlParam('category')))
    }
}

//get products from api
var productsSetup = function () {
    let products = new Products()
    if ($('.products.new').length) {
        products.getNewProducts(8)
    }
    if (urlParam('product')) {
        products.getSingleProduct(urlParam('product'))
    }
}

//signup
const signupUser = function () {


    let signupForm = document.querySelector(".signup")
    if (signupForm) {
        signupForm.addEventListener("click", (e) => {
            // const signup = new Signup()

            const fields = ["username", "fname", "lname", "email", "password"];
            const signup = new Signup(form, fields);
            signup.addUser()
        })
    };
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


// var userInfo = function() {
//     let user = new User(); 
//instantiate auth class here on form submit
// $('form.login').submit(function(e){
//     e.preventDefault()
//     var username = $('#username').val()
//     var password = $('#password').val()
//     user.doLogin(username, password)
// })


//     if($('.userAccount').length){
//         var userAccount = JSON.parse(localStorage.user)
//         // user.getAccountInfo(userAccount)
//     } 
// }

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
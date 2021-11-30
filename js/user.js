class User {

    constructor(){
        this.apiUrl = "https://fakestoreapi.com/";
    }

    doLogin(username, password) {
        localStorage.clear()
        $.ajax({
            type: "GET",
            url: this.apiUrl + "users",
            success: function (data) {
                console.log(data)
                $(data).each(function (index, user){
                    if(user.username == username && user.password == password){
                        localStorage.setItem("user", JSON.stringify(user))
                    }

                })
                if (localStorage.getItem('user') != null){
                    window.location.href = '/account.html'
                }else{
                    $('.loginMsg').html('<div class="alert alert-danger" role="alert">Your password or username is incorrect. Please try again.</div>')
                }

            }

        })
    }
}
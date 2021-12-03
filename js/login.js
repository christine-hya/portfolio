// class User {

//     constructor(){
//         this.apiUrl = "https://fakestoreapi.com/";
//     }

// getAccountInfo(user){
//     console.log(user)
//     $('#username').val(user.username)
//     $('#fname').val(user.name.firstname)
//     $('#lname').val(user.name.lastname)
//     $('#phone').val(user.phone)
//     $('#email').val(user.email)
//     $('#address').val(user.address.number + ' ' + user.address.street)
//     $('#city').val(user.address.city)
//     $('#zip').val(user.address.zipcode)
// }

// doLogin(username, password) {
//     localStorage.clear()
//     $.ajax({
//         type: "GET",
//         url: this.apiUrl + "users",
//         success: function (data) {
//             console.log(data)
//             $(data).each(function (index, user){
//                 if(user.username == username && user.password == password){
//                     localStorage.setItem("user", JSON.stringify(user))
//                 }

//             })
//             if (localStorage.getItem('user') != null){
//                 window.location.href = '/account.html'
//             }else{
//                 $('.loginMsg').html('<div class="alert alert-danger" role="alert">Your password or username is incorrect. Please try again.</div>')
//             }

//         }

//     })
// }

class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    error++;
                }
            });
            if (error == 0) {
                //do login api here
                var data = {
                    username: document.querySelector('#username').value,
                    password: document.querySelector('#password').value,
                };
                fetch('http://localhost/api-for-shop/api/v1/pages/auth', {
                    method: "POST",
                    body: JSON.stringify(data),
                    header: {
                        "Content-type": "application/json; charset-UTF-8",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.error) {
                            console.error("Error:", data.message);
                            document.querySelector(".error-message-all").
                                style.display = "block";
                            document.querySelector(".error-message-all").
                                innerText = "Your password or username is incorrect, please try again";
                        } else {
                            localStorage.setItem("user", JSON.stringify(data));
                            localStorage.setItem("auth", 1);
                            this.form.submit();
                          
                        }

                    })
                    .catch((data) => {
                        console.error('Error:', data.message);
                    })

            }
        });
    }

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        } else {
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("is-invalid");
        }

        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("is-invalid");
        }
    }
}

const form = document.querySelector(".loginForm");
if (form) {
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}


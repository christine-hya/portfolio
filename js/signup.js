class Signup {
    constructor(signupForm, fields, pwdRepeat, password) {
        this.signupForm = signupForm
        this.fields = fields
        this.pwdRepeat = pwdRepeat
        this.password = password
        this.addUser()
    }

    addUser() {
        let self = this;

        this.signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    error++;
                }
            });
            if (error == 0) {
                 const data = {
                    username: document.querySelector('#username').value,
                    fname: document.querySelector('#fname').value,
                    lname: document.querySelector('#lname').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                };

                fetch('http://localhost/api-for-shop/api/v1/pages/signup', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    header: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                       if(data.error){
                        console.error("Error:", data.message);  
						document.querySelector(".error-message-signup-all").
						style.display = "block";
						document.querySelector(".error-message-signup-all").
						innerText = "Error";
                        

                       }else{
                            console.log("Form submitted")
                            // this.signupForm.style.display = 'none'
                            alert('You have successfully signed up. Use your details to log in.')
                            this.signupForm.submit() 
                        }                     
                    })
                    .catch((data) => {
                        console.error('Error', data.message)
                    })
            }
        })
    }

    isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

	validateFields(field) {
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be blank`,
				"error"
			);
			return false;  
		} 	
        if (field.type == "text"){
        if (this.isNumber(field.value) == true) {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be a number`,
				"error"
			);
			return false;
        }
       }else {
            if(this.pwdRepeat.value !== this.password.value){
                this.setStatus(
                    this.pwdRepeat,
                    this.pwdRepeat.previousElementSibling.innerText = 'password repeat must be the same',
                    "error"
                );
                return false
            }
			if (field.type == "password") {
				if (field.value.length < 8) {
					this.setStatus(
						field,
						`${field.previousElementSibling.innerText} must be at least 8 characters`,
						"error"
					);
					return false
				}
             
                else {
					this.setStatus(field, null, "success");
					return true
				}
               
			} else {
				this.setStatus(field, null, "success");
				return true;
			}
		}
	}

    setStatus(field, message, status) {
		const errorMessage = field.parentElement.querySelector(".error-message-signup");

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

const signupForm = document.querySelector(".signupForm")
const signupMessage = document.querySelector('.signup-success-message')
const pwdRepeat = document.querySelector('#repeatPassword')
const password = document.querySelector('#password')
if (signupForm) {

        const fields = ["username", "fname", "lname", "email", "password", "repeatPassword"];
        const signup = new Signup(signupForm, fields, pwdRepeat, password);
        signup.addUser()
     
};



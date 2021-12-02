class Signup {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
        this.addUser()
    }

    addUser() {
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
                let data = {
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
                        if (data.error) {
                            console.error("Error:", data.message);
                            document.querySelector(".error-message-signup").
                            style.display = "block";
                            document.querySelector(".error-message-signup").
                            innerText = "Your password or username is incorrect, please try again";
                        } else {
                            this.form.submit();
                        }
                    })
                    .catch((data) => {
                        console.error('Error', data.message)
                    })
            }
        })
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
		const errorMessage = field.parentElement.querySelector(".error-message-signup");

		if (status == "success") {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("input-error");
		}

		if (status == "error") {
			errorMessage.innerText = message;
			field.classList.add("input-error");
		}
	}

}

// const signupForm = document.querySelector(".signupForm");
// if (signupForm) {
// 	const fields = ["username", "fname", "lname", "email", "password"];
// 	const validator = new Signup(form, fields);
// }


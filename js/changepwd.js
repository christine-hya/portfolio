class Changepwd {
    constructor(updateForm, updateFields, newPwd, pwdUpdateRepeat ) {
        this.updateForm = updateForm
        this.updateFields = updateFields
        this.newPwd = newPwd
        this.pwdUpdateRepeat = pwdUpdateRepeat
        this.submitNewpwd()
    }

    submitNewpwd() {
        let self = this

        if (this.updateForm) {
            this.updateForm.addEventListener("submit", (e) => {
                e.preventDefault()
                let error = 0
                self.updateFields.forEach((field) => {
                    const input = document.querySelector(`#${field}`)
                    if (self.validateFields(input) == false) {
                        error++
                    }
                })

                if (error == 0) {
                    let user = JSON.parse(localStorage.getItem("user"))
                   
                    const data = {
                        
                        newpassword: document.querySelector('#newpassword').value,
                        userId: user.userId
                       
                    };

                    fetch('http://localhost/api-for-shop/api/v1/pages/changepassword', {
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
                                document.querySelector(".error-message-update-all").
                                    style.display = "block"
                                document.querySelector(".error-message-update-all").
                                    innerText = "Error"

                            } else {
                                let div = document.createElement("div")
                                this.updateForm.append(div)
                                div.outerHTML = '<div class="alert alert-warning alert-dismissible fade show mt-4" role="alert">' + data.message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
                                                                
                            }
                        })
                        .catch((data) => {
                            console.error('Error', data.message)
                        })
                }
            })
        }
    }

 
    isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    validateFields(field) {
        if (field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank.`,
                "error"
            )
            return false
        }
        if (field.type == "text") {
            if (this.isNumber(field.value) == true) {
                this.setStatus(
                    field,
                    `${field.previousElementSibling.innerText} cannot be a number.`,
                    "error"
                )
                return false
            }
        } else {
            if (this.pwdUpdateRepeat.value !== this.newPwd.value) {
                this.setStatus(
                    this.pwdUpdateRepeat,
                    this.pwdUpdateRepeat.previousElementSibling.innerText = 'password repeat must be the same.',
                    "error"
                )
                return false
            }
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be at least 8 characters.`,
                        "error"
                    );
                    return false
                }

                else {
                    this.setStatus(field, null, "success")
                    return true
                }

            } else {
                this.setStatus(field, null, "success")
                return true
            }
        }
    }



setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message-update")

    if (status == "success") {
        if (errorMessage) {
            errorMessage.innerText = ""
        }
        field.classList.remove("is-invalid")
    }

    if (status == "error") {
        errorMessage.innerText = message
        field.classList.add("is-invalid")
    }
}

}

const updateForm = document.querySelector(".updateAccount")
const updateFields = ["newpassword", "repeatnewpassword"]
const newpassword = document.querySelector('#newpassword')
const pwdUpdateRepeat = document.querySelector('#repeatnewpassword')
const updatePwd = new Changepwd(updateForm, updateFields, newpassword, pwdUpdateRepeat)





class Contact {
    constructor(contactForm, contactFields) {
        this.contactForm = contactForm
        this.contactFields = contactFields
        this.submitMessage()
    }

    submitMessage() {
        let self = this

        if (this.contactForm) {
            this.contactForm.addEventListener("submit", (e) => {
                e.preventDefault()
                let error = 0
                self.contactFields.forEach((field) => {
                    const input = document.querySelector(`#${field}`)
                    if (self.validateFields(input) == false) {
                        error++
                    }
                })

                if (error == 0) {
                    const data = {
                        name: document.querySelector('#name').value,
                        surname: document.querySelector('#surname').value,
                        email: document.querySelector('#contactemail').value,
                        message: document.querySelector('#messagebody').value,
                        
                    }

                    fetch('http://localhost/api-for-shop/api/v1/pages/contact', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        header: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.error) {
                                console.error("Error:", data.message)
                                document.querySelector(".error-message-contact-all").
                                    style.display = "block"
                                document.querySelector(".error-message-contact-all").
                                    innerText = "Error"

                            } else {
                                let div = document.createElement("div")
                                this.contactForm.append(div)
                                div.outerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">' + data.message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
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
        }

        else {
            this.setStatus(field, null, "success")
            return true
        }
    }



setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message-contact")

    if (status == "success") {
        if (errorMessage) {
            errorMessage.innerText = "";
        }
        field.classList.remove("is-invalid");
    }

    if (status == "error") {
        errorMessage.innerText = message
        field.classList.add("is-invalid")
    }
}

}


const contactForm = document.querySelector(".contactForm")
const contactFields = ["name", "surname", "contactemail", "messagebody"]
const contact = new Contact(contactForm, contactFields)





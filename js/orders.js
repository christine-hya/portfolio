class Orders {
    constructor(orderForm, orderFields) {
        this.orderForm = orderForm
        this.orderFields = orderFields
        this.submitOrder()
    }

    submitOrder() {
        let self = this;

        if (this.orderForm) {
            this.orderForm.addEventListener("submit", (e) => {
                e.preventDefault();
                let error = 0;
                self.orderFields.forEach((field) => {
                    const input = document.querySelector(`#${field}`);
                    if (self.validateFields(input) == false) {
                        error++;
                    }
                });

                if (error == 0) {
                    const cart = JSON.parse(localStorage.getItem("cart"))
                    let order = []
                    cart.forEach((product) => {
                        order.push(product.title)                        
                    })
                    console.log(order)
                    const data = {
                        name: document.querySelector('#ordername').value,
                        surname: document.querySelector('#ordersurname').value,
                        email: document.querySelector('#ordercontactemail').value,
                        message: document.querySelector('#ordermessage').value,
                        cartItems: order.toString()                        
                    };
                    console.log(data)

                    fetch('http://localhost/api-for-shop/api/v1/pages/submitorder', {
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
                                document.querySelector(".error-message-order-all").
                                    style.display = "block";
                                document.querySelector(".error-message-order-all").
                                    innerText = "Error";

                            } else {
                                alert(data.message)
                                this.orderForm.submit()
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
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }
        if (field.type == "text") {
            if (this.isNumber(field.value) == true) {
                this.setStatus(
                    field,
                    `${field.previousElementSibling.innerText} cannot be a number`,
                    "error"
                );
                return false;
            }
        }

        else {
            this.setStatus(field, null, "success");
            return true;
        }
    }



setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message-order");

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


const orderForm = document.querySelector(".orderForm")
const orderFields = ["ordername", "ordersurname", "ordercontactemail", "ordermessage"];
const order = new Orders(orderForm, orderFields);





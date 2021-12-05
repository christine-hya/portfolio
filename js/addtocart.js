class Cartitem {

    addItem(slug) {
        let user = JSON.parse(localStorage.user)

        const data = {
            userId: user.id
        };
        console.log(data)
        console.log(user.id)
        fetch("http://localhost/api-for-shop/api/v1/pages/" + "addtocart?product=" + slug, {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

        .then((response) => response.json())
        .then((data) => {
            console.log("Product added")
            console.log(data.userId)
            data.message
        })

    }
}
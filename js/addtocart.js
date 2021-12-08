class Cartitem {

    addItem(slug) {
        let user = JSON.parse(localStorage.user)

        const data = {
            userId: user['userId']
        };
      
        fetch("http://localhost/api-for-shop/api/v1/pages/" + "addtocart?product=" + slug, {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

        .then((response) => response.text())
        .then((data) => {
            alert("Item added")
            console.log('Success:', data)
            location.reload()
        })

        .catch((error) => {
            console.error('Error:', error)
          })
          
    }
}
class Deleteitem {

    deleteItem(cartId) {
      
        fetch("http://localhost/api-for-shop/api/v1/pages/" + "delete?item=" + cartId, {
            method: 'DELETE',
        })

        .catch((error) => {
            console.error('Error:', error)
        })
        window.location = "cart.html";
    }
}
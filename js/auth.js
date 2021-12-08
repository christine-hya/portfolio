class Auth {
	constructor() {
		const auth = localStorage.getItem("auth")
		const user = JSON.parse(localStorage.getItem("user"))
		this.validateAuth(auth, user)
	}

	validateAuth(auth, user) {
		if (auth != 1) {
		} else {
			const span_fullname = document.querySelector("#fullname")

			if (span_fullname) {
				span_fullname.innerHTML = user.fname + " " + user.lname
			}
			const username = document.querySelector('#username')
			if (username) {
				username.value = user.username
			}
			const name = document.querySelector('#fnameupdate')
			if (name) {
				name.value = user.fname
			}
			const surname = document.querySelector('#lnameupdate')
			if (surname) {
				surname.value = user.lname
			}
			const email = document.querySelector('#emailupdate')
			if (email) {
				email.value = user.email
			}
		}
	}

	logOut() {
		localStorage.removeItem("auth");
		localStorage.removeItem("user");
		window.location.replace("/");
	}
}
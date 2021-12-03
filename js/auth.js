class Auth {
	constructor() {
		const auth = localStorage.getItem("auth");
		const user = JSON.parse(localStorage.getItem("user"));
		this.validateAuth(auth, user);
	}

	validateAuth(auth, user) {
		if (auth != 1) {
			// window.location.replace("/");
            // 
		} else {
			const span_username = document.querySelector("#fullname");
			if(span_username){
			span_username.innerHTML = user.fname + " " + user.lname;
		}

		}
	}

	logOut() {
		localStorage.removeItem("auth");
		localStorage.removeItem("user");
		window.location.replace("/");
	}
}
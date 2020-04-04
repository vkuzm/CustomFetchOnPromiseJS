const XMLHttpRequest = require("xhr2");

const fetch = (url, params) => {
	const { method, body, headers } = params;

	class Response {
		constructor(response) {
			this.response = response;
		}
		
		status() {
			return this.response.status;
		}
		
		body() {
			return this.response.responseText;
		}
		
		json() {
			return JSON.parse(this.body());
		}
	}
	
	class Error {
		constructor(error) {
			this.error = error;
		}
		
		status() {
			return this.error.status;
		}
		
		message() {
			return this.error.responseText;
		}
	}
	
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200 
				|| this.readyState == 4 && this.status == 201) {
				resolve(new Response(this));
		}
	};

	xhttp.onerror = function() {
		reject(new Error(this));
	};

	xhttp.open(method, url, true);

	if (method === "POST") {
		if (headers && !headers.empty) {
			headers.forEach((header) => {
				const key = Object.keys(header)[0];
				const value = Object.values(header)[0];
				xhttp.setRequestHeader(key, value);
			});
		}
		xhttp.send(JSON.stringify(body));

	} else {
		xhttp.send();
	}
});
};

// GET
function getUsers() {
	fetch("https://jsonplaceholder.typicode.com/users", "GET")
	.then(result => result.json())
	.then(users => {
		console.log("Result", users);
	})
	.catch(error => {
		console.log("Error", error.message());
	})
}

// POST
function savePost() {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: {
			userId: 100500,
			title: "Hello World",
			body: "This is the text for the example!"
		},
		headers: [
			{"Content-type": "application/json; charset=UTF-8"}
		]
	})
	.then(result => result.json())
	.then(result => {
		console.log("The post is saved:", result);
	})
	.catch(error => {
		console.log("Error", error.message());
	})
}

//getUsers();
//savePost();

fetch.
